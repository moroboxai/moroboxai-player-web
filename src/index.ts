import * as MoroboxAIGameSDK from 'moroboxai-game-sdk';
import * as MoroboxAIPlayerSDK from 'moroboxai-player-sdk';
import { FileServer, ZipServer } from './server';

export { IMoroboxAIPlayer } from 'moroboxai-player-sdk';

/**
 * Version of the player.
 */
export const VERSION: string = '0.1.0-alpha.1';

const sdkConfig: MoroboxAIPlayerSDK.ISDKConfig = {
    fileServer: (baseUrl: string) => new FileServer(baseUrl),
    zipServer: (baseUrl: string) => new ZipServer(baseUrl)
}

/**
 * Get default configured player options.
 * @returns {IPlayerOptions} Default options
 */
export function defaultOptions(): MoroboxAIPlayerSDK.IPlayerOptions {
    return MoroboxAIPlayerSDK.defaultOptions();
}

export function init() : void;
export function init(options: MoroboxAIPlayerSDK.IPlayerOptions) : void;
export function init(element: Element) : MoroboxAIPlayerSDK.IMoroboxAIPlayer;
export function init(element: Element[] | HTMLCollectionOf<Element>) : MoroboxAIPlayerSDK.IMoroboxAIPlayer[];
export function init(element: Element, options: MoroboxAIPlayerSDK.IPlayerOptions) : MoroboxAIPlayerSDK.IMoroboxAIPlayer;
export function init(element: Element[] | HTMLCollectionOf<Element>, options: MoroboxAIPlayerSDK.IPlayerOptions) : MoroboxAIPlayerSDK.IMoroboxAIPlayer[];
export function init(element?: MoroboxAIPlayerSDK.IPlayerOptions | Element | Element[] | HTMLCollectionOf<Element>, options?: MoroboxAIPlayerSDK.IPlayerOptions) : MoroboxAIPlayerSDK.IMoroboxAIPlayer | MoroboxAIPlayerSDK.IMoroboxAIPlayer[];

/**
 * Initialize player on one or multiple HTML elements.
 * @param {HTMLElement} element Element to wrap
 * @param {IPlayerOptions} options Options for initializing the player
 */
export function init(element?: MoroboxAIPlayerSDK.IPlayerOptions | Element | Element[] | HTMLCollectionOf<Element>, options?: MoroboxAIPlayerSDK.IPlayerOptions) : MoroboxAIPlayerSDK.IMoroboxAIPlayer | MoroboxAIPlayerSDK.IMoroboxAIPlayer[] {
    return MoroboxAIPlayerSDK.init(sdkConfig, element, options);
}