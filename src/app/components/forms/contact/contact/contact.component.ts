import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmailData } from '../../../../index';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  emailData: EmailData;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  comment = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.required, Validators.minLength(10)]);

  isValidForm: boolean;
  isNameValid: boolean;
  isEmailValid: boolean;
  isCommentValid: boolean;

  constructor() { }

  ngOnInit() {
    // const s = document.getElementById('formFooter').setAttribute('style', 'display: none');
    // s.setAttribute('type', 'text/javascript');
    // s.src = 'https://form.jotform.co/jsform/90997349015871';
    // document.getElementById('formw').appendChild(s);
  }

  ngAfterViewInit() {
    // const s = document.getElementById('formFooter').setAttribute('style', 'display: none');
  }

}
