import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';

import { IonicConstants } from '../ionic-constants';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http, private nativeStorage: NativeStorage) {

  }

  login(form: any): Observable<void> {

    if (!form || !form.email || !form.password) {
      return Observable.throw('Incorrect email or password');
    }

    let bodyReq = {
      email: form.email,
      password: form.password
    }
    return this.http.post(IonicConstants.BASE_URL + '/' + IonicConstants.Auth.LOGIN, bodyReq)
      .map(response => {
        let resp = response.json();
        this.nativeStorage.setItem('token_auth', { token: resp.data.token })
          .then(
          () => console.log('Token armazenado'),
          (error) => alert(error)
          );
      });
  }

  logout(): void {

  }

}
