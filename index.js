document.addEventListener('DOMContentLoaded', () => {
  let navImage = document.getElementById('nav-image');
  new Propeller(navImage, {
    inertia: 0.99,
    speed: 0,
  });


})

//$(function() {
//    var rotation = 0, 
//        scrollLoc = $(document).scrollTop();
//    $(window).scroll(function() {
//        var newLoc = $(document).scrollTop();
//        var diff = scrollLoc - newLoc;
//        rotation += diff, scrollLoc = newLoc;
//        var rotationStr = "rotate(" + rotation + "deg)";
//        $(".gear").css({
//            "-webkit-transform": rotationStr,
//            "-moz-transform": rotationStr,
//            "transform": rotationStr
//        });
//    });
//})





// window.addEventListener(
//   "scroll",
//   () => {
//     document.body.style.setProperty(
//       "--scroll",
//       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
//     );
//   },
//   false
// );






//var div = document.querySelector("div");
//var angle = 0;
//document.onwheel = function(e) {
//  if (e.deltaY) {                   // we have a wheel for vertical (common) direction
//    e.preventDefault();
//    angle += e.deltaY < 0 ? 4 : -4; // what direction?
//    div.style.transform = "rotate(" + angle + "deg)"; // do something
//  }
//};