import { Entry } from 'pluto-rd';
import { AbstractStore } from 'flux-ts-boilerplate';
import { Action } from 'flux-ts-boilerplate';
import { ActionTypes } from '../actions/ActionTypes';
import { Dispatcher } from 'flux-ts-boilerplate';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { MessageType } from '../../common/validation/MessageType';
import { ValidationMsg } from '../../common/validation/ValidationMsg';
import { KeywordProps } from '../../common/keywords/KeywordProps';
import { FormState } from '../../common/FormState';

const EMPTY_TITLE_VALIDATION_MSG = `Title can't be empty.`;
const EMPTY_CONTENT_VALIDATION_MSG = `This entry will have no content!`;
const EMPTY_TAGS_VALIDATION_MSG = 'At least one tag is required.';
const TAG_INPUT_INFO_MSG = 'Press <ENTER> after each keyword';

let alert = false;
let titleIn = new ValidatableInput();
let dateIn = new ValidatableInput();
let contentIn = new ValidatableInput();
let keywordIn: KeywordProps = {
    input: new ValidatableInput(),
    suggestions: new Array<string>(),
    selected: new Array<string>()
}

const validateTitleBlur = (): void => {    
    if(!titleIn.value) { 
        titleIn.validationMsg = new ValidationMsg(
            EMPTY_TITLE_VALIDATION_MSG, 
            MessageType.ERROR
        );
    } else titleIn.validationMsg = null;
}

const validateDateBlur = (): void => {
    if(!dateIn.value) { 
       dateIn.value = new Date().toString();
    }
}

const validateContentBlur = (): void => {
     if(!contentIn.value) {
        contentIn.validationMsg = new ValidationMsg(
            EMPTY_CONTENT_VALIDATION_MSG, 
            MessageType.WARNING
        );
    } else contentIn.validationMsg = null;
}

const guideKeywordsInput = (): void => {
    keywordIn.input.validationMsg = new ValidationMsg(
        TAG_INPUT_INFO_MSG,
        MessageType.INFO
    );
}

const validateKeywordsBlur = (): void => {
    keywordIn.input.value = '';

    if(keywordIn.selected.length < 1) {
        keywordIn.input.validationMsg = new ValidationMsg(
            EMPTY_TAGS_VALIDATION_MSG,
            MessageType.ERROR
        );
    } else keywordIn.input.validationMsg = null;
}

const resetAlert = (): void => {
    alert = false;
}

class EntryFormStoreStatic extends AbstractStore {
    public getFormState(): FormState {
        return {
            alert: alert,
            title: titleIn,
            date: dateIn,
            content: contentIn,
            keywords: keywordIn
        }
    }

    public isValid(): boolean {
        //validate all fields to give feedback on next render
        validateTitleBlur();
        validateDateBlur();
        validateContentBlur();
        validateKeywordsBlur();

        return !titleIn.isError()
            && !dateIn.isError()
            && !contentIn.isError()
            && !keywordIn.input.isError()
    }

    //transform to Entry object
    public getEntryDto(): Entry {
        return {
            title: titleIn.value,
            date: new Date(dateIn.value), //moment?
            content: contentIn.value,
            keywords: keywordIn.selected
        }
    } 
}

export const EntryFormStore = new EntryFormStoreStatic();

const cb = (action: Action<ActionTypes>): void => {    
    switch(action.actionType) {       
        case ActionTypes.AS_TYPING_TITLE:
        titleIn.value = action.payload;
        titleIn.validationMsg = null;
        resetAlert();
        EntryFormStore.emitChange();
        break;
        
        case ActionTypes.TITLE_BLUR:
        titleIn.value = action.payload;
        resetAlert();
        validateTitleBlur();
        EntryFormStore.emitChange();
        break;
        
        case ActionTypes.DATE_BLUR:
        dateIn.value = action.payload;
        resetAlert();
        validateDateBlur();
        EntryFormStore.emitChange();
        break;

        case ActionTypes.CONTENT_EDITOR_BLUR:
        contentIn.value = action.payload;
        resetAlert();
        validateContentBlur();
        EntryFormStore.emitChange();
        break;

        case ActionTypes.CONTENT_FILL:
        contentIn.value = action.payload;
        contentIn.validationMsg = null;
        resetAlert();
        EntryFormStore.emitChange();
        break;

        case ActionTypes.AS_TYPING_KEYWORD:
        keywordIn.input.value = action.payload;
        resetAlert();
        guideKeywordsInput();
        EntryFormStore.emitChange();
        break;

        case ActionTypes.KEYWORD_BLUR:
        keywordIn.input.value = action.payload;
        resetAlert();
        validateKeywordsBlur();
        EntryFormStore.emitChange();
        break;

        case ActionTypes.FORM_ALERT_CLOSE:
        alert = false;
        EntryFormStore.emitChange();
        break;

        case ActionTypes.INVALID_SUBMIT:
        alert = true;
        EntryFormStore.emitChange();
        break;
    }
};

Dispatcher<ActionTypes>().register(cb);