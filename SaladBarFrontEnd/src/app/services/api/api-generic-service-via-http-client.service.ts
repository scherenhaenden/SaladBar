import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGenericServiceViaHttpClientService {

  constructor(private http: HttpClient) { }


 /* public add(a: number, b: number, c: number): number;
  public add(a: number, b: number): any;
  public add(a: string, b: string): any;

  public add(a: any, b: any, c?: any): any {
  if (c) {
    return a + c;
  }
  if (typeof a === 'string') {
    return `a is ${a}, b is ${b}`;
  } else {
    return a + b;
  }
}*/

  public get(route: string, host?: string): Promise<any> {

    const url = host ? host + route : environment.apiHost + route;

    return lastValueFrom(this.http.get(url));

  }
}
