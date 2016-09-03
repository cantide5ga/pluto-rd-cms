import * as React from 'react';
import { Entry } from 'pluto-rd';
import { EntryActionCreator } from '../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../flux/stores/EntryFormStore';
import { FuzzyTagInput } from './tags/FuzzyTagInput';

export class EntryForm extends React.Component<{}, { entry: Entry }> {
    public render() {
        const date = new Date();
        
        return (
            <div>
                <input type="text" placeholder="Entry Title" value={this.state.entry.title} />
                <input type="text" placeholder={date} />
                <FuzzyTagInput />
                //content handled by 3rd party lib
                
                <input type="submit" value="Post Entry" onClick={this.onEntrySubmit}/>    
            </div>
        )
    }
    
    public componentDidMount() {
        EntryFormStore.addChangeListener(this.onChange);
    }

    public componentWillUnmount() {
        EntryFormStore.removeChangeListener(this.onChange);
    }
    
    private onEntrySubmit = (): void => {
        EntryActionCreator.submitEntry(this.state.entry);            
    }
    
    private onChange = (): void => {
        const entry = this.state.entry;
        entry.content = EntryFormStore.getContent();
        entry.keywords = EntryFormStore.getTagState().chosen;
        
        this.setState({
           entry: entry
        })
    }
}
