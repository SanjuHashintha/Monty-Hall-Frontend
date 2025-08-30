import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimulationFormComponent } from './components/simulation-form/simulation-form.component';
import { ResultsDisplayComponent } from './components/results-display/results-display.component';
import { DoorVisualizationComponent } from './components/door-visualization/door-visualization.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulationFormComponent,
    ResultsDisplayComponent,
    DoorVisualizationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }