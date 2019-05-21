import { enableProdMode } from '@angular/core'; //node modules import 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';  // custom imports from src folder 
import { environment } from './environments/environment'; 

if (environment.production) {
  enableProdMode();
}

//Step2: ng App should be bootstrapped with a Module -- AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
