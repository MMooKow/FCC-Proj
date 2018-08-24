var projects = ["https://codepen.io/mmookow/full/eKQXOg/",     "https://codepen.io/mmookow/full/zaQKjE/",
"https://codepen.io/mmookow/full/zaXWGY/",
"https://codepen.io/mmookow/full/XBbwwm/"];
var count = 0;
function next(){
  count++;
  var slider = document.getElementById("slider");
  if(count>=projects.length){
    count = 0;
  }
  slider.src = projects[count];
}
function prev(){
  count--;
  var slider = document.getElementById("slider");
  if (count < 0){
    count = projects.length-1;
  }
  slider.src = projects[count];
}