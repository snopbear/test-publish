//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
//Components
import { CICRatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [CICRatingComponent],
  imports: [CommonModule, RatingModule, ReactiveFormsModule, FormsModule],
  exports: [CICRatingComponent],
})
export class CICRatingModule {}
