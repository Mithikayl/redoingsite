var socialmediacaptions = ['Wow! I have access to the internet!', 'I have social media. Cool.', 'The internet.', 'Ran out of ideas here.'];
const randomSocial = socialmediacaptions[Math.floor(Math.random() * socialmediacaptions.length)];

document.getElementById("socialcaption").innerHTML = randomSocial;


var aboutcaptions = ["Yeah... it's me.", 'Yours truly.', 'True gamer here.', 'Yeah.'];
const randomAbout = aboutcaptions[Math.floor(Math.random() * aboutcaptions.length)];

document.getElementById("about").innerHTML = randomAbout;