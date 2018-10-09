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

  deliveries = new FormControl("1", [Validators.maxLength(5), Validators.required])
  employees = new FormControl("", [Validators.max(1000), Validators.min(20), Validators.required])

  areFieldsValid: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  public calculate() {
    if (this.employees.valid && this.deliveries.valid) {
      this.dialog.open(CalculatorResultComponent, {
        data: {
          employees: this.employees.value,
          deliveries: this.deliveries.value
        }
      });
    }
    else {
      alert("Verificar que los datos sean correctos \n Cantidad de colaboradores entre 20 y 1000");
    }
  }

}
