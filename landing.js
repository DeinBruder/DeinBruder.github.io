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



/* Attempting to make the running of slideshow function exclusive to the main page only */
/* const landingPage = document.querySelector("#landingPage");

if(landingPage.getAttribute("id")=="landingPage")
    {
    console.log("yes");
    let ourdef = setInterval(
    function(){
        nextSlide();
    },3000
)
}
else{
    console.log("no");
} */





/* create time interval to start slideshow */
let ourdef = setInterval(
    function(){
        nextSlide();
    },3000
)

/* stop slideshow when mouse hovers on element */

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


/* functions to show dropdown menu on clicking arrow. for mobile layout */
let showMore=document.querySelector("#showMore");
let dropDown="";
function showDropDown(thing){
    /* dropDown=document.querySelector(JSON.stringify(thing)); *//* `${thing}` */
    dropDown=document.querySelector(thing);
    showMore.addEventListener("click",doIt);
}
function doIt(){
    dropDown.style.display="block";
    dropDown.style.display="visible";
}
/* add event listener to trigger dropDown function */
/* showMore.addEventListener("click",showDropDown(dropClass));  */



/* AI insight on how to do the dropdown function above */
/* function showDropDown(event) { // Rename the parameter to 'event'
    //Crucial change:  Get the selector string from a data attribute.
    let dropDownSelector = event.currentTarget.dataset.target;


    if (dropDownSelector) {
        let dropDown = document.querySelector(dropDownSelector);
        if (dropDown) { // Check if the element was found
            dropDown.style.display = "block";
            dropDown.style.visibility = "visible";
        } else {
            console.error("Element not found:", dropDownSelector);
        }
    } else {
        console.error("Data attribute 'data-target' not found on the 'showMore' element.");
    }

}

//Get the showMore element
const showMore = document.querySelector("#showMore");

//Crucial change: Add data-target to your showMore button (in your HTML)
// Example: <button id="showMore" data-target="#myDropdown">Show More</button>
//Replace #myDropdown with the actual ID of the element you want to show.

if (showMore) {
    showMore.addEventListener("click", showDropDown);
} else {
    console.error("Element with ID 'showMore' not found in the DOM.");
}
 */






/* function to show desktop nav menu layout */
const desktopMenu=document.querySelector("#desktopMenu");
const mobileMenu=document.querySelector("#mobileMenu");

function showDesktopMenu(){
    desktopMenu.style.display="flex";
    desktopMenu.style.visibility="visible";
    return;
}

/* function to hide desktop nav menu layout */
function hideDesktopMenu(){
    desktopMenu.style.display="none";
    desktopMenu.style.visibility="hidden";
    return;
}

/*function to show or hide nav menu depending on click for mobile layout */

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
    root.style.setProperty("--deepTheme","rgb(109, 63, 52)");
    root.style.setProperty("--lightTheme","rgb(201, 63, 63)");
    root.style.setProperty("--lightTextColour","white");
    root.style.setProperty("--deepTextColour","rgb(201, 63, 63)");
    root.style.setProperty("--lightHover","rgba(221, 174, 174, 0.884)");
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




/* function to change theme on button press. commented code needs more work, trying to make themeCount persist between pages */
let counter;
function changeTheme(count){
    /* themeCount=localStorage.getItem("themeCount"); */
    if(count==1){goldTheme();}
    else if (count==2){redPinkTheme();}
    else if (count==3){blueTheme();}
    else if (count==4){whiteTheme();}
    else{count=1;changeTheme(count);}
    counter=count;
    localStorage.setItem("themeCount", count);
}
function saveTheme(){
    counter++;
    localStorage.setItem("themeCount", counter);

}
function checkCookies(){
    if (document.cookie=="1"){
        changeTheme(localStorage.getItem("themeCount"));
    }
    else{
        changeTheme(1);
        localStorage.setItem("themeCount",1);
        document.cookie=localStorage.getItem("themeCount");
    }
}





  /* function for saving the name of selected nav menu item into localStorage */
let nameOfInterest="";
let cardHead = document.querySelector("#cardHead");
function fillIn(id){
    nameOfInterest = id.innerText;
    localStorage.setItem("nameOfInterest",nameOfInterest);
    console.log(id)
}

/* function for updating the titles of individual product pages on loading */
function updateHeads(){
    console.log("started and not cleared. See localStorage below");
    console.log(localStorage.getItem("nameOfInterest"));

    if(localStorage.getItem("nameOfInterest")=="cleared"){
        console.log("did not set cardHead")
    }else{
        cardHead.innerText=localStorage.getItem("nameOfInterest");
    localStorage.setItem("nameOfInterest","cleared");
        console.log("loaded and cleared. See localStorage below");
        console.log(localStorage.getItem("nameOfInterest"));

    }
}



/* add event listene to check viewport size and display proper nav menu */
window.addEventListener("resize", updateType);

/* add event listener to display nav menu on button click. For mobile view */
mobileMenu.addEventListener("click", showMenu);


/* select theme to display upon loading page, update page heading/titles where applicable */
window.onload = function(){
    updateType(); /*to make sure page doesn't show menu by default for mobile devices. seems resize event listener doesn't detect starting screen size, only when screen is resized   */
    checkCookies();
    updateHeads();
    console.log("js onload has run");
};