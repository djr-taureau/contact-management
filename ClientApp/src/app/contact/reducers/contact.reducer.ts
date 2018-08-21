import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';
import { Contact, ContactType, PhoneType, Phone, Address } from '@app/contact/models/contact.viewmodel';
import { ContactActionTypes, ContactActions } from '@app/contact/store/contact.actions';
import { combineReducers } from '@ngrx/store';
import { Action } from '@ngrx/store';


export interface State {
  contact: Contact;
  loading: boolean;
  error: string;
}


export const initialState: State = {
  contact: null,
  loading: false,
  error: null,
};

export const getContact = (state: State) => state.contact;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;

export function reducer(state = initialState, action: ContactActions): State {

  switch (action.type) {

    case ContactActionTypes.LoadContact:
    case ContactActionTypes.CreateContact: {
      return {
        ...state,
        loading: true,
      };
    }

    case ContactActionTypes.LoadContactSuccess:
    case ContactActionTypes.CreateContactSuccess: {
      return {
        ...state,
        contact: action.payload,
        loading: false,
      };
    }

    case ContactActionTypes.LoadContactFail:
    case ContactActionTypes.CreateContactFail: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case ContactActionTypes.ChangeName:
    case ContactActionTypes.UndoChangeName: {
      return {
        ...state,
        contact: {
          ...state.contact,
          firstName: action.payload
        }
      }
    }

    default:
      return state;
  }
}
