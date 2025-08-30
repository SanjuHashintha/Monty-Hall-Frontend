import { Component, Input } from '@angular/core';
import { GameResult, SimulationResult } from '../../models/simulation.models';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrl: './results-display.component.scss'
})
export class ResultsDisplayComponent {
  @Input() result!: SimulationResult;
  @Input() selectedGame?: GameResult;
  currentStep: number = 0;
  
  showGameDetails(game: GameResult) {
    this.selectedGame = game;
    this.currentStep = 0;
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
}