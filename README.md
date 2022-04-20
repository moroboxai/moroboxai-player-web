# moroboxai-player-web

[![NPM version](https://img.shields.io/npm/v/moroboxai-player-web.svg)](https://www.npmjs.com/package/moroboxai-player-web)
![Node.js CI](https://github.com/moroboxai/moroboxai-player-web/workflows/Node.js%20CI/badge.svg)
[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moroboxai/moroboxai-player-web/blob/master/LICENSE)

Player for running MoroboxAI games on the web.

## Install

Using npm:

```bash
npm install moroboxai-player-web --save
```

Or:

```bash
git clone https://github.com/moroboxai/moroboxai-player-web.git
cd moroboxai-player-web
npm i
npm run build
```

## Usage

Create a `sample.html` file in the `moroboxai-player-web` folder:

```html
<html>
 <div id="player"></div> 
  
 <script type="text/javascript" src="./lib/umd/moroboxai-player-web.js"></script>
 <script type="text/javascript">
  // Initialize the player on our div
  const player = MoroboxAIPlayer.init({
   element: document.getElementById("player"),
   url: "https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pixijs-template/",
   splashart: "https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pixijs-template/assets/splashart.png",
   width: "256px",
   height: "256px"
  );

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
 <div id="player"></div> 
 
 <script type="module" src="./lib/es/index.js"></script>
 <script type="module">
  import * as MoroboxAIPlayer from "./lib/es/index.js";
  
  ...
 </script>
</html>
```

Open `sample.html` in your browser and check the console output.

## License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
