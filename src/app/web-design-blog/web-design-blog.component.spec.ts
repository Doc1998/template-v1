import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignBlogComponent } from './web-design-blog.component';

describe('WebDesignBlogComponent', () => {
  let component: WebDesignBlogComponent;
  let fixture: ComponentFixture<WebDesignBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesignBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
