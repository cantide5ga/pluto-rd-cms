import * as React from 'react';
import { MessageType } from '../../../common/validation/MessageType';

export const css = (type: MessageType): string => {
    let cls: string = '';
    
    //TODO incorporate a glyph
    switch(type) {
    case MessageType.SUCCESS:
        cls = 'text-success';
        break; 
    case MessageType.INFO:
        cls = 'text-info';
        break;
    case MessageType.WARNING:
        cls = 'text-warning';
        break;
    case MessageType.ERROR:
        cls = 'text-danger';
        break;
    }

    return cls;
}