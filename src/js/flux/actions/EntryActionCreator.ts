import { AbstractActionCreator } from 'flux-ts-boilerplate';
import { ActionTypes } from './ActionTypes';
import { Entry } from 'pluto-rd';
import { submitEntry } from '../../rest/Facade';

class ActionCreator extends AbstractActionCreator<ActionTypes> {
    public async submitEntry(entry: Entry) {
        //TODO try/catch
        await submitEntry(entry);
        
        this.dispatch({
            actionType: ActionTypes.ENTRY_SUMBIT
        });
    }
    
    public inputContent() {
        this.dispatch({
            actionType: ActionTypes.CONTENT_FILL,    
        });
    }

    public blurContent(html: string) {
        this.dispatch({
            actionType: ActionTypes.CONTENT_EDITOR_BLUR,
            payload: html    
        });
    }
    
    public suggestTag(chars: string) {
        this.dispatch({
            actionType: ActionTypes.AS_TYPING_TAGS,
            payload: chars    
        });
    }
    
    public addTag(handle) {
        this.dispatch({
            actionType: ActionTypes.TAG_CHOSEN,
            payload: handle    
        });
    }
    
    public removeTag(handle) {
        this.dispatch({
            actionType: ActionTypes.TAG_REMOVAL,
            payload: handle    
        });
    }

    public denySubmit() {
        this.dispatch({
            actionType: ActionTypes.INVALID_SUBMIT
        });
    }

    public inputTitle(title: string) {
        this.dispatch({
            actionType: ActionTypes.AS_TYPING_TITLE,
            payload: title
        });
    }

    public blurTitle(title: string) {
        this.dispatch({
            actionType: ActionTypes.TITLE_BLUR,
            payload: title
        });
    }

    public inputDate(date: string) {
        this.dispatch({
            actionType: ActionTypes.AS_TYPING_DATE,
            payload: date
        });
    }

    public blurDate(date: string) {
        this.dispatch({
            actionType: ActionTypes.DATE_BLUR,
            payload: date
        });
    }

    public inputKeyword(handle: string) {
        this.dispatch({
            actionType: ActionTypes.AS_TYPING_KEYWORD,
            payload: handle
        });
    }

    public blurKeyword() {
        this.dispatch({
            actionType: ActionTypes.KEYWORD_BLUR
        })
    }

    public closeFormAlert() {
        this.dispatch({
            actionType: ActionTypes.FORM_ALERT_CLOSE
        })
    }
}

export const EntryActionCreator: ActionCreator = new ActionCreator(); 