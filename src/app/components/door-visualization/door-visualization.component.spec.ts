import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorVisualizationComponent } from './door-visualization.component';

describe('DoorVisualizationComponent', () => {
  let component: DoorVisualizationComponent;
  let fixture: ComponentFixture<DoorVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorVisualizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoorVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
