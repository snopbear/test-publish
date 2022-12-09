import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cic-prototype';
  form: FormGroup = this._fb.group({
    test: [],
  });
  constructor(private _fb: FormBuilder) {}
}
