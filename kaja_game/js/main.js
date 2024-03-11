import dayScene from "./dayScene.js"
import titleScene from "./titleScene.js"
import nightScene from "./nightScene.js"
import endScene from "./endScene.js"

let parentElement = document.getElementById('gameCanvas1');

const config = {
  type: Phaser.AUTO,
  parent: "gameCanvas1",
  width: parentElement.offsetWidth,
  height: parentElement.offsetHeight,
  backgroundColor: '#000001',
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  },
  // scale: {
  //   mode: Phaser.Scale.NO_SCALE,
  // }
}

const game = new Phaser.Game(config);
game.scene.add('dayScene', dayScene);
game.scene.add('titleScene', titleScene);
game.scene.add('nightScene', nightScene);
game.scene.add('endScene', endScene);
game.scene.start('titleScene');