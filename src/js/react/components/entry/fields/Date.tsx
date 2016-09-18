import * as React from 'react';
import { EntryActionCreator } from '../../../../flux/actions/EntryActionCreator';
import { InputComponent } from './InputComponent';

export class Date extends InputComponent {    
    public renderInput() {
        return <input 
                    type="text" 
                    placeholder="Date"
                    className="form-control"  
                    value={this.props.value}
                    onChange={this.onInput}
                    onBlur={this.onBlur}    
                />
    }

    private onInput = (event): void => {
        EntryActionCreator.inputDate(event.target.value);
    }

    private onBlur = (event): void => {
        EntryActionCreator.blurDate(event.target.value);
    }
}
