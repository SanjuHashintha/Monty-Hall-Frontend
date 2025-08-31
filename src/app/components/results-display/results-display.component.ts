import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { SimulationResult, GameResult } from '../../models/simulation.models';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss']
})
export class ResultsDisplayComponent {
  @Input() result!: SimulationResult;
  @ViewChild('visualizationSection') visualizationSection!: ElementRef;
  
  selectedGame?: GameResult;
  currentStep: number = 0;

showGameDetails(game: GameResult) {
  if (!game) {
    console.error('No game data provided');
    return;
  }

  this.selectedGame = game;
  this.currentStep = 0;
  
  setTimeout(() => {
    this.scrollToVisualization();
  }, 100);
}

  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

scrollToVisualization() {
  if (this.visualizationSection && this.visualizationSection.nativeElement) {
    const element = this.visualizationSection.nativeElement;
    
    try {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      
      this.highlightSection(element);
    } catch (error) {
      console.warn('Smooth scroll not supported, using instant scroll');
      element.scrollIntoView();
    }
  }
}

  private highlightSection(element: HTMLElement) {
    element.classList.add('highlight-section');
    
    setTimeout(() => {
      element.classList.remove('highlight-section');
    }, 2000);
  }
}