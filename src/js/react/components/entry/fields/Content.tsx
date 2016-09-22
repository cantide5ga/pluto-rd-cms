import * as React from 'react';
import { Message } from '../../message/Message';
import { EntryActionCreator } from '../../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../../flux/stores/EntryFormStore';
import { ValidatableInput } from '../../../../common/validation/ValidatableInput';

export class Content extends React.Component<ValidatableInput, {}> {
    public render() {
        const msg = this.props.validationMsg;

        let msgEl: React.ReactElement<ValidatableInput> = null;
        if(msg) {
            msgEl = <Message
                    value={msg.message} 
                    type={msg.type} />
        }

        return (
            <div style={{ paddingBottom: 30 }}>
                <div style={{ paddingBottom: 18 }}>
                    <textarea></textarea>
                </div>
                <div style={{ height: 25 }}>
                    { msgEl }
                </div>
            </div>
        )
    }
}
