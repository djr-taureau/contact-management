import { Action, combineReducers, createSelector } from '@ngrx/store';
import { FormState } from 'ngrx-form';
import * as fromRoot from '@app/reducers';
import { Contact, Phone, Address } from '@app/contact/models/contact.viewmodel';

export interface ContactFormValue {
  id?: number | 0;
  fullName: string;
  contactType: number[];
  email: string;
  address: object[];
  birthDate: string;
  company: string;
  jobTitle: string;
  notes?: string;
}

export const initialFormState = {
  fullName: '',
  contactType: [],
  email: '',
  address: [],
  birthDate: '',
  company: '',
  jobTitle: '',
  notes: ''
};
export interface ContactForm extends FormState<ContactFormValue> {}

const contactFormDefaultState = { model: initialFormState };

export const getFormValues = (state: ContactForm) => state.model;
export const getFormDirty = (state: ContactForm) => state.dirty;
export const getFormErrors  = (state: ContactForm) => state.errors;
export const getFormStatus = (state: ContactForm) => state.status;


export function contactFormReducer(state = contactFormDefaultState, action) {
  switch(action.type)  {
    case 'LOAD_FORM':
      return { ...state, model: action.payload};
    default:
      return state;
  }
}
