import * as React from 'react';
import { css } from './MsgStyle';
import { MessageType } from '../../../common/validation/MessageType';

export class Message extends React.Component<MessageProps, {}> {    
    public render() {
        return (
            <span className={css(this.props.type)}>
                {this.props.value}
            </span>
        )
    }
}

export interface MessageProps {
    value: string,
    type: MessageType
}