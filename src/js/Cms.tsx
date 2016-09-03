import { EntryActionCreator } from './flux/actions/EntryActionCreator';
import { EntryForm } from './react/components/EntryForm';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const simplemde = new SimpleMDE();

simplemde.codemirror.on('blur', () => {
    const value = simplemde['options'].previewRender(simplemde.value());
    EntryActionCreator.storeContent(value);        
});

const el = document.getElementById('mount`');
ReactDOM.render(<EntryForm />, el);
