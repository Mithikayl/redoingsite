let socialmediacaptions = ['Wow! I have access to the internet!', 'I have social media. Cool.', 'The internet.', 'Ran out of ideas here.'];
let randomSocial = socialmediacaptions[Math.floor(Math.random() * socialmediacaptions.length)];
let socialPage = document.getElementById("socialcaption");

if(typeof(socialPage) != 'undefined' && socialPage != null){
    document.getElementById("socialcaption").innerHTML = randomSocial;
} else{}

let aboutcaptions = ["Yeah... it's me.", 'Yours truly.', 'True gamer here.', 'Yeah.'];
let randomAbout = aboutcaptions[Math.floor(Math.random() * aboutcaptions.length)];
let aboutPage = document.getElementById("about");
if(typeof(aboutPage) != 'undefined' && aboutPage != null){
    document.getElementById("about").innerHTML = randomAbout;
} else{}

let footer_quote = ['"Work, work and when you collapse, work harder."','"Wake up and live your life before it passes over you."','"People say the light is at the end of the tunnel - I say to light your own torch."','"If all else fails, StackOverflow is your saviour"'];
let randomfooterquote = footer_quote[Math.floor(Math.random() * footer_quote.length)];
document.getElementById("footerquote").innerHTML = randomfooterquote;