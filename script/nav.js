/*
w3schools - https://www.w3schools.com/jsref/met_node_appendchild.asp
*/

const nav = document.createElement("nav");
const mainLink = document.createElement("a");
const resumeLink = document.createElement("a");
const portfolioLink = document.createElement("a");

mainLink.href = "index.html";
mainLink.textContent = "Main";
resumeLink.href = "resume.html";
resumeLink.textContent = "Resume";
portfolioLink.href = "portfolio.html";
portfolioLink.textContent = "Portfolio";

nav.appendChild(mainLink);
nav.appendChild(resumeLink);
nav.appendChild(portfolioLink);

document.body.appendChild(nav);