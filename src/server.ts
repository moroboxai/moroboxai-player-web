import JSZip from "jszip";
import * as MoroboxAIGameSDK from "moroboxai-game-sdk";
import { getUrl } from "moroboxai-player-sdk/src/server";
export { FetchFileServer } from "moroboxai-player-sdk/src/server";

export abstract class Server implements MoroboxAIGameSDK.IServer {
    ready(callback: () => void): void {
        throw new Error("Method not implemented.");
    }
    close(callback?: (err: any) => void): void {
        throw new Error("Method not implemented.");
    }
}

// Serve files from remote zip
export class ZipServer extends Server implements MoroboxAIGameSDK.IFileServer {
    private _task?: Promise<void>;
    private _zip?: JSZip = undefined;
    private _readyCallback?: () => void;
    private _isClosed: boolean = false;

    constructor(baseUrl: string) {
        super();
        this._task = getUrl(baseUrl)
            .then(JSZip.loadAsync)
            .then((zip) => {
                if (this._isClosed) {
                    return;
                }

                this._zip = zip;
                this._task = undefined;
                this._notifyReady();
            });
    }

    href(path: string): string {
        return path;
    }

    get(path: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (this._zip === undefined) {
                reject(undefined);
                return;
            }

            const file = this._zip.file(path);
            if (!file) {
                reject(undefined);
                return;
            }

            file.async("string")
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }

    ready(callback: () => void): void {
        this._readyCallback = callback;
        if (this._task === undefined) {
            this._notifyReady();
        }
    }

    private _notifyReady(): void {
        if (this._readyCallback !== undefined) {
            this._readyCallback();
        }
    }

    close(callback?: (err: any) => void): void {
        this._isClosed = true;
        this._task = undefined;
        this._zip = undefined;

        if (callback !== undefined) {
            callback(null);
        }
    }
}
