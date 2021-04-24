"use strict";

let i: number = 0;
let txt: string = "Mith's Website";
let speed: number = 200;
let isFinished: boolean = true;

function typingMain() {
  isFinished = false;

  if (i < txt.length) {
    document.getElementById("mainheader").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typingMain, speed);
  }

  isFinished = true;
}

let captions404 = ['No page here!', 'Where are we again?', "I can't find a page!", "Better luck next time."];
let randomElement = captions404[Math.floor(Math.random() * captions404.length)];
let txt404 = '404, ' + randomElement;
let speed404 = 1000;
let o = 0;

function typing404() {
  setInterval(function () {
    if (o < txt404.length) {
      document.getElementById("404thing").innerHTML += txt404.charAt(o);
      o++;
      setTimeout(typing404, speed404);
    }
  }, 0);
}