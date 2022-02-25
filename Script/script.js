var buttonreg = document.getElementById("main_content-button-register");
buttonreg.addEventListener("mouseover", buttonOver);
buttonreg.addEventListener("mouseleave", buttonLeave);

var buttonSocial = document.getElementById("social_media-Facebook-button");
buttonSocial.addEventListener("mouseover", buttonSocialOver);
buttonSocial.addEventListener("mouseleave", buttonSocialLeave);

var buttonSocial = document.getElementById("social_media-Twitter-button");
buttonSocial.addEventListener("mouseover", buttonSocialOver);
buttonSocial.addEventListener("mouseleave", buttonSocialLeave);

var buttonSocial = document.getElementById("social_media-Instagram-button");
buttonSocial.addEventListener("mouseover", buttonSocialOver);
buttonSocial.addEventListener("mouseleave", buttonSocialLeave);

function buttonOver(){
    buttonreg.style.backgroundColor = "rgb(227,74,255)";
    buttonreg.style.color = "white";
}

function buttonLeave(){
    buttonreg.style.backgroundColor = "white";
    buttonreg.style.color = "rgb(142, 90, 201)";
}

function buttonSocialOver(){
    this.style.borderColor = "rgb(227,74,255)";
    this.querySelector("picture img").style.filter = "invert(39%) sepia(38%) saturate(3377%) hue-rotate(263deg) brightness(101%) contrast(102%)";
}

function buttonSocialLeave(){
    this.style.borderColor = "white";
    this.querySelector("picture img").style.filter = "";
}