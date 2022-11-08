import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignStandardComponent } from './web-design-standard.component';

describe('WebDesignStandardComponent', () => {
  let component: WebDesignStandardComponent;
  let fixture: ComponentFixture<WebDesignStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesignStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
