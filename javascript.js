console.log("JavaScript is loaded");
$( document ).ready(function() {
    console.log("Document is ready");
    $( "#menu" ).click(function() {
        $("#navigation-bar").toggleClass("navigation-bar--hidden");
        $("#content").toggleClass("content--no-navigation");
    });

    //When the FAB is clicked
    $( "#button-card-transition" ).click(function() {
        
        //Animate button when clicked
        $("#button-card-transition")
        .addClass("button-click");

        //Remove the button click class after
        //the animation ends
        setTimeout(function(){
            $("#button-card-transition")
            .removeClass("button-click");
        },300);

        console.log("Button Clicked");
        //If the red card is faded out
        if($(".card__red").hasClass("fade-through-out")){
            fadeThrough(
                $(".card__blue"),
                $(".card__red")
            );
            rotateToggle(
                $("#icon-anchor"),
                $("#icon-switch")
            );
        }


        }
        //If the red card is NOT faded out
        //Fade in blue fade out red
        else{
            fadeThrough(
                $(".card__red"),
                $(".card__blue")
            );
        }
    );

    function fadeThrough(elementFadeOut, elementFadeIn){
         //Remove the fade in class from the red card
         elementFadeOut.removeClass("fade-through-in");    
         //Fade out red content
         elementFadeOut.addClass("fade-through-out");

         //Remove the fade out class from the blue card
         elementFadeIn.removeClass("fade-through-out");
         //Add the fade in class to the blue card
         elementFadeIn.addClass("fade-through-in");
    }

    function rotateToggle(elementRotateOut, elementRotateIn){
        //Remove the fade in class from the red card
        elementRotateOut.removeClass("rotate-in");    
        //Fade out red content
        elementRotateOut.addClass("rotate-out");

        //Remove the fade out class from the blue card
        elementRotateIn.removeClass("rotate-out");
        //Add the fade in class to the blue card
        elementRotateIn.addClass("rotate-in");
   }