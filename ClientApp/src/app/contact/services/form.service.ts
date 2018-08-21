import { Injectable } from '@angular/core';

import { Form, Element } from '@app/contact/models/form.interface';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

export interface State {
  forms: Form[],
  elements: Element[]
}
// TODO this is not the state

@Injectable()
export class FormService {
// state
  private subject = new BehaviorSubject<State>(null);
  store = this.subject.asObservable().distinctUntilChanged();

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  addElement(form: Form) {
    const value = this.subject.value;
    this.subject.next({ ...value, forms: [...value.forms, form] });
  }

}
