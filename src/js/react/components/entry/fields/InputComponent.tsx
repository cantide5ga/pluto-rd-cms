import * as React from 'react';
import { Message } from '../../message/Message';
import { EntryActionCreator } from '../../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../../flux/stores/EntryFormStore';
import { ValidatableInput } from '../../../../common/validation/ValidatableInput';
import { MessageType } from '../../../../common/validation/MessageType';

export abstract class InputComponent extends React.Component<ValidatableInput, {}> {
    public render() {
        const obj = this.props.validationMsg;
        let msgEl: React.ReactElement<ValidatableInput> = null;
        let feedback: string;
        if(obj) {
            msgEl = <Message value={obj.message} type={obj.type} />
            
            feedback = '';
            switch(obj.type) {
                case MessageType.ERROR:
                feedback = `has-error ${feedback}`;
                break;
            }
        }

        return (
            <div>
                <div className={`form-group input-group-lg has-feedback ${feedback}`}>
                    { this.renderInput() }
                </div>
                { msgEl }
            </div>
        )
    }

    protected abstract renderInput(): React.ReactElement<{}>;
}
