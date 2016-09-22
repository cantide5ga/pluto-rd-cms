import * as React from 'react';
import { EntryActionCreator } from '../../../../../flux/actions/EntryActionCreator';
import { KeywordProps } from '../../../../../common/keywords/KeywordProps';
import { Tag } from './Tag';
import { inputEl } from '../InputComponent';

export class FuzzyKeyword extends React.Component<KeywordProps, {}> {
    public render() {
        //TODO: suggestions in dropdown
        
        const tags = this.props.selected.map(handle => {
            return <Tag handle={handle} />
        })

        return (
            <div>
                { inputEl(
                    this.props.input.validationMsg,
                    {
                        type: 'text',
                        placeholder: 'Tags', 
                        value: this.props.input.value,
                        onChange: this.onInput,
                        onBlur: this.onBlur
                    }
                ) }
                { tags }
            </div>
        )
    }

    private onInput = (event): void => {
        EntryActionCreator.inputKeyword(event.target.value);
    }

    private onBlur = (): void => {
        EntryActionCreator.blurKeyword();
    }
}
