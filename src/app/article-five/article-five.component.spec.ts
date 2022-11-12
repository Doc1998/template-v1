import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFiveComponent } from './article-five.component';

describe('ArticleFiveComponent', () => {
  let component: ArticleFiveComponent;
  let fixture: ComponentFixture<ArticleFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
