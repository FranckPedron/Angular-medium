import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from "../../types/backendErrors.interface";

@Component({
  selector: 'mc-backend-error-messages',
  standalone: true,
  imports: [],
  templateUrl: './backendErrorMessages.component.html',
  styleUrl: './backendErrorMessages.component.scss'
})
export class BackendErrorMessagesComponent implements OnInit{

  @Input()
  backendErrors: BackendErrorsInterface ={};

  errorMessages: string[]=[];

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string)=> {
      const  messages = this.backendErrors[name].join(' ');
      return `${name} ${messages}`
    })
  }

}
