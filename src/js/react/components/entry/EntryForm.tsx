import * as React from 'react';
import { Entry } from 'pluto-rd';
import { EntryActionCreator } from '../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../flux/stores/EntryFormStore';
import { Date } from './fields/Date';
import { Title } from './fields/Title';
import { FuzzyKeywords } from './fields/FuzzyKeyword';
import { FormState } from '../../../common/FormState';
import { Content } from './fields/Content';

export class EntryForm extends React.Component<{}, FormState> {

    constructor() {
        super();
        this.state = EntryFormStore.getFormState();
    }

    public render() {
        const style: React.CSSProperties = {
            display: this.state.alert ? 'block' : 'none'
        }

        return (
            <form className="form-inline">
                <div className="alert alert-danger navbar-fixed-top" style={style}>NOOO!!!!!</div>
                <Title
                    value={this.state.title.value}
                    validationMsg={this.state.title.validationMsg} />
                <Date 
                    value={this.state.date.value}
                    validationMsg={this.state.date.validationMsg} />
                <Content />
                
                <button id="post-entry" type="button" className="btn btn-primary btn-lg" onClick={this.onEntrySubmit}><span className="glyphicon glyphicon-road"></span> Post Entry</button>    
            </form>
        )
    }

    //<span style={{fontSize: 16}}className="label label-default">handle<a href="#"><span className="badge"><span className="glyphicon glyphicon-remove-circle"></span></span></a></span>

    public componentDidMount() {
        EntryFormStore.addChangeListener(this.onChange);
    }

    public componentWillUnmount() {
        EntryFormStore.removeChangeListener(this.onChange);
    }

    private onChange = (): void => {
        this.setState(EntryFormStore.getFormState());
    }

    private onEntrySubmit = (): void => {
        if(!EntryFormStore.isValid()) 
            EntryActionCreator.denySubmit();    
        // else
        //     EntryActionCreator.submitEntry();            
    }
}
