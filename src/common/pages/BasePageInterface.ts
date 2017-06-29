import { FormBuilder } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';

export interface BasePageInterface {

    formBuilder?: FormBuilder;
    alertCtrl?: AlertController;
    loadingCtrl?: LoadingController;
    toastCtrl?: ToastController;
}