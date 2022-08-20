import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCorkComponent } from './home-cork.component';

describe('HomeCorkComponent', () => {
  let component: HomeCorkComponent;
  let fixture: ComponentFixture<HomeCorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
