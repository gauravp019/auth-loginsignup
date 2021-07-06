import { TestBed } from '@angular/core/testing';

import { AuthGaurdsGuard } from './auth-gaurds.guard';

describe('AuthGaurdsGuard', () => {
  let guard: AuthGaurdsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGaurdsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
