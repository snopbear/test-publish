//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
//Components
import { CICImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [CICImageComponent],
  imports: [CommonModule, ImageModule],
  exports: [CICImageComponent],
})
export class CICImageModule {}
