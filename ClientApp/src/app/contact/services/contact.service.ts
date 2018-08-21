import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError, tap, map, delay } from 'rxjs/operators';
import { Contact } from '@app/contact/models/contact.viewmodel';
import { nextSortDir } from '@swimlane/ngx-datatable/release/utils';
import { environment } from '@env/environment';
//
@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private contactUrl = environment.api.contact;

  constructor(private http: HttpClient) { }

  loadContact(): Observable<Contact> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Contact>(this.contactUrl, { headers: headers })
      .pipe(
        tap(data => console.log('loadContact: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createContact(contact: Contact): Observable<Contact> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Contact>(this.contactUrl, contact, { headers: headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateName(firstName: string): Observable<Contact> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Contact>(this.contactUrl, { firstName }, { headers: headers })
      .pipe(
        tap(data => console.log('patchName: ' + JSON.stringify(data))),
      );
  }

  private handleError(err) {
    // TODO: We should probably handle this with HTTP interceptors and tie them to the store.

    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    return Observable.throw(errorMessage);
  }

}
