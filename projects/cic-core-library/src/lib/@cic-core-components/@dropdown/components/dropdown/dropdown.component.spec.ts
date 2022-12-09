import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CICDropdownComponent } from './dropdown.component';

describe('CICDropdownComponent', () => {
  let component: CICDropdownComponent;
  let fixture: ComponentFixture<CICDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CICDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CICDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
