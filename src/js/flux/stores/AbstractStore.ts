import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

export abstract class AbstractStore extends EventEmitter {
    public emitChange(): void {
        this.emit(CHANGE_EVENT);
    }

    public addChangeListener(cb: () => void) : void {
        this.on(CHANGE_EVENT, cb);
    }

    public removeChangeListener(cb: () => void) {
        this.removeListener(CHANGE_EVENT, cb);
    }
}