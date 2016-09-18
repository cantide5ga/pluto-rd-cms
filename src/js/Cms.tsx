import { EntryActionCreator } from './flux/actions/EntryActionCreator';
import { EntryForm } from './react/components/entry/EntryForm';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const el = document.getElementById('mount');
ReactDOM.render(<EntryForm />, el);

const simplemde = new SimpleMDE({
    status: false
});

simplemde.codemirror.on('blur', () => {
    const value = simplemde['options'].previewRender(simplemde.value());
    EntryActionCreator.storeContent(value);        
});
