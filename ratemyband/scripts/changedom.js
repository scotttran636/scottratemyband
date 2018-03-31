(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function ChangeDom(selector) {
    this.$element = $(selector);
  }

  ChangeDom.prototype.addComment = function(comment) {
    var newComment = new Comment(comment);
    this.$element.append(newComment.$element);
  };

  ChangeDom.prototype.delete = function(id) {
    document.getElementById(id).remove();
  };

  function Comment(data) {
    var $div = $("<div></div>", {
      "data-user-comment": "comment"
    });
    var $label = $("<label></label>");
    var description = "<font color=\"gray\"> <i> \"" + data.comment + "\"</i></font><br />";
    description += "<p>-" + data.username + "<br />";
    $label.append(description);
    $div.append($label);
    this.$element = $div;
  }

  App.ChangeDom = ChangeDom;
  window.App = App;
})(window);
