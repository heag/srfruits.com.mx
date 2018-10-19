import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'extra-add-info',
  templateUrl: './extra-add-info.component.html',
  styleUrls: ['./extra-add-info.component.scss']
})
export class ExtraAddInfoComponent implements OnInit {

  constructor(router: Router) { }

  ngOnInit() {
  }

}
