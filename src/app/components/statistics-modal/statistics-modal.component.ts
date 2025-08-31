import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SimulationResult } from '../../models/simulation.models';
import { StatisticsService } from '../../services/statistics.service';
import { Chart, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-statistics-modal',
  templateUrl: './statistics-modal.component.html',
  styleUrls: ['./statistics-modal.component.scss']
})
export class StatisticsModalComponent implements OnChanges {
  @Input() result!: SimulationResult;
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  
  chart: any;
  comparisonChart: any;

  constructor(private statisticsService: StatisticsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && this.isOpen && this.result) {
      setTimeout(() => {
        this.createCharts();
      }, 100);
    }
    
    if (changes['isOpen'] && !this.isOpen) {
      this.destroyCharts();
    }
  }

  createCharts() {
    this.createWinLossChart();
    this.createStrategyComparisonChart();
  }

  createWinLossChart() {
    const ctx = document.getElementById('winLossChart') as HTMLCanvasElement;
    if (ctx) {
      this.destroyChart(this.chart);
      
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: this.statisticsService.getChartData(this.result),
        options: this.statisticsService.getChartOptions()
      });
    }
  }

  createStrategyComparisonChart() {
    const ctx = document.getElementById('strategyComparisonChart') as HTMLCanvasElement;
    if (ctx) {
      this.destroyChart(this.comparisonChart);
      
      this.comparisonChart = new Chart(ctx, {
        type: 'bar',
        data: this.statisticsService.getStrategyComparisonData(),
        options: this.statisticsService.getStrategyComparisonOptions()
      });
    }
  }

  destroyChart(chart: any) {
    if (chart) {
      chart.destroy();
    }
  }

  destroyCharts() {
    this.destroyChart(this.chart);
    this.destroyChart(this.comparisonChart);
    this.chart = null;
    this.comparisonChart = null;
  }

  closeModal() {
    this.closed.emit();
    this.destroyCharts();
  }
}