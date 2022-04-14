# moroboxai-player-web

[![NPM version](https://img.shields.io/npm/v/moroboxai-game-sdk.svg)](https://www.npmjs.com/package/moroboxai-game-sdk)
![Node.js CI](https://github.com/moroboxai/moroboxai-game-sdk/workflows/Node.js%20CI/badge.svg)
[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moroboxai/moroboxai-player-web/blob/master/LICENSE)

Player for running MoroboxAI games on the web.

## Install

Using npm:

```bash
npm i --save-dev moroboxai-player-web
```

Or:

```bash
git clone https://github.com/moroboxai/moroboxai-player-web.git
cd moroboxai-player-web
npm i
npm run build
```

## Usage

Create an `index.html` file in the `moroboxai-player-web` folder:

```html
<html>
 <div id="player" style="width: 256px; height: 256px;"></div> 
  
 <script type="text/javascript" src="./lib/umd/moroboxai-player-web.js"></script>
 <script type="text/javascript">
  // Initialize the player on our div
  const player = MoroboxAIPlayer.init(document.getElementById("player"));

  // Will be called when the game is ready
  player.onReady = () => console.log("game is loaded and ready");

  // Optionally start the game
  player.play();
 </script>
</html>
```

You can also import the lib as an ECMAScript module:

```html
<html>
 <div id="player" style="width: 256px; height: 256px;"></div> 
 
 <script type="module" src="./lib/es/index.js"></script>
 <script type="module">
  import * as MoroboxAIPlayer from "./lib/es/index.js";
  
  ...
 </script>
</html>
```

Open `index.html` in your browser and check the console output.

## License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
