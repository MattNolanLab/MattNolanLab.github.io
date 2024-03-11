import dayScene from "./dayScene.js"
import titleScene from "./titleScene.js"
import nightScene from "./nightScene.js"
import endScene from "./endScene.js"


window.onload = function() {
    let parentElement = document.getElementById('gameCanvas1');

    const config = {
      type: Phaser.AUTO,
      parent: "gameCanvas1",
      width: parentElement.offsetWidth,
        height: parentElement.offsetheight * 0.75,
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
      scale: {
          mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: '100%',
          height: '100%'
      }
    }

  const game = new Phaser.Game(config);
  game.scene.add('dayScene', dayScene);
  game.scene.add('titleScene', titleScene);
  game.scene.add('nightScene', nightScene);
  game.scene.add('endScene', endScene);
  game.scene.start('titleScene');
}