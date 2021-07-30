document.addEventListener('DOMContentLoaded', () => {
    
   // Navegation Menu
   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems);

   // Slider
   var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
       indicators: true,
       height: 500,
       duration: 1000,
       interval:4000
    });

});