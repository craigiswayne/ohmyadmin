# Oh My Admin

(Yet another) Admin Dashboard

After searching countless admin dashboards, i just decided to build my own one

The worst thing I encountered with all the dashboards was the lack of toggling features on and off

So I decided to build a dashboard, using a settings first approach

That's it, ok bye

---

## Feature Matrix

| Feature                                         | Setting | EPNetUsers | Domestic Online | Microbilling |
|-------------------------------------------------|---------|------------|-----------------|--------------|
| Profile Component                               |         | Yes        | Yes             | Yes          |
| OAuth / Single Sign On                          |         | Yes        | Yes             | Yes          |
| > OKTA                                          |         | Yes        | No              | Yes          |
| > Google                                        |         | No         | Yes             | No           |
| > Microsoft AD Logins                           |         | Maybe      | No              | Maybe        |
| > Login / Logout                                |         | Yes        | Yes             | Yes          |
| Notification Component                          |         | Maybe      | No              | Yes          |
| RBAC Management                                 |         | Yes        | Yes             | Yes          |
| Google Maps Reviews Notifications               |         | No         | Yes             | No           |
| Search Component                                |         | Yes        | Yes             | Yes          |
| Decide what is searchable                       |         |            |                 |              |
| Table Component                                 |         | Yes        | Yes             | Yes          |
| export visible table data as csv                |         | Yes        | Yes             | Yes          |
| Reports via tables                              |         |            |                 |              |
| Theming:                                        |         |            |                 |              |
| > dark n light mode                             |         |            |                 |              |
| > allow custom themes                           |         |            |                 |              |
| > company branding page (save to settings file) |         |            |                 |              |
| Tracking / Logging                              |         | Yes        | Yes             | Yes          |
| > Page Views                                    |         | Yes        | Yes             | Yes          |
| > 404 Logging                                   |         | Yes        | Yes             | Yes          |
| Mailers                                         |         |            |                 |              |
| > List all mailers sent out                     |         |            |                 |              |
| > allow users to subscribe                      |         |            |                 |              |

---

## Tree-Shaking / Minimal Code
The goal is to only include components that are in use, in the final bundle

by using the settings.json file, this will allow specific components to be included or not

## Code Quality

## Goals
| Goal                               | Measurement |
|------------------------------------|-------------|
| Code Coverage to be 100%           |             |
| All E2E Tests                      |             | 
| Lighthouse scores to be > 95%      |             |
| Frontend to be as dump as possible |             |
| Mobile first approach              |             |

----

### Inspiration
* [ngx-admin](https://www.akveo.com/ngx-admin/pages/dashboard?theme=default)
  * love that the side menu collapses
  * love that the icons get smaller
* [https://www.creative-tim.com/blog/web-design/free-dashboard-templates/]
* https://demos.creative-tim.com/bs3/paper-dashboard/dashboard.html
* https://www.bootstrapdash.com/product/star-admin-free
* https://demo.bootstrapdash.com/star-admin2-free/template/pages/ui-features/buttons.html
* https://demo.bootstrapdash.com/star-admin2-free/template/index.html#
* https://www.creative-tim.com/product/notus-angular?ref=na-github-readme
  * i like the palette
* https://demos.creative-tim.com/material-dashboard-angular2/#/dashboard
* https://github.com/creativetimofficial/black-dashboard-angular
* https://demos.creative-tim.com/notus-angular/admin/dashboard

### Demo Mode
* [ ] Show all potential components
  * [ ] ALL angular material components
* [ ] Separate branch
* [ ] branch needs to be passing all the tests
* [ ]

### Tests
* [ ] check that angular is always running the latest
* [ ] all npm tests to be passing
* [ ] all e2e tests to be running
* [ ] code coverage >95%
* [ ] Contrast ratio to be good on both light and dark displays
* [ ] no TODO in my own code



----

### Scaffolding

#### Components
```bash
# pages | components
target_folder="components"
component_name="menu"

ng generate component $target_folder/$component_name --skip-import
```

#### Pages
```bash
# pages | components
target_folder="pages"
page_name="menu"

ng generate module $target_folder/$page_name
ng generate component $target_folder/$page_name --module=$target_folder/$page_name --with-routing
```

#### Services
```bash
service_name="error-handler"
ng generate service services/$service_name/$service_name
```


### TODO:
1. Notification icon in toolbar to listen for new events via websockets
1. grid list for main layout?
2. mat-icon for avatar
3. divider component, can it be vertical?
4. sidenav for aside bar
5. toolbar for the header
6. SSR (--prerender)
7. app-shell
8. injection token for app settings
9. > NG02801: Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` call at the root of the application.

### EPNET TODO
* OKTA integration for neon
* read from ALL users in okta
* Allow noah to add users to the app
* needs an api
  * epnet to run a scheduled command to fetch ALL users from api using a token
* Ability to upload images and display them as link
* Dashboard configurable with links
* individual user transaction history report (like a bank statement) for previous months
  * user should be able to download as csv
  * or json
