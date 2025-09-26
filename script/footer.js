/*
js_htmldom_events - w3schools
*/

/*
could do innerHTML maybe???
*/

const footer = document.createElement("footer");
const handshakeLink = document.createElement("a");
const handshakeImage = document.createElement("img");
const linkedInLink = document.createElement("a");
const linkedInImage = document.createElement("img");
const instaLink = document.createElement("a");
const instaImg = document.createElement("img");

handshakeLink.href = "#";
handshakeImage.src = "handshake.jpg";
handshakeImage.alt = "Handshake profile";
linkedInLink.href = "#";
linkedInImage.src = "linkedin.png";
linkedInImage.alt = "LinkedIn profile";
instaLink.href = "#";
instaImg.src = "instagram.jpg";
instaImg.alt = "Instagram profile";

handshakeLink.appendChild(handshakeImage);
linkedInLink.appendChild(linkedInImage);
instaLink.appendChild(instaImg);

footer.appendChild(handshakeLink);
footer.appendChild(linkedInLink);
footer.appendChild(instaLink);

document.body.appendChild(footer);