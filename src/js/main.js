// require("./lib/ads");
// var track = require("./lib/tracking");

var $ = require("./lib/qsa");


var clickedOption = function(e) {
  if (this.classList.contains("answered")) return;
  if (e.target.tagName != "BUTTON") return;
  $("button", this).forEach(b => b.disabled = true);
  this.classList.add("answered");
  e.target.classList.add("chosen");
  var answer = this.nextElementSibling;
  answer.classList.add("show");
}

$(".options").forEach(o => o.addEventListener("click", clickedOption));