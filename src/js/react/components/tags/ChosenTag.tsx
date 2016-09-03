import * as React from 'react';
import { EntryActionCreator } from '../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../flux/stores/EntryFormStore';

export class ChosenTag extends React.Component<{ handle: string }, {}> {
    public render() {
        const handle = this.props.handle;
        
        return (
               <span class="tag">
                    <span>{handle}</span>;
                    <a href="#" onClick={this.onClickX(handle)}><span>x</span></a>
               </span>
        )
    }
    
    private onClickX(handle: string) {
        EntryActionCreator.removeTag(handle);
    }
}