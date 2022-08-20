import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGalwayComponent } from './home-galway.component';

describe('HomeGalwayComponent', () => {
  let component: HomeGalwayComponent;
  let fixture: ComponentFixture<HomeGalwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGalwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGalwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
