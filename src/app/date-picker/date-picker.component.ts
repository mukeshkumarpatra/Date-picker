import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {


  @Input() value: string;
  @Input() form: FormGroup

  constructor() {
    this.form = new FormGroup({
      dateJoined: new FormControl('', [
        Validators.required
      ])
    });
  }
  get datepicker() {
    return this.form.get('dateJoined');
  }

}
