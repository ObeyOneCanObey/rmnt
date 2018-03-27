
$(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                        // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});


function goToNavigator() {
    $(".main").moveTo(2);   
}

function goTo(input) {
    $(".main").moveTo(input);       
}

function openWork(input) {
    var elements = document.getElementsByClassName("workExp");
    var content = document.getElementsByClassName("workContent");

    var contentContainer = document.getElementsByClassName("navigatorData")[0];
    // set opacity to 0
    contentContainer.style.opacity = 0;

    setTimeout(function() {
        for(var i =0; i < elements.length; i++) {
            elements[i].style.color = "#111111";
            content[i].style.display = 'none';
        }
        elements[input].style.color = "blue";
        content[input].style.display = "flex";
        
        contentContainer.style.opacity = 1;        
    }, 210);

}

function openProj(input) {
    var elements = document.getElementsByClassName("sideProj");
    var content = document.getElementsByClassName("projContent");

    var contentContainer = document.getElementsByClassName("navigatorProjData")[0];
    // set opacity to 0
    contentContainer.style.opacity = 0;

    setTimeout(function() {
        for(var i =0; i < elements.length; i++) {
            elements[i].style.color = "#111111";
            content[i].style.display = 'none';
        }
        elements[input].style.color = "blue";
        content[input].style.display = "flex";
        
        contentContainer.style.opacity = 1;        
    }, 210);

}

document.addEventListener("DOMContentLoaded", function(event) {
    openWork(0);
    openProj(0);
});