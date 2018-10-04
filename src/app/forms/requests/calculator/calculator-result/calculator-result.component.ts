import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  employees: any;
  deliveries: any;
}

@Component({
  selector: 'calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.scss']
})
export class CalculatorResultComponent implements OnInit {

  employees: any;
  deliveries: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { 
    this.employees = data.employees
    this.deliveries = data.deliveries
  }

  ngOnInit() {
  }

}
