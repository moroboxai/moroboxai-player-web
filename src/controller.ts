import { Inputs, IInputController } from "moroboxai-player-sdk";

// Controller for handling player inputs
export class InputController implements IInputController {
    private _inputs: Inputs = {
        up: false,
        down: false,
        left: false,
        right: false
    };

    private _keyDownListener: (ev: KeyboardEvent) => void;
    private _keyUpListener: (ev: KeyboardEvent) => void;

    constructor() {
        this._keyDownListener = (ev) => this._onKey(ev, true);
        this._keyUpListener = (ev) => this._onKey(ev, false);

        document.addEventListener('keydown', this._keyDownListener, false);
        document.addEventListener('keyup', this._keyUpListener, false);
    }

    private _onKey(ev: KeyboardEvent, value: boolean) {
        if (ev.code === 'ArrowDown' || ev.code === 'KeyS') {
            this._inputs.down = value;
        } else if (ev.code === 'ArrowUp' || ev.code === 'KeyW') {
            this._inputs.up = value;
        } else if (ev.code === 'ArrowLeft' || ev.code === 'KeyA') {
            this._inputs.left = value;
        } else if (ev.code === 'ArrowRight' || ev.code === 'KeyD') {
            this._inputs.right = value;
        } else {
            return;
        }

        ev.preventDefault();
    }

    remove() {
        document.removeEventListener('keydown', this._keyDownListener);
        document.removeEventListener('keyup', this._keyUpListener);
    }

    inputs(): Inputs {
        return this._inputs;
    }
}