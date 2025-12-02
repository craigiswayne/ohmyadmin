import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.get('/mock/avatar/random.jpg', (req, res) => {
  const never_cache = true
  if(never_cache){
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
  }
  const random_number = Math.floor(Math.random() * 200) + 1;
  const target_url = `https://mockmind-api.uifaces.co/content/human/${random_number}.jpg`;
  console.log('Serving Random Avatar Image:', target_url);
  res.redirect(target_url);
});

app.get('/mock', (req, res) => {
  res.json({
    title: 'Mock Data from SSR',
    items: [
      { id: 1, name: 'Craig' },
      { id: 2, name: 'Wayne' }
    ]
  });
});

app.get('/mock/avatar/:id.jpg', (req, res) => {
  const id = req.params.id;

  if (isNaN(Number(id))) {
    res.status(400).send('Invalid Avatar ID');
    return;
  }

  const target_url = `https://mockmind-api.uifaces.co/content/human/${id}.jpg`;
  res.redirect(target_url);
});

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
