//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CICButtonModule } from '../@button/index';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
//Components
import { CICDataTableComponent } from './components/data-table/data-table.component';
import { CICDataTableRowComponent } from './components/data-table-row/data-table-row.component';

@NgModule({
  declarations: [CICDataTableComponent, CICDataTableRowComponent],
  imports: [
    CommonModule,
    TableModule,
    CICButtonModule,
    InputSwitchModule,
    FormsModule,
  ],
  exports: [CICDataTableComponent],
})
export class CICDataTableModule {}
