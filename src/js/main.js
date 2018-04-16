// require("./lib/ads");
// var track = require("./lib/tracking");

var $ = require("./lib/qsa");
var closest = require("./lib/closest");

var clickedOption = function(e) {
  if (e.target.tagName != "BUTTON") return;
  $("button", this).forEach(b => b.disabled = true);
  var question = closest(this, ".question");
  question.classList.add("answered");
  e.target.classList.add("chosen");
}

$(".options").forEach(o => o.addEventListener("click", clickedOption));
