//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
//Components
import { CICDropdownComponent } from './components/dropdown/dropdown.component';
import { CICDropdownListComponent } from './components/dropdown-list/dropdown-list.component';
//Pipes
import { GetFlagPipe } from './pipes/to-lower-case.pipe';

@NgModule({
  declarations: [CICDropdownComponent, GetFlagPipe, CICDropdownListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    MultiSelectModule,
    AutoCompleteModule,
  ],
  exports: [CICDropdownComponent],
})
export class CICDropdownModule {}
