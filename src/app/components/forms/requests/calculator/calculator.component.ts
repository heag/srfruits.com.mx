import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalculatorResultComponent } from './../calculator/calculator-result/calculator-result.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  minEmployees = 5;
  maxEmployees = 2000;

  calculatorForm: FormGroup = new FormGroup({
    employeesControl: new FormControl(null,
                        [Validators.min(this.minEmployees),
                        Validators.max(this.maxEmployees),
                        Validators.required]),
     deliveriesControl:
      new FormControl('1', [Validators.required,
                          Validators.min(1),
                          Validators.max(5)])
  });

  get employeesControl(): FormControl {
    return this.calculatorForm.get('employeesControl') as FormControl;
  }

  get deliveriesControl(): FormControl {
    return this.calculatorForm.get('deliveriesControl') as FormControl;
  }

  constructor(private dialog: MatDialog) { }

  public calculate() {
    this.dialog.open(CalculatorResultComponent, {
      data: {
        employees: this.employeesControl.value,
        deliveries: this.deliveriesControl.value
      }
    });
  }
}
