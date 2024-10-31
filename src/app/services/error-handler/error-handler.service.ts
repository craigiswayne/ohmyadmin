import {ErrorHandler, Injectable} from '@angular/core';
import {LoggingService} from 'app/services/logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {

  constructor(private readonly log: LoggingService) {
    super();
  }

  override handleError(error: Error): void {
    this.log.exception(error);
    super.handleError(error);
  }
}
