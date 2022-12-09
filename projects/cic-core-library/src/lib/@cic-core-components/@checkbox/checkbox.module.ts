// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { CICCheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [CICCheckboxComponent],
  imports: [CommonModule, CheckboxModule, ReactiveFormsModule, FormsModule],
  exports: [CICCheckboxComponent],
})
export class CICCheckboxModule {}
