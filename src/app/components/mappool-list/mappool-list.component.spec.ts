import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappoolListComponent } from './mappool-list.component';

describe('MappoolListComponent', () => {
  let component: MappoolListComponent;
  let fixture: ComponentFixture<MappoolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MappoolListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MappoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
