import { TestBed, inject } from '@angular/core/testing';

import { ServCenterService } from './serv-center.service';

describe('ServCenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServCenterService]
    });
  });

  it('should be created', inject([ServCenterService], (service: ServCenterService) => {
    expect(service).toBeTruthy();
  }));
});
