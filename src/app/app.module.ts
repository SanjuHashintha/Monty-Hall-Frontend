import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimulationFormComponent } from './components/simulation-form/simulation-form.component';
import { ResultsDisplayComponent } from './components/results-display/results-display.component';
import { DoorVisualizationComponent } from './components/door-visualization/door-visualization.component';
import { EnvironmentService } from './services/environment.service';
import { StatisticsModalComponent } from './components/statistics-modal/statistics-modal.component';
import { CommonModule } from '@angular/common';
import { StatisticsService } from './services/statistics.service';

@NgModule({
  declarations: [
    AppComponent,
    SimulationFormComponent,
    ResultsDisplayComponent,
    DoorVisualizationComponent,
    StatisticsModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [EnvironmentService, StatisticsService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }