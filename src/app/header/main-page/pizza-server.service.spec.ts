import { TestBed } from '@angular/core/testing';

import { PizzaServerService } from './pizza-server.service';

describe('PizzaServerService', () => {
  let service: PizzaServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
