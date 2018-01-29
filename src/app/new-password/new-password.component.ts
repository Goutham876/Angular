import { PasswordValidators } from './password-validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  form = new FormGroup({
    password : new FormControl('',[
      Validators.minLength(5),
      PasswordValidators.mustHaveAtleastOneLowChar
    ]),
    passwordMatch : new FormControl() 
  });

  get password() {
    return this.form.get('password');
  }

  get passwordMatch() {
    return this.form.get('passwordMatch');
  }
}
