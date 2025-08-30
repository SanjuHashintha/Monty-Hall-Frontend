import { Component } from '@angular/core';
import { SimulationRequest, SimulationResult } from './models/simulation.models';
import { MontyHallService } from './services/monty-hall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Monty Hall Simulator';
  result?: SimulationResult;
  loading = false;
  error = '';

  constructor(private montyHallService: MontyHallService) {}

  onSimulate(request: SimulationRequest) {
    this.loading = true;
    this.error = '';
    
    this.montyHallService.simulateGames(request).subscribe({
      next: (result) => {
        this.result = result;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error running simulation: ' + err.message;
        this.loading = false;
      }
    });
  }
}