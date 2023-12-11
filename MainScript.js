var menuStatusOpen = false

function menuButtonToggle() {
  switch (menuStatusOpen) {
  case false:
    openNav()
    break;
  case true:
    closeNav()
    break;
  }
}

/* Set the width of the side navigation to 15 percent */
function openNav() {
  menuStatusOpen = true
  document.getElementById("mySidenav").style.width = "15%";
  document.getElementById("myMenu").style.marginLeft = "15%";
  document.getElementById("myMain").style.marginLeft = "15%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  menuStatusOpen = false
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myMenu").style.marginLeft = "0";
  document.getElementById("myMain").style.marginLeft = "0%";
}