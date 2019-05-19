import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loggedIn = false;
  userName: string;
  constructor(private httpclient: HttpClient, private router: Router) { }

  login(value: any, callback: any): boolean {

    this.httpclient.post('http://127.0.0.1:8081/login', JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          this.loggedIn = true;
          this.router.navigate(['home']);
          callback();
          alert('登陆成功');
        } else {
          this.loggedIn = false;
          alert('登陆失败');
        }
      }
    );
    return true;
  }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  logout() {
    this.router.navigate(['Login']);
    this.loggedIn = false;
  }
}
