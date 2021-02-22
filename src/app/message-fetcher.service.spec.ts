import { TestBed } from '@angular/core/testing';

import { MessageFetcherService } from './message-fetcher.service';

describe('MessageFetcherService', () => {
  let service: MessageFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
