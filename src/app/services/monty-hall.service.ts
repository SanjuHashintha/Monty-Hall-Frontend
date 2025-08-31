import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimulationRequest, SimulationResult } from '../models/simulation.models';
import { environment } from '../../environments/environment';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class MontyHallService {
   private apiUrl: string;

  constructor(
    private http: HttpClient,
    private env: EnvironmentService
  ){ 
    this.apiUrl = env.apiUrl;
  }

  simulateGames(request: SimulationRequest): Observable<SimulationResult> {
    return this.http.post<SimulationResult>(`${this.apiUrl}/simulate`, request);
  }
}