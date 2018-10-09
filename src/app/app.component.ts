import { Component, Inject } from '@angular/core';
import { IEnvironment, ENVIRONMENT } from '../environments/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frutas-alvarez';

  constructor(@Inject(ENVIRONMENT) public environment: IEnvironment){

  }
}
