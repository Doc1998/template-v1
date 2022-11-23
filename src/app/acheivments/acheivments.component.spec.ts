import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheivmentsComponent } from './acheivments.component';

describe('AcheivmentsComponent', () => {
  let component: AcheivmentsComponent;
  let fixture: ComponentFixture<AcheivmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcheivmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheivmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
