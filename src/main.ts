import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


export interface IComment {
  name: string;
  email: string;
  telephone: string;
  comment: string;
}

enum TypeEmail
{
    Contacto = 0,
    Pedido = 1,
    Cotizacion = 2
}

export interface IQuestion {
  title: string,
  answer: string
}