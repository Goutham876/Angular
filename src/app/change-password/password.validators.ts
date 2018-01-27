import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static shouldHaveOneUpperCaseChar(control : AbstractControl) : ValidationErrors | null {
        let upperCase = new RegExp("[A-Z]+");
        if(!upperCase.test(control.value as string))
            return {
                shouldHaveOneUpperCaseChar : true
            }
        return null;    
    }

    static shouldHaveOneLowerCaseChar(control : AbstractControl) : ValidationErrors | null {
        let lowerCase = new RegExp("[a-z]+");
        if(!lowerCase.test(control.value as string))
            return {
                shouldHaveOneLowerCaseChar : true
            }
        return null;    
    }

    static shouldHaveOneNumber(control : AbstractControl) : ValidationErrors | null {
        let number = new RegExp("[0-9]+");
        if(!number.test(control.value as string)) 
            return {
                shouldHaveOneNumber : true
        }    
        return null;    
    }
}