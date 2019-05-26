import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalculatorResultComponent } from './../calculator/calculator-result/calculator-result.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  deliveries = 1;
  employees = 1;
  areFieldsValid: boolean;

  constructor(private dialog: MatDialog) { }

  public calculate() {

    if (this.employees > 0 && this.employees < 1501) {
        this.dialog.open(CalculatorResultComponent, {
          data: {
            employees: this.employees,
            deliveries: this.deliveries
          }
        });

    } else {
      alert('Cantidad de empleados permitidos: entre 1 y 1500');
    }
  }

  public setColaborators(value: any) {
    this.employees = value;
    console.log('Empleados', this.employees);
  }

  public setDeliveries(value: any) {
    this.deliveries = value;
    console.log('Veces por semama', this.deliveries);
  }


}
