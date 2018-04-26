require("./lib/ads");
// var track = require("./lib/tracking");

var $ = require("./lib/qsa");
var closest = require("./lib/closest");

var hash = window.location.hash || "#0";
hash = hash.replace(/#/, "") * 1;

var questions = $(".question");
for (var i = 0; i < hash; i++) {
  var q = questions[i];
  q.classList.add("answered");
  $("button", q).forEach(b => b.disabled = true);
}

var clickedOption = function(e) {
  if (e.target.tagName != "BUTTON") return;
  $("button", this).forEach(b => b.disabled = true);
  var question = closest(this, ".question");
  question.classList.add("answered");
  e.target.classList.add("chosen");
  window.location.hash = ++hash;
}

$(".options").forEach(o => o.addEventListener("click", clickedOption));

