import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  boxes = 1;
  numeroDeTelefono = '3360598886';

  tarjetaForm: FormGroup = new FormGroup({
    personasControl: new FormControl(5,
      [Validators.min(5),
      Validators.max(2000),
      Validators.required]),
    entregasControl:
      new FormControl(1, [Validators.required,
      Validators.min(1),
      Validators.max(5)])
  });

  get personasControl(): FormControl {
    return this.tarjetaForm.get('personasControl') as FormControl;
  }

  get entregasControl(): FormControl {
    return this.tarjetaForm.get('entregasControl') as FormControl;
  }

  calcularCajas() {
    if ((this.personasControl.value > 2000 || this.personasControl.value < 5) ||
    (this.entregasControl.value > 5 || this.entregasControl.value < 1)) {
      return;
    }
    const cajas = Math.ceil((this.personasControl.value / 35) * this.entregasControl.value);
    this.boxes = cajas;
  }

  constructor() { }

}
