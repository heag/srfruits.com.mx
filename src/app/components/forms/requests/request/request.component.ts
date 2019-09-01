import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {

  public employees: number;
  public deliveries: number;
  boxes: number;
  peoplePerBox = 35;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.employees = params['employees'];
      this.deliveries = params['deliveries'];
    });

  }

  ngOnInit() {
    this.boxes = Math.round((this.employees / this.peoplePerBox) * this.deliveries);
    if (!this.boxes && this.boxes === 0) {
      this.boxes = 1;
    }
  }

}
