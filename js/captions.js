let socialmediacaptions = [
  'Wow! I have access to the internet!',
  'I have social media. Cool.',
  'The internet.',
  'Ran out of ideas here.',
];
// captions array ya di da
let randomSocial =
  socialmediacaptions[
    Math.floor(Math.random() * socialmediacaptions.length)
  ]; // assign random socialmediacaption
let socialPage = document.getElementById('socialcaption'); // check which page we got

if (typeof socialPage != 'undefined' && socialPage != null) {
  // if we on the social page, fill caption
  document.getElementById('socialcaption').innerHTML = randomSocial;
} else {
}

let aboutcaptions = [
  "Yeah... it's me.",
  'Yours truly.',
  'True gamer here.',
  'Yeah.',
];
// about captions
let randomAbout =
  aboutcaptions[Math.floor(Math.random() * aboutcaptions.length)]; // random about caption
let aboutPage = document.getElementById('about'); // check if we on about page
if (typeof aboutPage != 'undefined' && aboutPage != null) {
  document.getElementById('about').innerHTML = randomAbout; // t y p e
} else {
}

let footer_quote = [
  '"Work, work and when you collapse, work harder."',
  '"Wake up and live your life before it passes over you."',
  '"People say the light is at the end of the tunnel - I say to light your own torch."',
  '"If all else fails, StackOverflow is your saviour"',
]; // footer quote
let randomfooterquote =
  footer_quote[Math.floor(Math.random() * footer_quote.length)]; // random footerquote
document.getElementById('footerquote').innerHTML = randomfooterquote; // dont need to check as we check the other two
