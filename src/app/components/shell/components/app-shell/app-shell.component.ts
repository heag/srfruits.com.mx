import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
