import {Injectable} from '@angular/core';
import {SETTINGS} from 'settings/settings';
import {
  ApplicationInsights,
  eSeverityLevel,
  IExceptionTelemetry,
  SeverityLevel
} from '@microsoft/applicationinsights-web';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private app_insights: ApplicationInsights;

  constructor() {
    this.app_insights = new ApplicationInsights({
      config: {
        instrumentationKey: SETTINGS.logging.microsoft_app_insights.instrumentation_key,
        enableAutoRouteTracking: true
      }
    });
    this.app_insights.loadAppInsights();
  }

  public async info(message: string) {
    const telemetry_data = {
      name: message
    };
    this.app_insights.trackEvent(telemetry_data);
  }

  public async warn(message: string) {
    this.error(new Error(message), SeverityLevel.Warning);
  }

  public async success(message: string) {
    this.info(message);
  }

  public async error(exception: Error, severity: eSeverityLevel = SeverityLevel.Error) {
    this.exception(exception, severity)
  }

  public async exception(exception: Error, severity: eSeverityLevel = SeverityLevel.Critical) {
    const telemetry_data: IExceptionTelemetry = {
      exception: exception,
      severityLevel: severity
    };
    this.app_insights.trackException(telemetry_data);
  }
}
