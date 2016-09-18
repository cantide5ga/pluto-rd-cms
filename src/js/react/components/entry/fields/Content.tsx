import * as React from 'react';
import { Message } from '../../message/Message';
import { EntryActionCreator } from '../../../../flux/actions/EntryActionCreator';
import { EntryFormStore } from '../../../../flux/stores/EntryFormStore';
import { ValidatableInput } from '../../../../common/validation/ValidatableInput';

export class Content extends React.Component<{}, {}> {
    public render() {
        return (
            <textarea></textarea>
        )
    }
}
