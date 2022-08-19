import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiGenericServiceService {

  constructor(private http: HttpClient) { }


  // TODO: extend this to support other methods like POST, PUT, DELETE
  // TODO: extend get to support headers and other options

  public get<T>(apiUrl: string): Promise<Response> {

    // Use fetch with headers and method
    return fetch(apiUrl, { method: 'GET', headers: { 'Content-Type': 'application/json' } });



    //return fetch(apiUrl) .then(response => response.json());
  }


}
