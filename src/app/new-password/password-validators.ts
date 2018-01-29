import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static mustHaveAtleastOneLowChar(control : AbstractControl) : ValidationErrors | null {
        let pattern = new RegExp("[a-z]+");
        if(!pattern.test(control.value as string))
            return { mustHaveAtleastOneLowChar : true };

        return null;
    }
}