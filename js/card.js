<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>var div = document.getElementById("div");

setInterval(function () {
  var left = Math.random() * window.innerWidth;
  var top = Math.random() * window.innerHeight;
  div.style.left = left + "px";
  div.style.top = top + "px";
}, 1000);
