import { Component, Inject, OnInit } from '@angular/core';
import { IEnvironment, ENVIRONMENT } from '../environments/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frutas-alvarez';

  constructor(@Inject(ENVIRONMENT) public environment: IEnvironment,
    private router: Router) { 
      }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
