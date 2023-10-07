import * as MoroboxAIPlayerSDK from "moroboxai-player-sdk";
import { InputController } from "./controller";
import { FetchFileServer, ZipServer } from "./server";

/**
 * Version of the game SDK.
 */
export { VERSION as GAME_SDK_VERSION } from "moroboxai-game-sdk";

/**
 * Version of the player SDK.
 */
export { VERSION as PLAYER_SDK_VERSION } from "moroboxai-player-sdk";

/**
 * Version of the player.
 */
export const VERSION: string = "__VERSION__";

const sdkConfig: MoroboxAIPlayerSDK.ISDKConfig = {
    inputController: () => new InputController(),
    fileServer: (baseUrl: string) => new FetchFileServer(baseUrl),
    zipServer: (baseUrl: string) => new ZipServer(baseUrl)
};

/**
 * Get default configured player options.
 * @returns {PlayerOptions} Default options
 */
export function defaultOptions(): MoroboxAIPlayerSDK.PlayerOptions {
    return MoroboxAIPlayerSDK.defaultOptions();
}

export function init():
    | MoroboxAIPlayerSDK.IPlayer
    | MoroboxAIPlayerSDK.IPlayer[];
export function init(
    options: MoroboxAIPlayerSDK.PlayerOptions
): MoroboxAIPlayerSDK.IPlayer | MoroboxAIPlayerSDK.IPlayer[];
export function init(element: Element): MoroboxAIPlayerSDK.IPlayer;
export function init(
    element: Element[] | HTMLCollectionOf<Element>
): MoroboxAIPlayerSDK.IPlayer[];
export function init(
    element: Element,
    options: MoroboxAIPlayerSDK.PlayerOptions
): MoroboxAIPlayerSDK.IPlayer;
export function init(
    element: Element[] | HTMLCollectionOf<Element>,
    options: MoroboxAIPlayerSDK.PlayerOptions
): MoroboxAIPlayerSDK.IPlayer[];
export function init(
    element?:
        | MoroboxAIPlayerSDK.PlayerOptions
        | Element
        | Element[]
        | HTMLCollectionOf<Element>,
    options?: MoroboxAIPlayerSDK.PlayerOptions
): MoroboxAIPlayerSDK.IPlayer | MoroboxAIPlayerSDK.IPlayer[];

/**
 * Initialize player on one or multiple HTML elements.
 * @param {HTMLElement} element Element to wrap
 * @param {PlayerOptions} options Options for initializing the player
 */
export function init(
    element?:
        | MoroboxAIPlayerSDK.PlayerOptions
        | Element
        | Element[]
        | HTMLCollectionOf<Element>,
    options?: MoroboxAIPlayerSDK.PlayerOptions
): MoroboxAIPlayerSDK.IPlayer | MoroboxAIPlayerSDK.IPlayer[] {
    return MoroboxAIPlayerSDK.init(sdkConfig, element, options);
}
