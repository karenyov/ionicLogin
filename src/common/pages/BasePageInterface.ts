import { FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';

export interface BasePageInterface {

    formBuilder?: FormBuilder;
    alertCtrl?: AlertController;
}