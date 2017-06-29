import { FormBuilder } from '@angular/forms';

import { BasePageInterface } from './BasePageInterface';
import { AlertController, LoadingController, Loading, ToastController, Toast } from 'ionic-angular';

export abstract class BasePage {

    protected _formBuilder?: FormBuilder;
    protected _alertCtrl?: AlertController;

    protected _loadingCtrl?: LoadingController;
    protected _loading?: Loading;

    protected _toastCtrl?: ToastController;
    protected _toast: Toast;

    constructor(basePageInterface: BasePageInterface) {
        this._formBuilder = basePageInterface.formBuilder;
        this._alertCtrl = basePageInterface.alertCtrl;
        this._loadingCtrl = basePageInterface.loadingCtrl;
        this._toastCtrl = basePageInterface.toastCtrl;
        this.loadValidators();
    }

    protected loadValidators(): void {
        if (this._formBuilder != null) {
            this.doLoadValidators();
        }
    }

    protected doLoadValidators(): void {

    }

    protected showMessageError(message: string) {
        if (this._alertCtrl != null) {
            let alert = this._alertCtrl.create({
                title: "Error",
                subTitle: message,
                buttons: ["Ok"]
            });
            alert.present();
        }
    }

    protected showLoading(message: string, duration: number = 0) {
        if (duration == 0) {
            this._loading = this._loadingCtrl.create({
                content: message,
            });
        } else {
            this._loading = this._loadingCtrl.create({
                duration: duration,
                content: message,
            });
        }
        this._loading.present();
    }

    protected hideLoading(): void {
        if (this._loading != null) {
            this._loading.dismiss();
        }
    }

    protected showToast(message: string) {
        this._toast = this._toastCtrl.create({
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        this._toast.setMessage(message);
        this._toast.present();
    }

    protected hideToast() {
        if (this._toast != null) {
            this._toast.dismiss();
        }
    }
}