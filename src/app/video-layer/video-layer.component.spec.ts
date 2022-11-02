import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLayerComponent } from './video-layer.component';

describe('VideoLayerComponent', () => {
  let component: VideoLayerComponent;
  let fixture: ComponentFixture<VideoLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
