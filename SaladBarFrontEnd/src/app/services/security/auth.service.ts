import { Injectable } from '@angular/core';
import { WebStorage } from '../tools/web-storage';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginService: LoginService) {}

  // Write a method to log in a user and authorize it
  public async login(user: any): Promise<any> {
    // Call the login service to sign in the user
    var result = await this.loginService.signIn(user);
    // If the user was signed in successfully, store the token in local storage
    if (result) {
      // store token in local storage via web storage service
      WebStorage.set('access_token', result.token);
    }
  }

  // Write a method to log out a user and deauthorize it
  public async logout(): Promise<any> {
    // Remove the token from local storage
    WebStorage.remove('access_token');
  }





  /*endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }
  // Sign-in
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }*/
}
