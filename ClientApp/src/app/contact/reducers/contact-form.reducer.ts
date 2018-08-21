import { Action, combineReducers, createSelector } from '@ngrx/store';
import {
  FormGroupState,
  createFormGroupState,
  formGroupReducer,
  updateGroup,
  validate
} from 'ngrx-forms';
import { required, requiredTrue } from 'ngrx-forms/validation';
import { ValidationErrors } from '@angular/forms';
import * as fromContact from '@app/contact/reducers';
import { Contact, Phone, Address, ContactType } from '@app/contact/models/contact.viewmodel';

export interface ContactFormValue {
  id?: number | 0;
  firstName: string;
  lastName: string;
  contactType: string[];
  email: string;
  address: Address[];
  phone: Phone[];
  birthDate: string;
  company: string;
  jobTitle: string;
  notes?: string;
}


export class SetSubmittedValueAction implements Action {
  static readonly TYPE = 'syncValidation/SET_SUBMITTED_VALUE';
  readonly type = SetSubmittedValueAction.TYPE;
  constructor(public submittedValue: ContactFormValue) { }
}

const FORM_ID = 'myForm';

export const initialFormState = createFormGroupState<ContactFormValue>(
  FORM_ID,
  {
    firstName: '',
    lastName: '',
    contactType: [null],
    email: '',
    address: [],
    phone: [],
    birthDate: '',
    company: '',
    jobTitle: '',
    notes: ''
  }
);

export interface State extends fromContact.State {
  myForm: {
    formState: FormGroupState<ContactFormValue>;
    submittedValue: ContactFormValue | undefined;
  };
};

export const validateAndUpdateForm = updateGroup<ContactFormValue>({
  contactType: validate(required),
  firstName: validate(required),
  lastName: validate(required),
  email: validate(required),
  address: validate(required),
  phone: validate(required),
  company: validate(required),
  jobTitle: validate(required)
});

// const initialState: State = {
//   myForm: initialFormState,
// };
const reducers = combineReducers<State['myForm'], any>({
  formState(s = initialFormState, a: Action) {
    return validateAndUpdateForm(formGroupReducer(s, a));
  },
  submittedValue(s: ContactFormValue | undefined, a: SetSubmittedValueAction) {
    switch (a.type) {
      case SetSubmittedValueAction.TYPE:
        return a.submittedValue;

      default:
        return s;
    }
  },
});

export function reducer(s: State['myForm'], a: Action) {
  return reducers(s, a);
}

// export interface ContactForm extends FormState<Contact> {}

// const contactFormDefaultState = { model: initialFormState };

// export const getFormValues = (state: ContactForm) => state.model;
// export const getFormDirty = (state: ContactForm) => state.dirty;
// export const getFormErrors  = (state: ContactForm) => state.errors;
// export const getFormStatus = (state: ContactForm) => state.status;

// export function contactFormReducer(state = contactFormDefaultState, action) {
//   switch(action.type)  {
//     case 'LOAD_FORM':
//       return { ...state, model: action.payload};
//     default:
//       return state;
//   }
// }
