import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {register} from "../../store/actions";
import {RegisterRequestInterface} from "../../types/registerRequest";

@Component({
  selector: 'am-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(register({request}));
  }


}
