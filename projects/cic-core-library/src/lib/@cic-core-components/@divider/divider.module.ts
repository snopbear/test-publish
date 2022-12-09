//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { CICButtonModule } from '../@button/button.module';
//Components
import { CICDividerComponent } from './components/divider/divider.component';

@NgModule({
  declarations: [CICDividerComponent],
  exports: [CICDividerComponent],
  imports: [CommonModule, DividerModule, CICButtonModule],
})
export class CICDividerModule {}
