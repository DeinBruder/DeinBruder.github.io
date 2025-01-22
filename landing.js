/* function for slideshow on main page */
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    return;
}


function nextSlide() {
    showSlide(currentIndex + 1);
    return;
}


function prevSlide() {
    showSlide(currentIndex - 1);
    return;
}




let landingPage = document.querySelector('#landingPage');
/* create time interval to start slideshow. works for landing page only. */
if (landingPage){
    landingPage.onload = setInterval(
    function(){
        nextSlide();
    },3000
);
}
else{
    landingPage=false;
}




/* stop slideshow when mouse hovers on element. Obsoleted*/

function stopWheeling(){
    clearInterval(ourdef);
}
function continueWheeling(){
    ourdef = setInterval(
        function(){
            nextSlide();
        },3000)
    
        return;
}


/* Tried to animate drop-down menu items individually */
/* function animateIndividuals(){
    var x;
    for(x=1;x<4;x++){
        current = "#dropLinks" + x;
        console.log(current);
        document.querySelector("[id="+CSS.escape(current)+"]").classList.add("dropLinkAnimated");
        delay=setTimeout(function(){
        },30)
    }
    
}
animateIndividuals() */


/* functions to show dropdown menu on clicking arrow(for mobile layout)  or avatar(for both mobile and desktop). */
let showMore=document.querySelector("#showMore");
let dropDown="";



function showDropDown(thing){
    dropDown=document.querySelector(thing); /* save dropdown in question into variable */

     // Close all other dropdowns first
     let allDropDowns = document.querySelectorAll('.dropdown');
     allDropDowns.forEach(menu => {
         menu.style.display = 'none';  // Hide all other dropdowns
     });
 
     // Open the clicked dropdown
     if (dropDown.style.display == 'block') {
        dropDown.style.display="none";
        dropDown.style.display="hidden";
        console.log("hid it");
     }
     else{
        dropDown.style.display="block";
        dropDown.style.display="visible";
        console.log("displayed it");
     }
}


function doIt(thing){
    dropDown=document.querySelector(thing); /* save dropdown in question into variable */
   
    if (dropDown.style.display == 'block') {
        dropDown.style.display="none";
        dropDown.style.display="hidden";
        console.log("hid it");
     }
     else{
        dropDown.style.display="block";
        dropDown.style.display="visible";
        console.log("displayed it");
     }
    
}



let desktopMenu=document.querySelector("#desktopMenu");
const mobileMenu=document.querySelector("#mobileMenu");

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    dropDown=document.querySelector(".dropdown")
    if (e.target !== (mobileMenu) && !(mobileMenu).contains(e.target)) {
        if(e.target !== (desktopMenu) && !(desktopMenu).contains(e.target)){
            showDropDown(".dropdown");
            hideDesktopMenu();
            
        }
    }    
}


/* function to show desktop nav menu layout */
function showDesktopMenu(){
    desktopMenu.style.display="flex";
    desktopMenu.style.visibility="visible";
    return;
}

/* function to hide desktop nav menu layout */
function hideDesktopMenu(){
    let allDropDowns = document.querySelectorAll('.dropdown');
    allDropDowns.forEach(menu => {
        menu.style.display = 'none';  // Hide all other dropdowns
    });
    desktopMenu.style.display="none";
    desktopMenu.style.visibility="hidden";
    return;
}

/*function to show or hide nav menu on click for mobile layout */

function showMenu(){
    if(desktopMenu.style.display=="none" && desktopMenu.style.visibility=="hidden") 
        {
        showDesktopMenu();
    }
    else{
        hideDesktopMenu();
    }
    
    return;
}





/* function to check screen size and show appropriate nav menu layout */
const mediaQuery = window.matchMedia('(max-width: 800px)');
function updateType(){
    if (mediaQuery.matches) {
        hideDesktopMenu();
    } 
    else {
        showDesktopMenu();
    }
}

    

