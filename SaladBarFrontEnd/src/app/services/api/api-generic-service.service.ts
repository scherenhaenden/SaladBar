import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiGenericServiceService {

  constructor(private http: HttpClient) { }


  public async get<T>(apiUrl: string): Promise<T> {

    // Use fetch with headers and method
    return fetch(apiUrl, { method: 'GET', headers: { 'Content-Type': 'application/json' } }).then(response => response as unknown as T );



    //return fetch(apiUrl) .then(response => response.json());
  }


}
