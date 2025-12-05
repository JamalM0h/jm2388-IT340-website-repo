import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Crud {

  private expressUrl = 'http://192.168.10.10:3000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.expressUrl}/`);
  }

  postData(data: any): Observable<any> {
   return this.http.post(`${this.expressUrl}/regis`, data);
  }

  deleteData(name: string): Observable<any> {
   return this.http.delete(`${this.expressUrl}/delete?username=${name}`);
  }

  addUser(data: any): Observable<any> {
   return this.http.post(`${this.expressUrl}/AddUser`, data);
  }
}

