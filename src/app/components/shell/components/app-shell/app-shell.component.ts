import {ChangeDetectorRef, Component, HostListener, Input, OnDestroy} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MediaMatcher } from "@angular/cdk/layout";
import {Subject} from "rxjs";

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  
  @Input() isLanguageSwitcherClicked: boolean

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private translate: TranslateService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  private readonly mobileQueryListener: () => void;
}
