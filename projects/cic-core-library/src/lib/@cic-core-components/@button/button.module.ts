//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
//Components
import { CICButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [CICButtonComponent],
  imports: [CommonModule, ButtonModule],
  exports: [CICButtonComponent],
})
export class CICButtonModule {}
