import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CICInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: CICInputComponent;
  let fixture: ComponentFixture<CICInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CICInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CICInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
