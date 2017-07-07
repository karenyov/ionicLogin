import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { AuthProvider } from '../../providers/auth';
import { CustomValidators } from "../../validators/custom-validators";


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
export class LoginPage {

  loginFrmGroup: FormGroup;
  error: string;
  email: AbstractControl;
  password: AbstractControl;
  toast: any = null;
  loading: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public authProvider: AuthProvider,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.loadValidators();
    this.email = this.loginFrmGroup.controls['email'];
    this.password = this.loginFrmGroup.controls['password'];
  }

  ionViewDidLoad() {

  }

  signin(form: any): void {
    if (this.toast != null) {
      this.toast.dismiss();
    }
    if (this.loginFrmGroup.valid) {
      this.showLoader('"Authenticating..."');
      this.authProvider.login(form).subscribe(
        data => {
          this.loading.dismiss();
          this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        },
        err => {
          this.loading.dismiss();
          this.showToast(`${JSON.parse(err._body).error.message}`);
        }
      );
    }
  }

  protected loadValidators(): void {
    this.loginFrmGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, CustomValidators.emailValidator, CustomValidators.noEmptyWhiteSpace])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), CustomValidators.passwordValidator, CustomValidators.noEmptyWhiteSpace])]
    });
  }

  showToast(message: string) {
    this.toast = this.toastCtrl.create({
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    this.toast.setMessage(message);
    this.toast.present();
  }

  showLoader(message: string) {
    this.loading = this.loadingCtrl.create({
      content: message
    });
    this.loading.present();
  }
}
