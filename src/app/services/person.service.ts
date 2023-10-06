import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  get(): Observable<Person[]> {
    return this.http.get<Person[]>('http://localhost:5000/persons');
  }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>('http://localhost:5000/persons', person);
  }

  delete(id: string) {
    return this.http.delete<void>('http://localhost:5000/persons/');
  }
}
