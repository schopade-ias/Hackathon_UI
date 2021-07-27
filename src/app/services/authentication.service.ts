import { Injectable } from '@angular/core';
import { SignInData } from '../model/signInData';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: SignInData = new SignInData('wang', 'test', 'Employee');
  isAuthenticated = false;
  contents: any;

  constructor(private router: Router, private http: HttpClient) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword()) && this.checkUser(signInData.getUser());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  private checkUser(user: string): boolean {
    return user === this.mockUser.getUser();
  }


  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  getloginDetails(signInData){
    let params = new HttpParams();
    return this.http.get('http://localhost:8090/login'+ '/' + signInData.value.login + '/' + signInData.value.password+ '/' + signInData.value.user);
  }
}
