import { Action } from '@ngrx/store';
import { Contact, ContactFormValue } from '@app/contact/models/contact.viewmodel';

export enum ContactActionTypes {
  LoadContact           = '[Contact] Load Contact',
  LoadContactSuccess    = '[Contact] Load Contact Success',
  LoadContactFail       = '[Contact] Load Contact Fail',
  CreateContact         = '[Contact] Create Contact ',
  CreateContactSuccess  = '[Contact] Creeate Contact Success',
  CreateContactFail     = '[Contact] Create Contact Fail',
  ChangeName            = '[Contact] Change Name',
  UndoChangeName        = '[Contact] Undo Change Name',
}

export class LoadContact implements Action {
  readonly type = ContactActionTypes.LoadContact;
}

export class LoadContactSuccess implements Action {
  readonly type = ContactActionTypes.LoadContactSuccess;
  constructor(public payload: Contact) { }
}

export class LoadContactFail implements Action {
  readonly type = ContactActionTypes.LoadContactFail;
  constructor(public payload: string) { }
}

export class CreateContact implements Action {
  readonly type = ContactActionTypes.CreateContact;
  constructor(public payload: Contact) { }
}

export class CreateContactSuccess implements Action {
  readonly type = ContactActionTypes.CreateContactSuccess;
  constructor(public payload: Contact) { }
}

export class CreateContactFail implements Action {
  readonly type = ContactActionTypes.CreateContactFail;
  constructor(public payload: string) { }
}

export class ChangeName implements Action {
  readonly type = ContactActionTypes.ChangeName;
  constructor(public payload: string) { }
}

export class UndoChangeName implements Action {
  readonly type = ContactActionTypes.UndoChangeName;
  constructor(public payload: string) { }
}



export type ContactActions =
  | LoadContact
  | LoadContactSuccess
  | LoadContactFail
  | CreateContact
  | CreateContactSuccess
  | CreateContactFail
  | ChangeName
  | UndoChangeName;
