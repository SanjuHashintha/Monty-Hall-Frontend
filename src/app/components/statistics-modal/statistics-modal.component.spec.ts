import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsModalComponent } from './statistics-modal.component';
import { FormsModule } from '@angular/forms';

describe('StatisticsModalComponent', () => {
  let component: StatisticsModalComponent;
  let fixture: ComponentFixture<StatisticsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsModalComponent],
      imports: [FormsModule] 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});