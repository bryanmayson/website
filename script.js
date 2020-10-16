// Self Created Filter Function
// Guides Used:
// https://www.w3schools.com/jquery/jquery_hide_show.asp
function filterall(){
  $(".poster1").show(500);
  $(".poster2").show(500);
}
function filter1() {
  $(".poster1").show(500);
  $(".poster2").hide(500);
}

function filter2() {
  $(".poster2").show(500);
  $(".poster1").hide(500);
}


// Self Created Naviagation Menu Highlighter on scroll and click

// Guides used:
// https://www.w3schools.com/jsref/prop_html_style.asp
// https://www.w3schools.com/jquery/css_position.asp#:~:text=The%20position()%20method%20returns,and%20left%20positions%20in%20pixels.
// https://www.w3schools.com/jquery/event_scroll.asp

// Obtain naviagtion menu items into an array
menuItems = $(".navigation > a")
console.log(menuItems)

// Highlight the first navigation menu item
currentActive = menuItems[3]
currentActive.style.color = "#0094FF";

// Simple click function which modifies the color of the navigation menu
menuItems.click(
  function(item){
    var selected = item.target
    currentActive.style.color = "#3b3b3b";
    selected.style.color = "#0094FF";

    currentActive = selected
  }
)

// Change navigation menu item color when scrolling
$(document).scroll(
  function(){

    var pos = document.documentElement.scrollTop

    if (pos > 0 && pos < $(".section2").position().top - 100) {
      if (menuItems[3].style.color != "#0094FF"){
        currentActive.style.color = "#3b3b3b";
        menuItems[3].style.color = "#0094FF";
        currentActive = menuItems[3]
      }
    }
    if (pos >= $(".section2").position().top - 100 && pos < $(".section3").position().top){
      if (menuItems[2].style.color != "#0094FF"){
        currentActive.style.color = "#3b3b3b";
        menuItems[2].style.color = "#0094FF";
        currentActive = menuItems[2]
      }
    }
    if (pos >= $(".section3").position().top - 100 && pos < $(".section4").position().top){
      if (menuItems[1].style.color != "#0094FF"){
        currentActive.style.color = "#3b3b3b";
        menuItems[1].style.color = "#0094FF";
        currentActive = menuItems[1]
      }
    }
    if (pos >= $(".section4").position().top - 100){
      console.log("pass")
      if (menuItems[0].style.color != "#0094FF"){
        currentActive.style.color = "#3b3b3b";
        menuItems[0].style.color = "#0094FF";
        currentActive = menuItems[0]
      }
    }
  }
  
)