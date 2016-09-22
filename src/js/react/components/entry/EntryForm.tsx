import * as React from 'react';
import { Entry } from 'pluto-rd';
import { EntryActionCreator } from '../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../flux/stores/EntryFormStore';
import { Date } from './fields/Date';
import { Title } from './fields/Title';
import { FuzzyKeyword } from './fields/keywords/FuzzyKeyword';
import { FormState } from '../../../common/FormState';
import { Content } from './fields/Content';
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const INVALID_FORM_MSG = 'This entry has errors! Please correct each input as noted.';

export class EntryForm extends React.Component<{}, FormState> {
    private el: React.ReactElement<{}>;

    constructor() {
        super();
        this.state = EntryFormStore.getFormState();
        
        
           const containerStyle: React.CSSProperties = {
            opacity: .9,
            paddingTop: 8,
            textAlign: 'center'
        },
        alertStyle: React.CSSProperties = {
            width: '50%',
            margin: 'auto',
            textAlign: 'left'
        }
        
        this.el = <div style={containerStyle} className="navbar-fixed-top">
                <div 
                    className="alert alert-danger" 
                    style={alertStyle}>
                        <button type="button" 
                            className="close"
                            onClick={this.onFormAlertClose}>
                                <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>{INVALID_FORM_MSG}</strong>
                </div>
            </div> 
    }

    public render() {
      

//TODO: re-add alert, consider making seperate element and hook into flux lifecycle
         

        return (
            <form className="form-inline">
                <ReactCSSTransitionGroup 
                    transitionName="form-alert" 
                    transitionEnterTimeout={200} 
                    transitionLeaveTimeout={500}>
                        { this.state.alert ? this.el : null}
                    </ReactCSSTransitionGroup>       

                <Title
                    value={this.state.title.value}
                    validationMsg={this.state.title.validationMsg} />
                <Date 
                    value={this.state.date.value}
                    validationMsg={this.state.date.validationMsg} />
                <Content 
                    validationMsg={this.state.content.validationMsg} />
                <FuzzyKeyword
                    input={this.state.keywords.input}
                    suggestions={this.state.keywords.suggestions}
                    selected={this.state.keywords.selected} />
                
                <button id="post-entry" 
                    type="button" 
                    className="btn btn-primary btn-lg" 
                    onClick={this.onEntrySubmit}>
                        <span className="glyphicon glyphicon-road"></span> 
                        &nbsp;Post Entry
                </button>    
            </form>
        )
    }

    public componentDidMount() {
        EntryFormStore.addChangeListener(this.onChange);
    }

    public componentWillUnmount() {
        EntryFormStore.removeChangeListener(this.onChange);
    }

    private onChange = (): void => {
        this.setState(EntryFormStore.getFormState());
    }

    private onFormAlertClose = (): void => {
        EntryActionCreator.closeFormAlert();
    }

    private onEntrySubmit = (): void => {
        if(!EntryFormStore.isValid()) 
            EntryActionCreator.denySubmit();    
        // else
        //     EntryActionCreator.submitEntry();            
    }
}
