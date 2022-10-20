import { Injectable } from '@angular/core';
import { ApiGenericServiceViaHttpClientService } from '../api-generic-service-via-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private apiGenericServiceViaHttpClientService: ApiGenericServiceViaHttpClientService) { }

  public login(Username: string, Password: string): Promise<any> {
    const AuthenticateRequest = {Username, Password};
    var result = this.apiGenericServiceViaHttpClientService.post('/Login/authenticate',AuthenticateRequest);
    console.log(result);
    return result;
  }
}
