import { MessageType } from './MessageType';

export class ValidationMsg { //TODO rename to just Msg, and turn back into interface
    constructor(message: string, type: MessageType) {
        this.message = message;
        this.type = type;
    }    
    message: string;
    type: MessageType;
}