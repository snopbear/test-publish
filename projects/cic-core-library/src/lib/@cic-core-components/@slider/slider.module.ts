//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'primeng/slider';
//Components
import { CICSliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [CICSliderComponent],
  imports: [CommonModule, SliderModule, ReactiveFormsModule, FormsModule],
  exports: [CICSliderComponent],
})
export class CICSliderModule {}
