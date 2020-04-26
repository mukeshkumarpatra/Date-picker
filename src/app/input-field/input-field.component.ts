import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {



  @Input() label: string;
  @Input() type: string;
  @Input() value: string;
  @Input() form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }
  get name() {
    return this.form.get('Name');
  }
  get password() {
    return this.form.get('Password');
  }

  ngOnInit(): void {

  }




}
