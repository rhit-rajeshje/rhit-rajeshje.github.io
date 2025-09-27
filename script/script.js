/*
HELP CITATION: 
Dr.Hays helped with setting up the Navigation and Footer

In order to help me understand more about what .appendChild does outside of the reading I used this link from w3schools - https://www.w3schools.com/jsref/met_node_appendchild.asp
*/

window.addEventListener("load", (e) => {
    nav();
    expandMenu();
    footer();
});

function nav(){
    const nav = document.getElementById("#nav");
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

}

/*
For my special JavaScript element, I decided to make a FAQ or Frequently Asked Question Section on my Portfolio Page because the FAQ section design allowed me to include a section at the bottom of my portfolio to add more information and present my takeaways from the projects without it being fully displayed to the user as it may be too much information on a single page for them. In addition, with my code, if there is another question that needs to be added, the javascript will adjust to that according without any code changing through the ClassName list. 

I drew inspiration mainly from the FAQ Page for the Nintedo Switch- https://www.nintendo.com/us/gaming-systems/switch/faq/?srsltid=AfmBOorBNieJ3c_Ny5Jk0SFyxBx03AJsg-3cgr1Tt5diNbmwilEDp-J2#section-nintendo-switch as I liked how the user would click on the text for the move to show and could click again for it to disapper as well as the text would change when the user hovered over the question.
*/

function expandMenu(){
    const question = document.getElementsByClassName('question');
    const answer = document.getElementsByClassName('answer');
    if(question && answer){
        function changeVisability(index){
            if(answer[index].style.display == "none" || answer[index].style.display == ""){
                answer[index].style.display = "block";
            }
            else{
                answer[index].style.display = "none";
            }
        }

        /*
        Dr. Hays taught us this format for addEventListener in class
        */
        for(let i=0;i<question.length;i++){
            question[i].addEventListener("click", (e) =>{
                changeVisability(i);
            });
        }
    }
}

function footer(){
    const footer = document.getElementById("#footer");
    const handshakeLink = document.createElement("a");
    const handshakeImage = document.createElement("img");
    const linkedInLink = document.createElement("a");
    const linkedInImage = document.createElement("img");
    const instaLink = document.createElement("a");
    const instaImg = document.createElement("img");

    handshakeLink.href = "https://rose-hulman.joinhandshake.com/profiles/r2syam";
    handshakeImage.src = "handshake.jpg";
    handshakeImage.alt = "Handshake profile";
    linkedInLink.href = "https://www.linkedin.com/in/jennifer-rajesh-aa7370325/";
    linkedInImage.src = "linkedin.png";
    linkedInImage.alt = "LinkedIn profile";
    instaLink.href = "https://www.instagram.com/jenniraj06/";
    instaImg.src = "instagram.jpg";
    instaImg.alt = "Instagram profile";

    handshakeLink.appendChild(handshakeImage);
    linkedInLink.appendChild(linkedInImage);
    instaLink.appendChild(instaImg);

    footer.appendChild(handshakeLink);
    footer.appendChild(linkedInLink);
    footer.appendChild(instaLink);
}

