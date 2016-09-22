import { ValidatableInput } from './validation/ValidatableInput';
import { KeywordProps } from './keywords/KeywordProps';

export interface FormState {
    alert: boolean,
    title: ValidatableInput,
    date: ValidatableInput,
    content: ValidatableInput,
    keywords: KeywordProps
}