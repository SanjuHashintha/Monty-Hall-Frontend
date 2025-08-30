import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-door-visualization',
  templateUrl: './door-visualization.component.html',
  styleUrl: './door-visualization.component.scss'
})
export class DoorVisualizationComponent {
  @Input() gameResult: any;
  @Input() currentStep: number = 0; // 0: initial, 1: revealed, 2: final
  
  doors = [0, 1, 2];
  
  getDoorContent(door: number): string {
    if (this.currentStep === 0) return '?';
    
    if (door === this.gameResult.winningDoor) return '🚗';
    return '🐐';
  }
  
  getDoorClass(door: number): string {
    const classes = ['door'];
    
    if (this.currentStep >= 1 && door === this.gameResult.revealedDoor) {
      classes.push('revealed');
    }
    
    if (this.currentStep >= 1 && door === this.gameResult.selectedDoor) {
      classes.push('selected');
    }
    
    if (this.currentStep >= 2 && door === this.gameResult.finalDoor) {
      classes.push('final');
    }
    
    if (this.currentStep >= 2 && this.gameResult.win && door === this.gameResult.finalDoor) {
      classes.push('winner');
    }
    
    return classes.join(' ');
  }
}
