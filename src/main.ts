import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ThoughtramDemosAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ThoughtramDemosAppComponent);
