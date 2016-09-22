import * as React from 'react';
import { EntryActionCreator } from '../../../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../../../flux/stores/EntryFormStore';

export class Tag extends React.Component<{ handle: string }, {}> {
    public render() {
        const handle = this.props.handle;
        
        return (
               <span className="label label-default">
                    {handle}
                    <a href="#" onClick={this.onClickX(handle)}>
                        <span className="badge">
                            <span className="glyphicon glyphicon-remove-circle"></span>
                        </span>
                    </a>
               </span>
        )
    }
    
    private onClickX(handle: string) {
        EntryActionCreator.removeTag(handle);
    }
}