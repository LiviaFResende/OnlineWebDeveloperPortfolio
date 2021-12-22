let buttonPrevious = document.querySelector("#bPrevious");
let buttonNext = document.querySelector("#bNext");
let instructions = document.querySelector(".instructions");
let count = 0;

// SELECTING HTML ELEMENTS - FOR STRUCTURE WIREFRAME
let header = document.querySelector("header");
let main = document.querySelector("main");
let aside = document.querySelector("aside");
let section = document.querySelector("section");
let footer = document.querySelector("footer");

// turning off display for everything, to start building it

header.style.display = "none";
main.style.display = "none";
aside.style.display = "none";
section.style.display = "none";
footer.style.display = "none";

//SELECT EACH ELEMENT INSIDE THE WIREFRAME
let headerClass = document.querySelector(".headerClass");
let title = document.querySelector(".title");
let nav = document.querySelector("nav");
let mainClass = document.querySelector(".mainClass");
let main1 = document.querySelector(".main1");
let asideClass = document.querySelector(".asideClass");
let aside1 = document.querySelector(".aside1");
let sectionClass = document.querySelector(".sectionClass");
let section1 = document.querySelector(".section1");
let footerClass = document.querySelector(".footerClass");
let footer1 = document.querySelector(".footer1");

title.style.display = "none";
nav.style.display = "none";
main1.style.display = "none";
aside1.style.display = "none";
section1.style.display = "none";
footer1.style.display = "none";

// to define the last page:
let container = document.querySelector(".container");

// dropdown menu
document.querySelector(".navmobile").style.display = "none";

// count 1 or -1, when press previous or next
function bPrevious() {
  count--;
  text();
}
function bNext() {
  count++;
  text();
}

