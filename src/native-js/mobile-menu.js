document.addEventListener("DOMContentLoaded", function(event) {
  let mobMenuIco = document.getElementById('header_mobMenu');
  let mobMenu = document.getElementById('header_items');
  if(mobMenuIco && mobMenu){
    mobMenuIco.addEventListener('click', (e)=>{
      if(mobMenu.style.transform == 'translateX(0px)'){
        mobMenuIco.setAttribute('src', '/static-img/hum.png');
        mobMenu.style.transform = "translateX(-5000px)";
      } else {
        mobMenuIco.setAttribute('src', '/static-img/close.png');
        mobMenu.style.transform = "translateX(0px)";
      }
    })
  }
});