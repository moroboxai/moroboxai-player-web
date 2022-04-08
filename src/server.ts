import JSZip from 'jszip';
import * as MoroboxAIGameSDK from 'moroboxai-game-sdk';

function getUrl(url: string): Promise<string> {
    return fetch(url).then(response => {
        if (!response.ok) {
            return Promise.reject(response.status);
        }

        return response.blob();
    }).then(blob => {
        return blob.text();
    });
}

export class Server implements MoroboxAIGameSDK.IServer {
    ready(callback: () => void): void {
        throw new Error('Method not implemented.');
    }
    close(callback?: (err: any) => void): void {
        throw new Error('Method not implemented.');
    }
}

export class FileServer extends Server implements MoroboxAIGameSDK.IFileServer {
    private _baseUrl: string;

    constructor(baseUrl: string) {
        super();
        this._baseUrl = baseUrl;
    }

    href(path: string): string {
        return `${this._baseUrl}/${path}`;
    }
    
    get(path: string): Promise<string> {
        return getUrl(this.href(path));
    }

    ready(callback: () => void): void {
        if (callback) {
            callback();
        }
    }

    close(callback?: (err: any) => void): void {
        if (callback) {
            callback(null);
        }
    }
}

export class ZipServer extends Server implements MoroboxAIGameSDK.IFileServer {
    private _task?: Promise<void>;
    private _zip?: JSZip = undefined;
    private _readyCallback?: () => void;
    private _isClosed: boolean = false;

    constructor(baseUrl: string) {
        super();
        this._task = getUrl(baseUrl).then(JSZip.loadAsync).then(zip => {
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
            
            file.async('string').then(data => {
                resolve(data);
            }).catch(reject);
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
