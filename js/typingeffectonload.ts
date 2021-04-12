"use strict";

var i: number = 0;
var txt: string = "Mith's Website";
var speed: number = 200;
var isFinished: boolean = true;

function typingMain() {
  isFinished = false;

  if (i < txt.length) {
    document.getElementById("mainheader").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typingMain, speed);
  }

  isFinished = true;
}

var captions404 = ['No page here!', 'Where are we again?', "I can't find a page!", "Better luck next time."];
var randomElement = captions404[Math.floor(Math.random() * captions404.length)];
var txt404 = '404, ' + randomElement;
var speed404 = 1000;
var o = 0;

function typing404() {
  setInterval(function () {
    if (o < txt404.length) {
      document.getElementById("404thing").innerHTML += txt404.charAt(o);
      o++;
      setTimeout(typing404, speed404);
    }
  }, 0);
}