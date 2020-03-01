import {Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core/typings/common-behaviors/color";

@Component({
  selector: 'call-us',
  templateUrl: './call-us.component.html',
  styleUrls: ['./call-us.component.scss']
})
export class CallUsComponent implements OnInit {
  @Input() phonenumber: string;
  @Input() subcaption: string;
  @Input() class: string;
  numeroDeTelefono = '+521 336 059 8886';

  constructor() { }

  ngOnInit() {
  }

}
