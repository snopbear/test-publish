//Modules
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
//Components
import { CICRadioButtonComponent } from './components/radio-button/radio-button.component';

@NgModule({
  declarations: [CICRadioButtonComponent],
  imports: [CommonModule, RadioButtonModule, ReactiveFormsModule],
  exports: [CICRadioButtonComponent],
})
export class CICRadioButtonModule {}
