import * as React from 'react';
import { Message } from '../../message/Message';
import { EntryActionCreator } from '../../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../../flux/stores/EntryFormStore';
import { ValidatableInput } from '../../../../common/validation/ValidatableInput';
import { TagState } from '../../../../common/TagState';
import { Suggestions } from './keywords/Suggestions';
import { Tag } from './keywords/Tag';

export class FuzzyKeywords extends React.Component<{}, TagState> {
    public render() {
        const tags = this.state.suggestions.map(handle => {
            return <Tag handle={handle}/>     
        });
        
        return (
            <div>
                <input type="text" 
                    placeholder="Keywords..." 
                    value={this.state.input}
                    onKeyDown={this.onKeyDown} />
                <Suggestions items={this.state.suggestions}/>
                { tags }
            </div>
        )
    }
    
    public componentDidMount() {
        EntryFormStore.addChangeListener(this.onChange);
    }

    public componentWillUnmount() {
        EntryFormStore.removeChangeListener(this.onChange);
    }
    
    private onKeyDown = () => {
        EntryActionCreator.suggestTag(this.state.input);
    }
    
    private onChange = (): void => {
        //this.setState(EntryFormStore.getTagState());
    }
}