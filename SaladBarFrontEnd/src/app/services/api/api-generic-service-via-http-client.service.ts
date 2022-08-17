import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGenericServiceViaHttpClientService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  public get(endpoint: string): Promise<any> {

    return lastValueFrom(this.http.get(this.apiUrl + endpoint));

  }
}
