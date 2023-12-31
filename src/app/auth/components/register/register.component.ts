import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {authActions} from "../../store/actions";
import {RegisterRequestInterface} from "../../types/registerRequest";
import {CommonModule} from "@angular/common";
import {selectIsSubmitting, selectValidationErrors} from "../../store/reducers";
import {combineLatest} from "rxjs";
import {
  BackendErrorMessagesComponent
} from "../../../shared/components/backendErrorMessages/backendErrorMessages.component";


@Component({
  selector: 'am-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
    BackendErrorMessagesComponent
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

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
  }

  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(authActions.register({request}));

  }

}
