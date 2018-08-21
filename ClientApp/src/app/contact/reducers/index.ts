import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import { environment } from '@env/environment';
import * as fromContact from '@app/contact/reducers/contact.reducer';

export interface ContactState {
  contact: fromContact.State;
}

export interface State extends fromRoot.State {
  contact: ContactState;
}

//

export const reducers: ActionReducerMap<ContactState> = {
  contact: fromContact.reducer,
};

export const getContactStateValue = createFeatureSelector<ContactState>('contact');

export const getContactState = createSelector(
  getContactStateValue,
  state => state.contact
);
export const getContactEntity = createSelector(
  getContactState,
  fromContact.getContact
);
export const getContactLoading = createSelector(
  getContactState,
  fromContact.getLoading
);
export const getContactError = createSelector(
  getContactState,
  fromContact.getError
);
