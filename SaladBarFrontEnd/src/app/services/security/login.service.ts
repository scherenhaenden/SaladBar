import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { ApiGenericServiceViaHttpClientService } from '../api/api-generic-service-via-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiGenericServiceViaHttpClientService: ApiGenericServiceViaHttpClientService) { }

  // Write a method to sign in a user
  public async signIn(user: UserModel): Promise<any> {
    // Call the API to sign in the user
    var result = await this.apiGenericServiceViaHttpClientService.post('/api/signin', user);
    // If the user was signed in successfully, store the token in local storage
    if (result.success) {
      // Later I need to set this token in the header of all API calls
      // This is temporary
      localStorage.setItem('access_token', result.token);
      return result;
    }
    return null;
  }
}
