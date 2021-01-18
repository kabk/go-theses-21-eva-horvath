window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);





//var div = document.querySelector("div");
//var angle = 0;
//document.onwheel = function(e) {
//  if (e.deltaY) {                   // we have a wheel for vertical (common) direction
//    e.preventDefault();
//    angle += e.deltaY < 0 ? 4 : -4; // what direction?
//    div.style.transform = "rotate(" + angle + "deg)"; // do something
//  }
//};