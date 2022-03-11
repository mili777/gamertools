/* DROPDOWN */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* MENU TOGGLE */

$("#toggleMobile").click(function () {
  $("#nav_menu").toggleClass("active");
  $("body").toggleClass("toggleOverflow");
});


/* FAQ ACCORDION */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("activeAcc");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* TABS */

function openTab(evt, tab) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " tab-active";
}

function showTabMobile() {
  var tabs = document.getElementById("tabs");

  tabs.classList.add("active");
  tabs.classList.remove("flex");
  var x = document.getElementsByClassName("tab");
  var tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.add("active");
  }
  document.getElementById("tab_more").style.display = "none";
  document.getElementById("tab_less").style.display = "block";
}

function hideTabMobile() {
  var tabs = document.getElementById("tabs");

  tabs.classList.remove("active");
  tabs.classList.add("flex");
  var x = document.getElementsByClassName("tab");
  var tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("active");

  }
  document.getElementById("tab_more").style.display = "block";
  document.getElementById("tab_less").style.display = "none";
}