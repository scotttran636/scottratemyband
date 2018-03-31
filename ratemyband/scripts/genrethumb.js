(function(window){
  "use strict";
  
  var App = window.App || {};
  var $ = window.jQuery;

  function GenreThumb(selector){
    if (!selector) {
      throw new Error("No selector");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  GenreThumb.prototype.addGenre = function(bandGenre){
    console.log("Calling Genre()");
    var genreElement = new Genre(bandGenre);
    this.$element.append(genreElement.$element);
  };

  function Genre(bandGenre) {
    var $div = $("<div></div>", {
      "data-band-genre": "genres",
      "class": "checkbox"
    });

    var description = "<h3><b>" + bandGenre.genre + "</b></h3>";

    $div.append(description);
    this.$element = $div;
  }

  App.GenreThumb = GenreThumb;
  window.App = App;
})(window);
