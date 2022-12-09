//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
//COmponents
import { CICKnobComponent } from './components/knob/knob.component';

@NgModule({
  declarations: [CICKnobComponent],
  imports: [CommonModule, FormsModule, KnobModule],
  exports: [CICKnobComponent],
})
export class CICKnobModule {}