// FUNCTION TURN ON AND OFF ELEMENTS
function text() {
  switch (count) {
    case 0:
      instructions.innerHTML = "HOW TO BUILD AN ONLINE WEB DEVELOPER PORTFOLIO";
      break;

    case 1:
      instructions.innerHTML =
        " START POSITIONING THE HTML SEMANTIC ELEMENTS USING FLOAT, FLEXBOX OR GRID";
      header.style.display = "none";
      break;

    //HEADER
    case 2:
      instructions.innerHTML = " 1 - ADD THE ELEMENT HEADER";
      header.style.display = "block";
      main.style.display = "none";
      main1.style.display = "none";
      aside.style.display = "none";
      section.style.display = "none";
      footer.style.display = "none";
      break;

    // MAIN
    case 3:
      instructions.innerHTML = " 2 - ADD THE ELEMENT MAIN";
      header.style.display = "block";
      main.style.display = "block";
      aside.style.display = "none";
      section.style.display = "none";
      footer.style.display = "none";
      break;

    // ASIDE
    case 4:
      instructions.innerHTML = " 3 - AND ADD THE COLUMN ASIDE";
      header.style.display = "block";
      main.style.display = "block";
      aside.style.display = "block";
      section.style.display = "none";
      footer.style.display = "none";
      break;

    //  UPDATES SECTION
    case 5:
      instructions.innerHTML =
        " 4 - YOU CAN ALSO ADD A SECTION FOR UPDATES TOO";
      header.style.display = "block";
      main.style.display = "block";
      aside.style.display = "block";
      section.style.display = "block";
      footer.style.display = "none";
      break;

    //FOOTER
    case 6:
      instructions.innerHTML = " 5 - AND AT THE END YOU ADD THE FOOTER";
      header.style.display = "block";
      main.style.display = "block";
      aside.style.display = "block";
      section.style.display = "block";
      footer.style.display = "block";
      break;

    // BREAK
    case 7:
      instructions.innerHTML =
        " AFTER THE WIREFRAME YOU CAN START THE DESIGN AND CONTENT OF THE WEBSITE";
      header.style.display = "none";
      main.style.display = "none";
      aside.style.display = "none";
      section.style.display = "none";
      footer.style.display = "none";
      break;

    // ___________________________________________ //
    // ADDING ELEMENTS INSIDE THE HTML ELEMENTS   //
    // ___________________________________________ //

    // HEADER - ADD TITLE AND MENU WITH STYLE
    case 8:
      instructions.innerHTML =
        "Add the title and the navigation menu inside the tag header";
      header.style.display = "block";
      main.style.display = "none";
      aside.style.display = "none";
      section.style.display = "none";
      footer.style.display = "none";
      // plus plus
      title.style.display = "block";
      nav.style.display = "flex";
      headerClass.style.display = "none";
      main1.style.display = "none";
      aside1.style.display = "none";
      section1.style.display = "none";
      footer1.style.display = "none";
      break;

    // MAIN - ADD MAIN 1 CONTENT
    case 9:
      instructions.innerHTML =
        "For the main part of the website, add a key image or phrase that shows the most important message from your brand";
      header.style.display = "block";
      main.style.display = "block";
      aside.style.display = "none";
      section.style.display = "none";
      footer.style.display = "none";
      // plus plus
      title.style.display = "block";
      nav.style.display = "flex";
      headerClass.style.display = "none";
      main1.style.display = "block";
      mainClass.style.display = "none";
      aside1.style.display = "none";
      section1.style.display = "none";
      footer1.style.display = "none";
      break;

    // ASIDE ONLY ADD EMPTY
    case 10:
      instructions.innerHTML =
        "On the side, you can insert any advertisement or even create a side menu if you prefer";
      header.style.display = "block";
      main.style.display = "block";
      aside.style.display = "block";
      section.style.display = "none";
      footer.style.display = "none";
      // plus plus
      title.style.display = "display";
      nav.style.display = "display";
      headerClass.style.display = "none";
      main1.style.display = "flex";
      mainClass.style.display = "none";
      aside1.style.display = "block";
      asideClass.style.display = "none";
      section1.style.display = "none";
      footer1.style.display = "none";
      break;

    // SECTION = ADD THE ARTICLES
    case 11:
      instructions.innerHTML =
        "Add Articles and updates about your other websites and social media profiles";
      header.style.display = "block";
      main.style.display = "block";
      aside.style.display = "block";
      section.style.display = "block";
      footer.style.display = "none";
      // plus plus
      title.style.display = "display";
      nav.style.display = "display";
      headerClass.style.display = "none";
      main1.style.display = "flex";
      mainClass.style.display = "none";
      aside1.style.display = "block";
      asideClass.style.display = "none";
      section1.style.display = "flex";
      sectionClass.style.display = "none";
      footer1.style.display = "none";
      break;

    // FOOTER - ADD THE SOCIAL MEDIA LINKS AND MESSAGE
    case 12:
      instructions.innerHTML =
        "At the very end, add the links for your social media and you can also type the rights that you may have.";
      header.style.display = "block";
      main.style.display = "block";
      aside.style.display = "block";
      section.style.display = "block";
      footer.style.display = "block";
      // plus plus
      title.style.display = "display";
      nav.style.display = "display";
      headerClass.style.display = "none";
      main1.style.display = "flex";
      mainClass.style.display = "none";
      aside1.style.display = "block";
      asideClass.style.display = "none";
      section1.style.display = "flex";
      sectionClass.style.display = "none";
      footer1.style.display = "flex";
      footerClass.style.display = "none";
      break;

    case 13:
      container.innerHTML = "THANK YOU FOR WATCHING";
      container.style.fontSize = "5rem";
      break;

    //default
    default:
      instructions.innerHTML = instructions.innerHTML;
  }
}

// dropdown menu

document.querySelector(".hamb").addEventListener("click", dropDownMenu);

function dropDownMenu() {
  document.querySelector(".navdesktop").classList.toggle(".navmobile");
}

//other informations acquired

/* PIECE OF OLD CODE THAT DIDN'T WORK
// CHANGE ON PAGE
// SHOW HEADER
function showHeader() {
  if (header.visibility === "hidden") {
    header.style.visibility = "visible";
  }
}

// SHOW NAV
function showNav() {
  if (nav.style.visibility === "hidden") {
    nav.style.visibility = "visible";
  }
}*/

/* OTHER COMMENTS 
document.querySelectorAll(".example");
document.getElementById("myDIV").querySelectorAll(".example");
//loop through array - array element
what to do in this phase????
// create a container to turn off when I press "previous""


// I tried to work with all the elements at once
//I target and created an object for them inside DOM but I could not do anything else with it.

let key = document.querySelectorAll(".key");
key.style.borderStyle = "#4A6163";

I tried to apply classes, but it didn't work the way I wanted, so I did the way I could have the result I wanted.
let container = document.querySelector(".container");
container.classList.remove("container");
*/
