import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CICDataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: CICDataTableComponent;
  let fixture: ComponentFixture<CICDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CICDataTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CICDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
