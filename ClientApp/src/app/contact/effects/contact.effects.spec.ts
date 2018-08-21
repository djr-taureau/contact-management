import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ContactEffects } from '@app/contact/effects/contact.effects';

describe('ContactService', () => {
  let actions$: Observable<any>;
  let effects: ContactEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ContactEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
