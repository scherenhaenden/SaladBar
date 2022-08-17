import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGenericServiceViaHttpClientService {

  constructor(private http: HttpClient) { }



  public get(endpoint: string): Promise<any> {

    return lastValueFrom(this.http.get(endpoint));

  }
}
