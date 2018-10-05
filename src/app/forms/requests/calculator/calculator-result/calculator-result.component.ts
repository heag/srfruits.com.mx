import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Router, NavigationExtras } from '@angular/router'

export interface DialogData {
  employees: any
  deliveries: any
}

@Component({
  selector: 'calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.scss']
})

export class CalculatorResultComponent implements OnInit {

  employees: number
  deliveries: number
  boxes: number
  peoplePerBox: number = 35;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private router: Router) { 
    this.employees = parseInt(data.employees)
    this.deliveries = parseInt(data.deliveries)
    this.boxes = Math.round((this.employees * this.deliveries)/this.peoplePerBox)
  }

  ngOnInit() {
  }

  redirectToRequest(){
    let navigationParams: NavigationExtras = {
      queryParams:{
        "employees": this.employees,
        "deliveries": this.deliveries
      }
    };

    this.router.navigate(['pedido'], navigationParams);
  }

}