/* functions to set global variables for setting theme */
const root = document.documentElement;

function goldTheme(){
    root.style.setProperty("--bodyColour","rgb(39, 38, 37)");
    root.style.setProperty("--deepTheme","rgb(241, 155, 26)");
    root.style.setProperty("--lightTheme","rgb(226, 179, 98)");
    root.style.setProperty("--lightTextColour","white");
    root.style.setProperty("--deepTextColour","rgb(201, 146, 63)");
    root.style.setProperty("--lightHover","rgba(255, 208, 107, 0.88)");
    root.style.setProperty("--cardBodyColour","rgb(75, 74, 73)");
    root.style.setProperty("--cardHeadColour", "rgb(252, 188, 94)");
    return;

}
function redPinkTheme(){
    root.style.setProperty("--bodyColour","rgb(236, 194, 194)");
    root.style.setProperty("--deepTheme","rgb(196, 45, 45)");
    root.style.setProperty("--lightTheme","rgb(201, 63, 63)");
    root.style.setProperty("--lightTextColour","white");
    root.style.setProperty("--deepTextColour","rgb(201, 63, 63)");
    root.style.setProperty("--lightHover","rgba(223, 150, 150, 0.88)");
    root.style.setProperty("--cardBodyColour","rgb(182, 90, 90)");
    root.style.setProperty("--cardHeadColour", "rgb(131, 76, 76)");
    return;

}
function whiteTheme(){
    root.style.setProperty("--bodyColour","rgb(255, 255, 255)");
    root.style.setProperty("--deepTheme","rgb(0, 0, 0)");
    root.style.setProperty("--lightTheme","rgb(173, 173, 173)");
    root.style.setProperty("--lightTextColour","rgb(255, 255, 255)");
    root.style.setProperty("--deepTextColour","rgb(68, 68, 68)");
    root.style.setProperty("--lightHover","rgba(105, 102, 91, 0.884)");
    root.style.setProperty("--cardBodyColour","rgb(100, 100, 100)");
    root.style.setProperty("--cardHeadColour", "rgb(44, 44, 44)");
    return;

}
function blueTheme(){
    root.style.setProperty("--bodyColour","rgb(208, 213, 216)");
    root.style.setProperty("--deepTheme","rgb(52, 100, 109)");
    root.style.setProperty("--lightTheme","rgb(63, 173, 201)");
    root.style.setProperty("--lightTextColour","white");
    root.style.setProperty("--deepTextColour","rgb(63, 146, 201)");
    root.style.setProperty("--lightHover","rgba(163, 191, 209, 0.88)");
    root.style.setProperty("--cardBodyColour","rgb(111, 148, 170)");
    root.style.setProperty("--cardHeadColour", "rgb(52, 100, 109)");/* rgb(94, 119, 134) */
    return;

}
function darkTheme(){
    root.style.setProperty("--bodyColour","rgb(39, 38, 37)");
    root.style.setProperty("--deepTheme","rgb(44, 44, 44)");
    root.style.setProperty("--lightTheme","rgb(68, 68, 68)");
    root.style.setProperty("--lightTextColour", "rgb(190, 190, 190)");
    root.style.setProperty("--deepTextColour","rgb(170, 170, 170)");
    root.style.setProperty("--lightHover","rgba(114, 114, 114, 0.88)");
    root.style.setProperty("--cardBodyColour","rgb(75, 74, 73)");
    root.style.setProperty("--cardHeadColour", "rgb(20, 20, 20)");
    return;

}
function roseGoldTheme(){
    root.style.setProperty("--bodyColour","rgb(255, 208, 191)");
    root.style.setProperty("--deepTheme","rgb(255, 150, 111)");
    root.style.setProperty("--lightTheme","rgb(255, 180, 153)");
    root.style.setProperty("--lightTextColour","white");
    root.style.setProperty("--deepTextColour","rgb(255, 137, 94)");
    root.style.setProperty("--lightHover","rgb(255, 200, 180)");
    root.style.setProperty("--cardBodyColour","rgb(255, 175, 146)");
    root.style.setProperty("--cardHeadColour", "rgb(255, 180, 153)");

}



