import { ValidationMsg } from '../../../../common/validation/ValidationMsg';
import { ValidatableInput } from '../../../../common/validation/ValidatableInput';
import { Message } from '../../message/Message';
import * as React from 'react';
import { MessageType } from '../../../../common/validation/MessageType';

export const wrap = (attribs: any, msg: ValidationMsg, style?: React.CSSProperties): React.ReactElement<any> => {
    let msgEl: React.ReactElement<ValidatableInput> = null;
    let feedback = '';
    if(msg) {
        msgEl = <Message value={msg.message} type={msg.type} />
        
        switch(msg.type) {
            case MessageType.ERROR:
            feedback = `has-error`;
            break;
        }
    }

    return (
        <div>
            <div 
                className={`form-group input-group-lg has-feedback ${feedback}`}
                style={style}
                >
                <input 
                    className="form-control"
                    {...attribs}
                    />
            { msgEl }
            </div>
        </div>
    )
}
