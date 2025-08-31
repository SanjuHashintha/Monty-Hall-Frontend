import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SimulationFormComponent } from './components/simulation-form/simulation-form.component';
import { ResultsDisplayComponent } from './components/results-display/results-display.component';
import { DoorVisualizationComponent } from './components/door-visualization/door-visualization.component';
import { StatisticsModalComponent } from './components/statistics-modal/statistics-modal.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SimulationFormComponent,
        ResultsDisplayComponent,
        DoorVisualizationComponent,
        StatisticsModalComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('Monty Hall Simulator');
  });

  it('should initialize with proper default values', () => {
    expect(component.loading).toBe(false);
    expect(component.error).toBe('');
    expect(component.showStatistics).toBe(false);
    expect(component.showScrollButton).toBe(false);
  });
});