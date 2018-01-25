import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account : new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    })
  });

  login() {
    this.form.setErrors({
      invalidLogin : true
    });
  }
  get username() {
    return this.form.get('account.username');
  }
}