/* function to change theme on button press. commented code needs more work, trying to make themeCount persist between pages */
let counter;
function changeTheme(count){
    /* themeCount=localStorage.getItem("themeCount"); */
    if(count==1){goldTheme();}
    else if (count==2){redPinkTheme();}
    else if (count==3){blueTheme();}
    else if (count==4){whiteTheme();}
    else if (count==5){darkTheme();}
    else if (count==6){roseGoldTheme();}
    else{count=1;changeTheme(count);}
    counter=count;
    localStorage.setItem("themeCount", count);
}
function saveTheme(){
    counter++;
    localStorage.setItem("themeCount", counter);

}
function checkCookies(){
    if (document.cookie=="4"){
        changeTheme(localStorage.getItem("themeCount"));
    }
    else{
        changeTheme(4);
        localStorage.setItem("themeCount",4);
        document.cookie=localStorage.getItem("themeCount");
    }
}





  /* function for saving the name of selected nav menu item into localStorage */
let nameOfInterest="";
let cardHead = document.querySelector("#cardHead");

let shirts = document.querySelector('#shirts');
let trousers = document.querySelector('#trousers');
let dresses = document.querySelector('#dresses');
function fillIn(id){
    nameOfInterest = id.textContent;
    localStorage.setItem("nameOfInterest",nameOfInterest);
}

/* function for updating the titles of individual product pages on loading */
function updateHeads(){

    if(localStorage.getItem("nameOfInterest")=="cleared"){
        console.log("did not set cardHead")
    }else{
        cardHead.innerText=localStorage.getItem("nameOfInterest");

    }
}
/* function to populate product categories page heading*/
function checkThrough(){
    
    console.log("started and not cleared. See localStorage below");
    console.log(localStorage.getItem("nameOfInterest"));
    let items=document.getElementsByClassName(/* "crochet" */localStorage.getItem("nameOfInterest" ).toLowerCase());
    console.log(items);

    let middle = document.querySelector("#middle");
    for (let i in items){
        if(items[i].textContent){
            const lines = items[i].textContent.split('\n').map(line => line.trim()).filter(line => line !== '');

            // Assign each line to an array using a for loop
            const final = [];
            for (let i = 0; i < lines.length; i++) {
            final.push(lines[i]);
            console.log(lines[i]);
            middle.innerHTML+=`<a href = "productPage.html" class ="services" onclick = "fillIn(${lines[i].toLowerCase()})">
                    <div><img class="icon" src="assets/clothes-svgrepo-com.svg" alt="Buy Clothes"></div>
                    <div class="servicesText"><h2 class ="${lines[i]}">${lines[i]}</h2>
                    <p>We guarantee amazing quality at a <em>reasonably</em> cheap cost!</p>
                    </div>
                </a>`;
        }
            }
        else{
            console.log("did not do anything");
            continue;
        }

            
    };
    
    localStorage.setItem("nameOfInterest","cleared");
    console.log("loaded and cleared. See localStorage below");
    console.log(localStorage.getItem("nameOfInterest"));
}

/* add event listene to check viewport size and display proper nav menu */
window.addEventListener("resize", updateType);

/* add event listener to display nav menu on button click. For mobile view */
mobileMenu.addEventListener("click", showMenu);

const body =document.querySelector("body");
/* select theme to display upon loading page, update page heading/titles where applicable */
body.onload = function(){
    updateType(); /*to make sure page doesn't show menu by default for mobile devices. seems resize event listener doesn't detect starting screen size, only when screen is resized   */
    checkCookies();
    updateHeads();
    checkThrough();
    console.log("js onload has run"); 
};