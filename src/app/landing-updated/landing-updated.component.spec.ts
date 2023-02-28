import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingUpdatedComponent } from './landing-updated.component';

describe('LandingUpdatedComponent', () => {
  let component: LandingUpdatedComponent;
  let fixture: ComponentFixture<LandingUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingUpdatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
