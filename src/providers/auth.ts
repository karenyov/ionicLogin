import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserModel } from '../models/UserModel';

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

  login(userModel: UserModel): boolean {
    return userModel.email == 'teste@teste.com.br' && userModel.password == '123';
  }

  logout(): void {

  }

}
