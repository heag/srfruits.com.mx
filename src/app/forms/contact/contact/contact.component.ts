import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Ingresa un correo electrónico' :
        this.email.hasError('email') ? 'Correo electrónico inválido' :
            '';
  }

  sendComment(){
    this.snackBar.open('Comentario enviado', 'OK', {
      duration: 3000
    });
  }

}
