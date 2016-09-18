import * as React from 'react';
import { EntryActionCreator } from '../../../../flux/actions/EntryActionCreator';
import { InputComponent } from './InputComponent';
import { MessageType } from '../../../../common/validation/MessageType';

export class Title extends InputComponent {
    protected renderInput() {
        return <input
            type="text"
            className="form-control"
            placeholder="Entry Title" 
            value={this.props.value}
            onChange={this.onInput}
            onBlur={this.onBlur}
        />
    }

    private onInput = (event): void => {
        EntryActionCreator.inputTitle(event.target.value);
    }

    private onBlur = (event): void => {
        EntryActionCreator.blurTitle(event.target.value);
    }
}
