import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { IComment } from '../../../../main';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: IComment;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  comment = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.required, Validators.minLength(10)]);

  isValidForm: boolean = false;
  isNameValid: boolean = false;
  isEmailValid: boolean = false;
  isCommentValid: boolean = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getErrorMessages(controlName: string) {
    switch (controlName) {
      case 'email':
        return this.email.hasError('required') ? 'Ingresa un correo electrónico' :
          this.email.hasError('email') ? 'Correo electrónico inválido' :
            '';
      case 'name':
        return this.name.hasError('required'), 'Ingresa un nombre';
      case 'comment':
        return this.name.hasError('required'), 'Ingresa un comentario';
      default:
        break;
    }
  }

  send() {
    if (this.checkFormValid()) {
      this.sendEmail();
      this.snackBar.open('Comentario enviado', 'OK', {
        duration: 3000
      });
      return;
    }
    alert('Favor de llenar todos los campos faltantes');
  }

  private checkFormValid(): boolean {
    return this.isValidForm = (this.name.valid && this.email.valid && this.comment.valid);
  }

  private sendEmail(){
    this.form = {
      name: this.name.value,
      email: this.email.value,
      telephone: this.telephone.value,
      comment: this.comment.value
    }
  }

}
