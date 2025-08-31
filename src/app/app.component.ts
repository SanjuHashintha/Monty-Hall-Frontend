import { Component, ElementRef, ViewChild } from '@angular/core';
import { SimulationRequest, SimulationResult } from './models/simulation.models';
import { MontyHallService } from './services/monty-hall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('resultsSection') resultsSection!: ElementRef;
  
  title = 'Monty Hall Simulator';
  result?: SimulationResult;
  loading = false;
  error = '';
  numberOfSimulations: number = 0;

  constructor(private montyHallService: MontyHallService) {}

  onSimulate(request: SimulationRequest) {
    this.loading = true;
    this.error = '';
    this.numberOfSimulations = request.numberOfSimulations;
    
    this.montyHallService.simulateGames(request).subscribe({
      next: (result) => {
        this.result = result;
        this.loading = false;
        setTimeout(() => this.scrollToResults(), 100);
      },
      error: (err) => {
        this.error = 'Error running simulation: ' + err.message;
        this.loading = false;
        setTimeout(() => this.scrollToResults(), 100);
      }
    });
  }

  scrollToResults() {
    if (this.resultsSection) {
      this.resultsSection.nativeElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}