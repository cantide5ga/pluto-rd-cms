import { AbstractStore } from './AbstractStore';
import { Action } from '../actions/Action';
import { ActionTypes } from '../actions/ActionTypes';
import { Dispatcher } from '../dispatcher/Dispatcher';
import { TagState } from '../../common/TagState';
import { suggestTags } from '../../rest/Facade';

let contentHtml = '';
let keywords: Array<string>;
let input: string;
let suggestions: Array<string>;

const updateContent = (html: string) => {
    contentHtml = html;
}

const fuzzySuggest = async (chars: string) => {
    suggestions = await suggestTags(chars);
}

const associateKeyword = (keyword: string) => {
    input = '';
    keywords.push(keyword);
}

const removeKeyword = (keyword: string) => {
    const occurance = keywords.indexOf(keyword);
    if(occurance > -1)
        keywords.splice(occurance, 1);
}

class EntryFormStoreStatic extends AbstractStore {
    public getContent(): string {
        return contentHtml;
    }

    public getTagState(): TagState {
        return {
            input: input,
            suggestions: suggestions,
            chosen: keywords 
        }
    } 
}

export const EntryFormStore = new EntryFormStoreStatic();

const cb = (action: Action<ActionTypes>): void => {    
    switch(action.actionType) {
        case ActionTypes.CONTENT_EDITOR_BLUR:
        updateContent(action.payload);
        EntryFormStore.emitChange();
        break;
        
        case ActionTypes.AS_TYPING_TAGS:
        fuzzySuggest(action.payload);
        EntryFormStore.emitChange();
        break;
        
        case ActionTypes.TAG_CHOSEN:
        associateKeyword(action.payload);
        EntryFormStore.emitChange();
        break;
        
        case ActionTypes.TAG_REMOVAL:
        removeKeyword(action.payload);
        EntryFormStore.emitChange();
        break;   
    }
};

Dispatcher<ActionTypes>().register(cb);