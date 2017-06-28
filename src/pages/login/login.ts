import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BasePage } from '../../common/pages/BasePage';
import { FormValidator } from '../../validators/FormValidator';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BasePage {

  loginFrmGroup: FormGroup;
  isSubmitted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
    super({ formBuilder: formBuilder });
    this.isSubmitted = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void {
    this.isSubmitted = true;
    if (this.loginFrmGroup.valid) {

    }
  }

  protected doLoadValidators(): void {
    this.loginFrmGroup = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, FormValidator.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }
}
