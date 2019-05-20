import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog'
import { CalculatorResultComponent } from './../calculator/calculator-result/calculator-result.component'
import { ContactComponent } from './../../contact/contact/contact.component'

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  deliveries: number;
  employees: number;
  areFieldsValid: boolean;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  public calculate() {

    alert('Implementar este calculo');

    // if (this.employees.valid && this.deliveries.valid) {
    //   this.dialog.open(CalculatorResultComponent, {
    //     data: {
    //       employees: this.employees.value,
    //       deliveries: this.deliveries.value
    //     }
    //   });
    // }
    // else {
    //   alert("Verificar que los datos sean correctos \n Cantidad de colaboradores entre 20 y 1000");
    // }
  }

  public setColaborators(value: any) {
    this.employees = value;
  }

  public setDeliveries(value: any) {
    this.deliveries = value;
  }


}
