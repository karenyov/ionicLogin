import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { BasePage } from '../../common/pages/BasePage';
import { FormValidator } from '../../validators/FormValidator';
import { UserModel } from '../../models/UserModel';
import { AuthProvider } from '../../providers/auth';

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
  userModel: UserModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public authProvider: AuthProvider, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl });
    this.isSubmitted = false;
    this.userModel = new UserModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void {
    this.isSubmitted = true;
    this.hideToast();
    if (this.loginFrmGroup.valid) {
      this.showLoading('Fazendo login...');
      this.authProvider.login(this.userModel).subscribe(
        data => {
          this.hideLoading();
          this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        },
        err => {
          this.hideLoading();
          this.showToast(`${JSON.parse(err._body).error.message}`);
        }
      );
    }
  }

  protected doLoadValidators(): void {
    this.loginFrmGroup = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, FormValidator.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }
}
