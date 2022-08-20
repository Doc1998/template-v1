import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDublinComponent } from './home-dublin.component';

describe('HomeDublinComponent', () => {
  let component: HomeDublinComponent;
  let fixture: ComponentFixture<HomeDublinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDublinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDublinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
