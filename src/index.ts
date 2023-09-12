import * as MoroboxAIPlayerSDK from "moroboxai-player-sdk";
import { InputController } from "./controller";
import { FileServer, ZipServer } from "./server";

export { IPlayer } from "moroboxai-player-sdk";

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
export const VERSION: string = "0.1.0-alpha.22";

const sdkConfig: MoroboxAIPlayerSDK.ISDKConfig = {
    inputController: () => new InputController(),
    fileServer: (baseUrl: string) => new FileServer(baseUrl),
    zipServer: (baseUrl: string) => new ZipServer(baseUrl)
};

/**
 * Get default configured player options.
 * @returns {IPlayerOptions} Default options
 */
export function defaultOptions(): MoroboxAIPlayerSDK.IPlayerOptions {
    return MoroboxAIPlayerSDK.defaultOptions();
}

export function init():
    | MoroboxAIPlayerSDK.IPlayer
    | MoroboxAIPlayerSDK.IPlayer[];
export function init(
    options: MoroboxAIPlayerSDK.IPlayerOptions
): MoroboxAIPlayerSDK.IPlayer | MoroboxAIPlayerSDK.IPlayer[];
export function init(element: Element): MoroboxAIPlayerSDK.IPlayer;
export function init(
    element: Element[] | HTMLCollectionOf<Element>
): MoroboxAIPlayerSDK.IPlayer[];
export function init(
    element: Element,
    options: MoroboxAIPlayerSDK.IPlayerOptions
): MoroboxAIPlayerSDK.IPlayer;
export function init(
    element: Element[] | HTMLCollectionOf<Element>,
    options: MoroboxAIPlayerSDK.IPlayerOptions
): MoroboxAIPlayerSDK.IPlayer[];
export function init(
    element?:
        | MoroboxAIPlayerSDK.IPlayerOptions
        | Element
        | Element[]
        | HTMLCollectionOf<Element>,
    options?: MoroboxAIPlayerSDK.IPlayerOptions
): MoroboxAIPlayerSDK.IPlayer | MoroboxAIPlayerSDK.IPlayer[];

/**
 * Initialize player on one or multiple HTML elements.
 * @param {HTMLElement} element Element to wrap
 * @param {IPlayerOptions} options Options for initializing the player
 */
export function init(
    element?:
        | MoroboxAIPlayerSDK.IPlayerOptions
        | Element
        | Element[]
        | HTMLCollectionOf<Element>,
    options?: MoroboxAIPlayerSDK.IPlayerOptions
): MoroboxAIPlayerSDK.IPlayer | MoroboxAIPlayerSDK.IPlayer[] {
    return MoroboxAIPlayerSDK.init(sdkConfig, element, options);
}
