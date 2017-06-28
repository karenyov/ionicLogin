import { FormBuilder } from '@angular/forms';
import { BasePageInterface } from './BasePageInterface';

export abstract class BasePage {

    protected _formBuilder?: FormBuilder;

    constructor(basePageInterface: BasePageInterface) {
        this._formBuilder = basePageInterface.formBuilder;
        this.loadValidators();
    }

    protected loadValidators(): void {
        if (this._formBuilder != null) {
            this.doLoadValidators();
        }
    }

    protected doLoadValidators(): void {

    }
}