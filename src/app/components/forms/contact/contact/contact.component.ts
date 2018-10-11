import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { EmailData, TypeEmail } from '../../../../index'
import { EmailRestService } from '../../../../services/email.service'
import { Router } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailData: EmailData;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  comment = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.required, Validators.minLength(10)]);

  isValidForm: boolean = false;
  isNameValid: boolean = false;
  isEmailValid: boolean = false;
  isCommentValid: boolean = false;

  constructor(private snackBar: MatSnackBar,
    private router: Router,
              private emailService: EmailRestService) { }

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
      case 'telephone':
        return this.name.hasError('required'), 'Ingresa un teléfono, mínimo 10 caracteres';
      case 'comment':
        return this.name.hasError('required'), 'Ingresa un comentario';
      default:
        break;
    }
  }

  send() {
    if (this.checkFormValid()) {
      this.sendEmail();
      this.snackBar.open('Comentario enviado, verificar su bandeja de entrada', 'OK', {
        duration: 4000
      });
      this.clearForms();
      this.router.navigate(['contacto']);
      return;
    }
    alert('Favor de llenar todos los campos faltantes');
  }

  private sendEmail(){
    this.emailData = {
      name: this.name.value,
      comment: this.comment.value,
      email: this.email.value,
      telephone: this.telephone.value,
      typeEmail: TypeEmail.Contacto
    }
    this.emailService.sendEmail(this.emailData)
  }

  private checkFormValid(): boolean {
    return this.isValidForm = (this.name.valid && 
                            this.email.valid && 
                            this.comment.valid && 
                            this.telephone.valid
                            );
  }


  private clearForms(){
    this.name.setValue("")
    this.email.setValue("")
    this.telephone.setValue("")
    this.comment.setValue("")
  }

}
