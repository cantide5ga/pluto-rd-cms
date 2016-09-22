import { ValidationMsg } from './ValidationMsg';
import { MessageType } from './MessageType';

export class ValidatableInput {    
    value = '';
    validationMsg = new ValidationMsg(null, null);
    isError() {
        return this.validationMsg.type === MessageType.ERROR 
    }
}