import * as React from 'react';
import { EntryActionCreator } from '../../../../flux/actions/EntryActionCreator';
import { ValidatableInput } from '../../../../common/validation/ValidatableInput';
import { inputEl } from './InputComponent';

export class Date extends React.Component<ValidatableInput, {}> {    
    public render() {
        return inputEl(
            this.props.validationMsg,
            {
                type: 'text',
                placeholder: 'Date',
                value: this.props.value,
                onChange: this.onInput,
                onBlur: this.onBlur
            }
        )
    }
    
    private onInput = (event): void => {
        EntryActionCreator.inputDate(event.target.value);
    }

    private onBlur = (event): void => {
        EntryActionCreator.blurDate(event.target.value);
    }
}
