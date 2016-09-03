import * as React from 'react';
import { EntryActionCreator } from '../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../flux/stores/EntryFormStore';
import { TagSuggestions } from './TagSuggestions';
import { ChosenTag } from './ChosenTag';
import { TagState } from '../../../common/TagState';

export class FuzzyTagInput extends React.Component<{}, TagState> {
    public render() {
        const tags = this.state.chosen.map(handle => {
            return <ChosenTag handle={handle}/>     
        });
        
        return (
            <div>
                <input type="text" 
                    placeholder="Keywords..." 
                    value={this.state.input}
                    onKeyDown={this.onKeyDown} />
                <TagSuggestions suggestions={this.state.suggestions}/>
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
        this.setState(EntryFormStore.getTagState());
    }
}