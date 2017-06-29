import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { UserModel } from '../models/UserModel';
import { IonicConstants } from '../ionic-constants';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  login(userModel: UserModel): Observable<void> {

    if (!userModel || !userModel.email || !userModel.password) {
      return Observable.throw('Incorrect email or password');
    }

    let bodyReq = {
      email: userModel.email,
      password: userModel.password
    }
    return this.http.post(IonicConstants.BASE_URL + '/' + IonicConstants.Auth.LOGIN, bodyReq)
      .map(response => {
        let resp = response.json();
      });
  }

  logout(): void {

  }

}
