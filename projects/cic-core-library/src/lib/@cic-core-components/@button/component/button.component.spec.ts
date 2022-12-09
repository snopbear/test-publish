import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CICButtonComponent } from './button.component';

describe('CICButtonComponent', () => {
  let component: CICButtonComponent;
  let fixture: ComponentFixture<CICButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CICButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CICButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
