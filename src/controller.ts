import * as MoroboxAIGameSDK from "moroboxai-game-sdk";
import * as MoroboxAIPlayerSDK from "moroboxai-player-sdk";

// Controller for handling player inputs
export class InputController implements MoroboxAIPlayerSDK.IInputController {
    private _inputs: MoroboxAIGameSDK.IInputs = {
        left: false,
        right: false,
        up: false,
        down: false
    };

    private _keyDownListener: (ev: KeyboardEvent) => void;
    private _keyUpListener: (ev: KeyboardEvent) => void;

    constructor() {
        this._keyDownListener = (ev) => this._onKey(ev, true);
        this._keyUpListener = (ev) => this._onKey(ev, false);

        document.addEventListener("keydown", this._keyDownListener, false);
        document.addEventListener("keyup", this._keyUpListener, false);
    }

    private _onKey(ev: KeyboardEvent, value: boolean) {
        if (ev.code === "ArrowDown" || ev.code === "KeyS") {
            if (ev.code === "ArrowDown") {
                ev.preventDefault();
            }
            this._inputs.down = value;
        } else if (ev.code === "ArrowUp" || ev.code === "KeyW") {
            if (ev.code === "ArrowUp") {
                ev.preventDefault();
            }
            this._inputs.up = value;
        } else if (ev.code === "ArrowLeft" || ev.code === "KeyA") {
            if (ev.code === "ArrowLeft") {
                ev.preventDefault();
            }
            this._inputs.left = value;
        } else if (ev.code === "ArrowRight" || ev.code === "KeyD") {
            if (ev.code === "ArrowRight") {
                ev.preventDefault();
            }
            this._inputs.right = value;
        }
    }

    remove() {
        document.removeEventListener("keydown", this._keyDownListener);
        document.removeEventListener("keyup", this._keyUpListener);
    }

    get inputs(): MoroboxAIGameSDK.IInputs {
        return this._inputs;
    }
}
