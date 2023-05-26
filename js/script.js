let openbtn = document.getElementById("toggler");
let closbtn = document.getElementById("close");
let moblieitems = document.querySelector(".navbarItem-moblie");

openbtn.onclick = () => {
 moblieitems.style.display = "block";
    
}

closbtn.onclick = () => {
  moblieitems.style.display = "none";

}