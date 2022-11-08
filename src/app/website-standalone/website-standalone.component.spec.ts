import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteStandaloneComponent } from './website-standalone.component';

describe('WebsiteStandaloneComponent', () => {
  let component: WebsiteStandaloneComponent;
  let fixture: ComponentFixture<WebsiteStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteStandaloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
