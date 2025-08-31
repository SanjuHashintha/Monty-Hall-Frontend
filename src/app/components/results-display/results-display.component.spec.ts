import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsDisplayComponent } from './results-display.component';
import { SimulationResult, GameResult } from '../../models/simulation.models';
import { ElementRef } from '@angular/core';

describe('ResultsDisplayComponent', () => {
  let component: ResultsDisplayComponent;
  let fixture: ComponentFixture<ResultsDisplayComponent>;

  const mockGameResult: GameResult = {
    win: true,
    selectedDoor: 1,
    winningDoor: 2,
    revealedDoor: 3,
    finalDoor: 2
  };

  const mockResult: SimulationResult = {
    totalGames: 100,
    wins: 65,
    losses: 35,
    winPercentage: 65,
    gameResults: [mockGameResult],
    changeDoor: true
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsDisplayComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsDisplayComponent);
    component = fixture.componentInstance;
    component.result = mockResult;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show game details', () => {
    component.showGameDetails(mockGameResult);
    expect(component.selectedGame).toEqual(mockGameResult);
    expect(component.currentStep).toBe(0);
  });

  it('should handle nextStep and previousStep', () => {
    component.currentStep = 0;
    
    component.nextStep();
    expect(component.currentStep).toBe(1);
    
    component.nextStep();
    expect(component.currentStep).toBe(2);
    
    component.previousStep();
    expect(component.currentStep).toBe(1);
  });

  it('should handle undefined game in showGameDetails', () => {
    const consoleSpy = spyOn(console, 'error');
    
    component.showGameDetails(undefined as any);
    expect(consoleSpy).toHaveBeenCalledWith('No game data provided');
  });

  it('should scroll to visualization when element exists', () => {
    const mockElement = { 
      scrollIntoView: jasmine.createSpy(),
      classList: { add: jasmine.createSpy(), remove: jasmine.createSpy() }
    };
    component.visualizationSection = { nativeElement: mockElement } as ElementRef;
    
    component.scrollToVisualization();
    
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    });
  });

  it('should not throw error when visualization section is undefined', () => {
    component.visualizationSection = undefined as any;
    
    expect(() => component.scrollToVisualization()).not.toThrow();
  });
});