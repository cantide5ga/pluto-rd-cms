import { AbstractStore } from 'flux-ts-boilerplate';
import { Action } from 'flux-ts-boilerplate';
import { ActionTypes } from '../actions/ActionTypes';
import { Dispatcher } from 'flux-ts-boilerplate';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { MessageType } from '../../common/validation/MessageType';
import { FormState } from '../../common/FormState';

let alert = false;
let title: ValidatableInput = new ValidatableInput();
let date: ValidatableInput = new ValidatableInput();
let content: ValidatableInput = new ValidatableInput();

const validateTitleInput = (): void => {
    title.validationMsg = null; 
}

const validateTitleBlur = (): void => {    
    if(!title.value) { 
        title.validationMsg = {
            message: `Title can't be null`, 
            type: MessageType.ERROR
        }
    } else {
        title.validationMsg = null;
    }
}

const validateDateInput = (): void => {
    date.validationMsg = null;
}

const validateDateBlur = (): void => {
    if(!date.value) { 
       date.value = new Date().toString();
    }
}

const validateContentBlur = (): void => {
     if(!content.value) {
        content.validationMsg = {
            message: `Content can't be null`, 
            type: MessageType.ERROR
        }
    } else {
        content.validationMsg = null;
    }
}

const resetAlert = (): void => {
    alert = false;
}

class EntryFormStoreStatic extends AbstractStore {
    public getFormState(): FormState {
        return {
            alert: alert,
            title: title,
            date: date,
            content: content,
            keywords: null //pull from KeywordStore
        }
    }

    public isValid(): boolean {
        return !title.validationMsg
            && !date.validationMsg
            && !content.validationMsg;
    } 
}

export const EntryFormStore = new EntryFormStoreStatic();

const cb = (action: Action<ActionTypes>): void => {    
    switch(action.actionType) {
        case ActionTypes.AS_TYPING_TITLE:
        title.value = action.payload;
        resetAlert();
        validateTitleInput();
        EntryFormStore.emitChange();
        break;
        
        case ActionTypes.TITLE_BLUR:
        title.value = action.payload;
        resetAlert();
        validateTitleBlur();
        EntryFormStore.emitChange();
        break;

        case ActionTypes.AS_TYPING_DATE:
        date.value = action.payload;
        resetAlert();
        validateDateInput();
        EntryFormStore.emitChange();
        break;
        
        case ActionTypes.DATE_BLUR:
        date.value = action.payload;
        resetAlert();
        validateDateBlur();
        EntryFormStore.emitChange();
        break;

        case ActionTypes.INVALID_SUBMIT:
        alert = true;
        EntryFormStore.emitChange();
        break;
    }
};

Dispatcher<ActionTypes>().register(cb);