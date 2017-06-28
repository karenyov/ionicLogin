import { FormBuilder } from '@angular/forms';

import { BasePageInterface } from './BasePageInterface';
import { AlertController } from 'ionic-angular';

export abstract class BasePage {

    protected _formBuilder?: FormBuilder;
    protected _alertCtrl?: AlertController;

    constructor(basePageInterface: BasePageInterface) {
        this._formBuilder = basePageInterface.formBuilder;
        this._alertCtrl = basePageInterface.alertCtrl;
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
}