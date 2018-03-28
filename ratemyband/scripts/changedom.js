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

  ChangeDom.prototype.addUserInfoText = function(username) {
    var $paragraph = $("<p></p>", {
      "data-user-logged-in": "username",
      "id": "currentUser"
    });
    var description = "Logged in as <font color=\"gray\"> <i> \"" + username + "\"</i></font><br />";
    $paragraph.append(description);
    this.$element.append($paragraph);
  };

  ChangeDom.prototype.updateVoteCount = function (upvotes, downvotes) {
    var $paragraph = $("<p></p>", {
      "data-vote-count": "current"
    });
    var description = "This performance has <font color=\"gray\"> <i>" + upvotes + "</i></font> upvotes and "
                      + "<font color=\"gray\"> <i> " + downvotes + "</i></font> downvotes.<br />";
    $paragraph.append(description);
    this.$element.append($paragraph);
  };

  App.ChangeDom = ChangeDom;
  window.App = App;
})(window);
