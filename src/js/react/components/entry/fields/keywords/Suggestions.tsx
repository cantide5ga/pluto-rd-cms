import * as React from 'react';
import { EntryActionCreator } from '../../../../../flux/actions/EntryActionCreator';

export class Suggestions extends React.Component<{ items: string[] }, {}> {
    public render() {
        const suggestionEls = this.props.items.map(suggestion => {
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