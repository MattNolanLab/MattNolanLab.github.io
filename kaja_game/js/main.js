import dayScene from"./dayScene.js";import titleScene from"./titleScene.js";import nightScene from"./nightScene.js";import endScene from"./endScene.js";window.onload=function(){let e=document.getElementById("gameCanvas1");const n={type:Phaser.AUTO,parent:"gameCanvas1",width:e.offsetWidth,backgroundColor:"#000001",physics:{"default":"arcade",arcade:{debug:!1}},scale:{mode:Phaser.Scale.RESIZE}},t=new Phaser.Game(n);t.scene.add("dayScene",dayScene),t.scene.add("titleScene",titleScene),t.scene.add("nightScene",nightScene),t.scene.add("endScene",endScene),t.scene.start("titleScene")};