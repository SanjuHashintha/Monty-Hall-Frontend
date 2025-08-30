import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimulationRequest, SimulationResult } from '../models/simulation.models';

@Injectable({
  providedIn: 'root'
})
export class MontyHallService {
  private apiUrl = 'https://localhost:7018/api/montyhall'; // Change to your backend URL

  constructor(private http: HttpClient) { }

  simulateGames(request: SimulationRequest): Observable<SimulationResult> {
    return this.http.post<SimulationResult>(`${this.apiUrl}/simulate`, request);
  }
}