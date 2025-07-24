import { bootstrapApplication } from '@angular/platform-browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
