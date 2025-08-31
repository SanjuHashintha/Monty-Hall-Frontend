import { Injectable } from '@angular/core';
import { SimulationResult } from '../models/simulation.models';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  getChartData(result: SimulationResult): any {
    return {
      labels: ['Wins', 'Losses'],
      datasets: [
        {
          data: [result.wins, result.losses],
          backgroundColor: ['#27ae60', '#e74c3c'],
          hoverBackgroundColor: ['#2ecc71', '#c0392b']
        }
      ]
    };
  }

  getChartOptions(): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#2c3e50',
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.label || '';
              const value = context.raw || 0;
              const percentage = ((value / context.dataset.data.reduce((a: number, b: number) => a + b, 0)) * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    };
  }

  getStrategyComparisonData(): any {
    return {
      labels: ['Switching Doors', 'Staying'],
      datasets: [
        {
          label: 'Theoretical Probability',
          data: [66.7, 33.3],
          backgroundColor: 'rgba(52, 152, 219, 0.6)',
          borderColor: '#3498db',
          borderWidth: 2
        }
      ]
    };
  }

  getStrategyComparisonOptions(): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (value: any) => `${value}%`
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    };
  }
}