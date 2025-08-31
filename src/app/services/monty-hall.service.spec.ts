import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MontyHallService } from './monty-hall.service';
import { EnvironmentService } from './environment.service';
import { SimulationRequest, SimulationResult, GameResult } from '../models/simulation.models';

describe('MontyHallService', () => {
  let service: MontyHallService;
  let httpTestingController: HttpTestingController;
  let mockEnvironmentService: jasmine.SpyObj<EnvironmentService>;

  const mockGameResult: GameResult = {
    win: true,
    selectedDoor: 1,
    winningDoor: 2,
    revealedDoor: 3,
    finalDoor: 2
  };

  const mockResult: SimulationResult = {
    totalGames: 100,
    wins: 65,
    losses: 35,
    winPercentage: 65,
    gameResults: [mockGameResult],
    changeDoor: true
  };

  const mockRequest: SimulationRequest = {
    numberOfSimulations: 100,
    changeDoor: true
  };

  beforeEach(() => {
    // Create a spy object for EnvironmentService
    mockEnvironmentService = jasmine.createSpyObj('EnvironmentService', [], {
      apiUrl: 'https://localhost:7018/api/montyhall'
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MontyHallService,
        { provide: EnvironmentService, useValue: mockEnvironmentService }
      ]
    });
    
    service = TestBed.inject(MontyHallService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should simulate games and return results', (done) => {
    service.simulateGames(mockRequest).subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    });

    const req = httpTestingController.expectOne('https://localhost:7018/api/montyhall/simulate');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockRequest);
    
    req.flush(mockResult);
  });

  it('should handle HTTP errors', (done) => {
    service.simulateGames(mockRequest).subscribe({
      next: () => fail('Expected to fail'),
      error: (error) => {
        expect(error.status).toBe(500);
        done();
      }
    });

    const req = httpTestingController.expectOne('https://localhost:7018/api/montyhall/simulate');
    req.flush('Server error', { status: 500, statusText: 'Server Error' });
  });

  it('should handle network errors', (done) => {
    service.simulateGames(mockRequest).subscribe({
      next: () => fail('Expected to fail'),
      error: (error) => {
        expect(error.status).toBe(0);
        done();
      }
    });

    const req = httpTestingController.expectOne('https://localhost:7018/api/montyhall/simulate');
    const mockError = new ErrorEvent('Network error');
    req.error(mockError);
  });
});