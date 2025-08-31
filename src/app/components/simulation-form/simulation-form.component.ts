import { Component, EventEmitter, Output, Input } from '@angular/core';
import { SimulationRequest } from '../../models/simulation.models';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.scss']
})
export class SimulationFormComponent {
  @Output() simulate = new EventEmitter<SimulationRequest>();
  @Input() loading: boolean = false;
  
  numberOfSimulations: number = 1000;
  changeDoor: boolean = true;

  onSubmit() {
    if (this.loading) return;
    
    const request: SimulationRequest = {
      numberOfSimulations: this.numberOfSimulations,
      changeDoor: this.changeDoor
    };
    
    this.simulate.emit(request);
  }

  quickRun(count: number) {
    if (this.loading) return;
    
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