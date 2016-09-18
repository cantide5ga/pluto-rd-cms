// import { AbstractStore } from 'flux-ts-boilerplate';
// import { Action } from 'flux-ts-boilerplate';
// import { ActionTypes } from '../actions/ActionTypes';
// import { Dispatcher } from 'flux-ts-boilerplate';
// import { TagState } from '../../common/TagState';
// import { suggestTags } from '../../rest/Facade';
// import { ValidationMsg } from '../../common/validation/ValidationMsg';
// import { MessageType } from '../../common/validation/MessageType';

// // const fuzzySuggest = async (chars: string) => {
// //     suggestions = await suggestTags(chars);
// // }

// // const associateKeyword = (keyword: string) => {
// //     input = '';
// //     keywords.push(keyword);
// // }

// // const removeKeyword = (keyword: string) => {
// //     const occurance = keywords.indexOf(keyword);
// //     if(occurance > -1)
// //         keywords.splice(occurance, 1);
// // }


// class KeywordStoreStatic extends AbstractStore {
//     public getTitle(): string {
//         return title;
//     }

//     public getDate(): Date {
//         return date;
//     }

//     public getKeywords(): string[] {
//         return keywords;
//     }

//     public getContent(): string {
//         return contentHtml;
//     } 
// }

// export const KeywordStore = new KeywordStoreStatic();

// const cb = (action: Action<ActionTypes>): void => {    
//     switch(action.actionType) {
//         case ActionTypes.CONTENT_EDITOR_BLUR:
//         updateContent(action.payload);
//         EntryFormStore.emitChange();
//         break;
        
//         case ActionTypes.AS_TYPING_TAGS:
//         fuzzySuggest(action.payload);
//         EntryFormStore.emitChange();
//         break;
        
//         case ActionTypes.TAG_CHOSEN:
//         associateKeyword(action.payload);
//         EntryFormStore.emitChange();
//         break;
        
//         case ActionTypes.TAG_REMOVAL:
//         removeKeyword(action.payload);
//         EntryFormStore.emitChange();
//         break;   
//     }
// };

// Dispatcher<ActionTypes>().register(cb);