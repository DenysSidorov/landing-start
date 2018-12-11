document.addEventListener("DOMContentLoaded", function(event) {
  let mobMenuIco = document.getElementById('header_mobMenu');
  let mobMenu = document.getElementById('header_items');
  if(mobMenuIco && mobMenu){
    mobMenuIco.addEventListener('click', (e)=>{
      if(mobMenu.style.transform == 'translateX(0px)'){
        mobMenu.style.transform = "translateX(-5000px)";
      } else {
        mobMenu.style.transform = "translateX(0px)";
      }
    })
  }
});