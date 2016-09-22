import * as React from 'react';
import { wrap } from './InputMsgWrapper';
import { ValidationMsg } from '../../../../common/validation/ValidationMsg';

export const inputEl = (validationMsg: ValidationMsg, attribs: any):React.ReactElement<any> => {
    const style: React.CSSProperties = {
            // paddingTop: 10,
            marginRight: 10,
            marginBottom: 10
        }
    return wrap(attribs, validationMsg, style)
}