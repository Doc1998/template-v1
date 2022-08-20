import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLimerickComponent } from './home-limerick.component';

describe('HomeLimerickComponent', () => {
  let component: HomeLimerickComponent;
  let fixture: ComponentFixture<HomeLimerickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLimerickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLimerickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
