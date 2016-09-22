import { ValidatableInput } from '../validation/ValidatableInput';

export interface KeywordProps {
    input: ValidatableInput,
    suggestions: string[],
    selected: string[]
}
