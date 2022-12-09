import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CICCalendarComponent } from './calendar.component';

describe('CICCalendarComponent', () => {
  let component: CICCalendarComponent;
  let fixture: ComponentFixture<CICCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CICCalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CICCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
