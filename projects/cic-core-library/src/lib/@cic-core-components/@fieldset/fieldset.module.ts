//Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
//Components
import { CICFieldsetComponent } from './components/fieldset/fieldset.component';

@NgModule({
  declarations: [CICFieldsetComponent],
  imports: [CommonModule, FieldsetModule],
  exports: [CICFieldsetComponent],
})
export class CICFieldSetModule {}
