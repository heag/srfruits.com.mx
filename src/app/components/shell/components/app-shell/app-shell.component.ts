import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private translate: TranslateService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    translate.setDefaultLang('es');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  private readonly mobileQueryListener: () => void;
}
