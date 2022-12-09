import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CICDropdownListComponent } from './dropdown-list.component';

describe('DropdownListComponent', () => {
  let component: CICDropdownListComponent;
  let fixture: ComponentFixture<CICDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CICDropdownListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CICDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
