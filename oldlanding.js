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




const landingPage = document.querySelector("#landingPage");

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
}






let ourdef = setInterval(
    function(){
        nextSlide();
    },3000
)
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


const desktopMenu=document.querySelector("#desktopMenu");
const mobileMenu=document.querySelector("#mobileMenu");

function showMenu(){
    if(desktopMenu.style.display=="none" && desktopMenu.style.visibility=="hidden") 
        {
        desktopMenu.style.display="flex";
        desktopMenu.style.visibility="visible";
    }
    else{
        desktopMenu.style.display="none";
        desktopMenu.style.visibility="hidden";
    }
    
    return;
}





function showDesktopMenu(){
    desktopMenu.style.display="flex";
    desktopMenu.style.visibility="visible";
    return;
}


function hideDesktopMenu(){
    desktopMenu.style.display="none";
    desktopMenu.style.visibility="hidden";
    return;
}




function updateType(){
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    if (mediaQuery.matches) {
        hideDesktopMenu();
    } 
    else {
        showDesktopMenu();
    }
}

    


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





let themeCount=1;
function changeTheme(){
    if(themeCount==1){goldTheme();}
    else if (themeCount==2){redPinkTheme();}
    else if (themeCount==3){blueTheme();}
    else if (themeCount==4){whiteTheme();}
    else{themeCount=1;changeTheme();}
    themeCount++;
}







let nameOfInterest="";
let cardHead = document.querySelector("#cardHead");
function fillIn(id){
    nameOfInterest = id.innerText;
    localStorage.setItem("nameOfInterest",nameOfInterest);
    console.log(id)
}


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




window.addEventListener("resize", updateType);
mobileMenu.addEventListener("click", showMenu)

window.onload = function(){
    updateType();
    changeTheme();
    updateHeads();
    console.log("js onload has run");
};