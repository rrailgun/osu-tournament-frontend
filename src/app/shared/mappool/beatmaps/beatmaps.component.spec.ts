import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatmapsComponent } from './beatmaps.component';

describe('BeatmapsComponent', () => {
  let component: BeatmapsComponent;
  let fixture: ComponentFixture<BeatmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeatmapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeatmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
