import { Component, EventEmitter, Output } from '@angular/core';
import { SimulationRequest } from '../../models/simulation.models';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrl: './simulation-form.component.scss'
})
export class SimulationFormComponent {
  @Output() simulate = new EventEmitter<SimulationRequest>();
  
  numberOfSimulations: number = 100;
   changeDoor: string = 'true'; 
  
  onSubmit() {
    this.simulate.emit({
      numberOfSimulations: this.numberOfSimulations,
      changeDoor: this.changeDoor === 'true'
    });
  }
}