import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceContactComponent } from './price-contact.component';

describe('PriceContactComponent', () => {
  let component: PriceContactComponent;
  let fixture: ComponentFixture<PriceContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
