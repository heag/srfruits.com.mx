import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  selectedLanguage = 'es';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.selectedLanguage = language
  }

}
