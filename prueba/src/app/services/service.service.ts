import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  peticion() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
}
