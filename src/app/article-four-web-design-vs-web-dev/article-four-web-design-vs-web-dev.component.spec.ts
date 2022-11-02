import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFourWebDesignVsWebDevComponent } from './article-four-web-design-vs-web-dev.component';

describe('ArticleFourWebDesignVsWebDevComponent', () => {
  let component: ArticleFourWebDesignVsWebDevComponent;
  let fixture: ComponentFixture<ArticleFourWebDesignVsWebDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFourWebDesignVsWebDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFourWebDesignVsWebDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
