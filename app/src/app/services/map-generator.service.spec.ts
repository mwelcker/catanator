import { TestBed } from '@angular/core/testing';

import { MapGeneratorService } from './map-generator.service';

describe('MapGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapGeneratorService = TestBed.get(MapGeneratorService);
    expect(service).toBeTruthy();
  });
});
