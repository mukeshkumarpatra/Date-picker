import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';

// import { as _rollupMoment} from 'moment';

const moment =  _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MMM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AppComponent implements OnInit{
  title = 'date-picker';
  form: FormGroup;
  
 

 selectedDate: any;
  value: any = {
    name: '',
    password: '',
    dateJoined: ''
  }
  
  constructor(){}

  ngOnInit() {
    this.form = new FormGroup({
      Name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      dateJoined: new FormControl('', [
        Validators.required
      ])
    });
  }

  get f() { return this.form.controls; };

  submit(form) {
    console.log(this.form.value);
  }
  

  

 
}
