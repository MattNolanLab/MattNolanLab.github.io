import dayScene from"./dayScene.js";import titleScene from"./titleScene.js";import nightScene from"./nightScene.js";import endScene from"./endScene.js";const config={type:Phaser.AUTO,parent:"gameCanvas1",backgroundColor:"#000001",physics:{"default":"arcade",arcade:{debug:!1}},scale:{mode:Phaser.Scale.FIT}},game=new Phaser.Game(config);game.scene.add("dayScene",dayScene),game.scene.add("titleScene",titleScene),game.scene.add("nightScene",nightScene),game.scene.add("endScene",endScene),game.scene.start("titleScene");