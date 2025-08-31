import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SimulationFormComponent } from './simulation-form.component';

describe('SimulationFormComponent', () => {
  let component: SimulationFormComponent;
  let fixture: ComponentFixture<SimulationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimulationFormComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SimulationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.numberOfSimulations).toBe(1000);
    expect(component.changeDoor).toBe(true);
  });

  it('should emit simulate event on form submit', () => {
    spyOn(component.simulate, 'emit');
    
    component.numberOfSimulations = 500;
    component.changeDoor = false;
    component.onSubmit();

    expect(component.simulate.emit).toHaveBeenCalledWith({
      numberOfSimulations: 500,
      changeDoor: false
    });
  });

  it('should not emit when loading', () => {
    spyOn(component.simulate, 'emit');
    
    component.loading = true;
    component.onSubmit();

    expect(component.simulate.emit).not.toHaveBeenCalled();
  });

  it('should handle quick run', () => {
    spyOn(component.simulate, 'emit');
    
    component.quickRun(100);
    expect(component.numberOfSimulations).toBe(100);
    
    setTimeout(() => {
      expect(component.simulate.emit).toHaveBeenCalled();
    }, 350);
  });

  it('should validate input changes', () => {
    component.numberOfSimulations = -5;
    component.onInputChange();
    expect(component.numberOfSimulations).toBe(1);

    component.numberOfSimulations = 20000;
    component.onInputChange();
    expect(component.numberOfSimulations).toBe(10000);

    component.numberOfSimulations = 500;
    component.onInputChange();
    expect(component.numberOfSimulations).toBe(500);
  });
});