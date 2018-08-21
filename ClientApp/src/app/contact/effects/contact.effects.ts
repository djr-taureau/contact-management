import * as fromContact from '@app/contact/reducers';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  mergeMap,
  startWith,
  switchMap,
  tap,
  withLatestFrom
  } from 'rxjs/operators';
import {
  ChangeName,
  ContactActionTypes,
  CreateContact,
  CreateContactFail,
  CreateContactSuccess,
  LoadContact,
  LoadContactFail,
  LoadContactSuccess,
  UndoChangeName
  } from '@app/contact/store/contact.actions';
import { ContactService } from '@app/contact/services/contact.service';
import { Contact } from '@app/contact/models/contact.viewmodel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class ContactEffects {

  @Effect()
  loadContact$: Observable<Action> = this.actions$.pipe(
    ofType<CreateContact>(ContactActionTypes.LoadContact),
    startWith(new LoadContact()),
    tap(() => { this.store.dispatch(new LoadContact()); }),
    switchMap(() =>
      this.db
        .loadContact()
        .pipe(
          map((contact: Contact) => new LoadContactSuccess(contact)),
          catchError(error => of(new LoadContactFail(error)))
        )
    )
  );

  @Effect()
  createContact$: Observable<Action> = this.actions$.pipe(
    ofType<CreateContact>(ContactActionTypes.CreateContact),
    map(action => action.payload),
    mergeMap(contact =>
      this.db
        .createContact(contact)
        .pipe(
          map(keyedContact => new CreateContactSuccess(keyedContact)),
          catchError(error => of(new CreateContactFail(error)))
        )
    )
  );

  @Effect()
  changeName$: Observable<Action> = this.actions$.pipe(
    ofType<ChangeName>(ContactActionTypes.ChangeName),
    withLatestFrom(this.store.select(fromContact.getContactEntity)),
    mergeMap(([action, contact]) =>
      this.db
        .updateName(action.payload)
        .pipe(
          switchMap(() => of()), // Optimistic update - do nothing if back-end task succeeds.
          catchError(error => of(new UndoChangeName(contact.firstName)))
          // We can also send out another error event in conjunction here as well if needed.
        )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromContact.State>,
    private db: ContactService
  ) {}
}
