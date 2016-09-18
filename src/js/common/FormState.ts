import { ValidatableInput } from './validation/ValidatableInput';

export interface FormState {
    alert: boolean,
    title: ValidatableInput,
    date: ValidatableInput,
    content: ValidatableInput,
    keywords: ValidatableInput
}