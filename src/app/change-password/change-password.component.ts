import { PasswordValidators } from './password.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form = new FormGroup({
    password : new FormControl('',[
      Validators.minLength(8),
      Validators.required,
      PasswordValidators.shouldHaveOneUpperCaseChar,
      PasswordValidators.shouldHaveOneLowerCaseChar,
      PasswordValidators.shouldHaveOneNumber
    ]),
    passwordCheck : new FormControl('',)
  });

  get password() {
    return this.form.get('password');
  }

  get passwordCheck() {
    return this.form.get('passwordCheck');
  }
  validatePass(checkPassword){
    console.log(this.form)
    if(this.password.value !== checkPassword.value) {
      this.passwordCheck.setErrors({
        didNotMatch : true
      });
    }
  }


}
