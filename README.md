# moroboxai-player-web

[![NPM version](https://img.shields.io/npm/v/moroboxai-player-web.svg)](https://www.npmjs.com/package/moroboxai-player-web)
![Node.js CI](https://github.com/moroboxai/moroboxai-player-web/workflows/Node.js%20CI/badge.svg)
[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/moroboxai/moroboxai-player-web/blob/master/LICENSE)
[![Code Quality: Javascript](https://img.shields.io/lgtm/grade/javascript/g/moroboxai/moroboxai-player-sdk.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/moroboxai/moroboxai-player-web/context:javascript)
[![Total Alerts](https://img.shields.io/lgtm/alerts/g/moroboxai/moroboxai-player-sdk.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/moroboxai/moroboxai-player-web/alerts)

Embeddable player for running [MoroboxAI](https://github.com/moroboxai) games on the web.

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
   url: "https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pong/",
   splashart: "https://raw.githubusercontent.com/moroboxai/moroboxai-games/master/games/pong/assets/splashart.png",
   width: 256,
   height: 256
  });

  // Will be called when the game is ready
  player.onReady = () => console.log("game is loaded and ready");

  // Optionally start the game
  player.play();
 </script>
</html>
```

Open `sample.html` in your browser and check the console output.

## Arguments

| Name   |      Type      |  Default |  Description |
|:----------|:-------------|:------|:------|
| element | Element || DOM element to attach the player to |
| url | string || URL of the game |
| splashart | string || URL of the placeholder image displayed before the game is loaded |
| width | number || Width of the `div` element |
| height | number || Height of the `div` element |
| resizable | boolean | true | If the game can resize the player |
| autoPlay | boolean | false | Auto play the game after the player is initialized |
| speed | number | 1 | Speed of the game |
| onReady | func | noop | **Signature: function() => void** <br/> Function called when the game is loaded and ready |

## License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
