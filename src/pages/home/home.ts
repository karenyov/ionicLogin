import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  token: string;

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {
    this.nativeStorage.getItem('token_auth').then(
      data => this.token = data.token,
      error => this.token = '<no token>'
    );
  }

}
