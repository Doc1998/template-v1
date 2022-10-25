import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdOfferComponent } from './ad-offer.component';

describe('AdOfferComponent', () => {
  let component: AdOfferComponent;
  let fixture: ComponentFixture<AdOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
