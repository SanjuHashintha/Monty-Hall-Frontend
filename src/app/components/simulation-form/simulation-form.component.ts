import { Component, EventEmitter, Output } from '@angular/core';
import { SimulationRequest } from '../../models/simulation.models';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.scss']
})
export class SimulationFormComponent {
  @Output() simulate = new EventEmitter<SimulationRequest>();
  
  numberOfSimulations: number = 1000;
  changeDoor: boolean = true;

  onSubmit() {
    const request: SimulationRequest = {
      numberOfSimulations: this.numberOfSimulations,
      changeDoor: this.changeDoor
    };
    
    this.simulate.emit(request);
  }

  quickRun(count: number) {
    this.numberOfSimulations = count;
    setTimeout(() => this.onSubmit(), 300);
  }

  onInputChange() {
    if (this.numberOfSimulations < 1) {
      this.numberOfSimulations = 1;
    } else if (this.numberOfSimulations > 10000) {
      this.numberOfSimulations = 10000;
    }
  }
}