import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-slider',
  templateUrl: './phone-slider.component.html',
  styleUrls: ['./phone-slider.component.scss']
})
export class PhoneSliderComponent implements OnInit {
  flag: boolean;

  constructor() {
    this.flag = false
  }

  ngOnInit() {
  }

}
