(function(d, w) {
  "use strict";

  var slides = d.querySelectorAll('div.slide'),
      position = Math.floor(Math.random() * slides.length),
      img = d.querySelector('div.s'+position+'>p>img');

  img.src = chrome.extension.getURL('images/junya.jpg');
})(document, window)
