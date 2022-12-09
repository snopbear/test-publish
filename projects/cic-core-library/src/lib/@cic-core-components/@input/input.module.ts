//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
//Components
import { CICInputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { TextinputComponent } from './components/textinput/textinput.component';
import { PasswordinputComponent } from './components/passwordinput/passwordinput.component';
import { ChipComponent } from './components/chip/chip.component';

@NgModule({
  declarations: [
    CICInputComponent,
    TextareaComponent,
    TextinputComponent,
    PasswordinputComponent,
    ChipComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    PasswordModule,
    ReactiveFormsModule,
    DividerModule,
    ChipsModule,
  ],
  exports: [CICInputComponent],
})
export class CICInputModule {}
