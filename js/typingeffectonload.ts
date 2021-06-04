'use strict';

let i: number = 0;
let txt: string = "Mith's Website";
let speed: number = 200;

// assign variables -> speed of typing effect, string to be typed and just i.

function typingMain() {
  if (i < txt.length) {
    document.getElementById('mainheader').innerHTML += txt.charAt(i);
    // find element to apply effect too
    i++;
    // do t y p i n g
    setTimeout(typingMain, speed);
    // set speed
  }
}

let captions404 = [
  'No page here!',
  'Where are we again?',
  "I can't find a page!",
  'Better luck next time.',
];
// create array of possible 404 captions
let randomElement =
  captions404[Math.floor(Math.random() * captions404.length)];
// get random 404 caption
let txt404 = '404, ' + randomElement;
// add 404 part to message
let speed404 = 1000;
// speeeeeeeeeeeeeeeeeeeeed
let o = 0;
// i's cousin

function typing404() {
  // exact same thing as before
  setInterval(function () {
    if (o < txt404.length) {
      document.getElementById('404thing').innerHTML +=
        txt404.charAt(o);
      o++;
      setTimeout(typing404, speed404);
    }
  }, 0);
}
