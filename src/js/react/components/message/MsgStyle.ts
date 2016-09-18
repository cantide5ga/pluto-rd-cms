import * as React from 'react';
import { MessageType } from '../../../common/validation/MessageType';

export const css = (type: MessageType): string => {
    let cls: string;
    
    //TODO incorporate a glyph
    switch(type) {
    case MessageType.SUCCESS:
        cls = 'alert alert-success';
        break; 
    case MessageType.INFO:
        cls = 'alert alert-info';
        break;
    case MessageType.ERROR:
        cls = 'alert alert-danger';
        break;
    }

    return cls;
}