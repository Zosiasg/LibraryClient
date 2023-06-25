import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'https://localhost:44329/api/books';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

// Error handling
handleError(error: HttpErrorResponse) {
  
  if (error.status === 200 || error.status === 201) {
    // Brak błędu dla kodów odpowiedzi 200 i 201
    return throwError('');
  }

  let errorMessage = '';

  if (error.error instanceof ErrorEvent) {
    // Błąd po stronie klienta
    errorMessage = error.error.message;
  } else {
    // Błąd po stronie serwera
    if (error.error.errors) {
      // Błąd walidacji zwrócony przez API
      const validationErrors = error.error.errors;
      Object.keys(validationErrors).forEach((key) => {
        errorMessage += `${key}: ${validationErrors[key][0]}\n`;
      });
    } else {
      // Inne błędy serwera
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
  }

  window.alert(errorMessage);
  return throwError(errorMessage);
}

  // Create a new item
  createItem(item: Book): Observable<Book> {
    return this.http
      .post<Book>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single Book data by ID
  getItem(idBook:number): Observable<Book> {
    return this.http
      .get<Book>(this.base_path + '/' + idBook)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get Books data
  getList(): Observable<Book> {
    return this.http.get<Book>(this.base_path).pipe(
        tap((Book) => console.log('Book fetched!')),
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update item by id
  updateItem(idBook:number, item:Book): Observable<Book> {
    return this.http
      .put<Book>(this.base_path + '/' + idBook, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
deleteItem(idBook: number): Observable<any> {
  return this.http
    .delete(this.base_path + '/' + idBook, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
}
}