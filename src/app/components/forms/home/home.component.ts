import {Component, AfterViewInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
