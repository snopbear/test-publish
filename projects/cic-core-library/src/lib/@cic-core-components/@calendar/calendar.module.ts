//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
//Components
import { CICCalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [CICCalendarComponent],
  imports: [CommonModule, CalendarModule, ReactiveFormsModule],
  exports: [CICCalendarComponent],
})
export class CICCalendarModule {}
