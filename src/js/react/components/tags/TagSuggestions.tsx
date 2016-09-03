import * as React from 'react';
import { EntryActionCreator } from '../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../flux/stores/EntryFormStore';

export class TagSuggestions extends React.Component<{ suggestions: string[] }, {}> {
    public render() {
        const suggestionEls = this.props.suggestions.map(suggestion => {
            return <span className="suggestion" onClick={this.chooseTag(suggestion)}>
                    <a href="#">{suggestion}</a>
                </span>    
        });
               
        return (
               <div id="suggestions">
                    {suggestionEls}
               </div>
        )
    }
        
    private chooseTag = (tag: string): void => {
        EntryActionCreator.addTag(tag);
    }
}