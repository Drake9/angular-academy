/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UniversitiesService } from './universities.service';

describe('Service: Universities', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversitiesService]
    });
  });

  it('should ...', inject([UniversitiesService], (service: UniversitiesService) => {
    expect(service).toBeTruthy();
  }));
});
