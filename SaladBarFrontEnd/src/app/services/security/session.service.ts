import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  // Write a method to set current user
  public setCurrentUser(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

}
