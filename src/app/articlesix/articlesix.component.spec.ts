import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesixComponent } from './articlesix.component';

describe('ArticlesixComponent', () => {
  let component: ArticlesixComponent;
  let fixture: ComponentFixture<ArticlesixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
