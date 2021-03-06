(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function Comments(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  Comments.prototype.addRow = function(bandComment) {
    console.log("Calling CheckList.addRow()");
    //this.removeRow(coffeeOrder.emailAddress);
    var rowElement = new Row(bandComment);
    this.$element.append(rowElement.$element);
  };

  Comments.prototype.removeRow = function(email) {
    console.log("Calling CheckList.removeRow()");
    this.$element
      .find("[value=\"" + email + "\"]")
      .closest("[data-coffee-order=\"checkbox\"]")
      .remove();
  };

  function Row(bandComment) {
    var $div = $("<div></div>", {
      "data-band-review": "user-comments",
      "class": "checkbox"
    });

    var $label = $("<label></label>");
    var thumbIcon = "";
    if(bandComment.vote === "upvote"){
      thumbIcon = "&#xe125;";
    } else{
      thumbIcon = "&#xe126;";
    }

    var description = "<p><b>" + bandComment.username + ":<br/><b>";
    description += "<small><font color=\"gray\">-" + bandComment.postDate + "</font></small><br/>";
    description += "<span class=\"glyphicon\">" + thumbIcon +"</span>"+"<font color=\"gray\"> <i> \"" + bandComment.comment + "\"</i></font><br/><br/>";

    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

<<<<<<< HEAD
  Comments.prototype.addUserInfoText = function(username) {
    var $paragraph = $("<p></p>", {
      "data-user-logged-in": "username",
      "id": "currentUser"
    });
    var description = "Logged in as <font color=\"gray\"> <i> \"" + username + "\"</i></font><br />";
    $paragraph.append(description);
    this.$element.append($paragraph);
  };

=======
>>>>>>> 27380cd83fab0c729aa567d20fda75630af52354
  App.Comments = Comments;
  window.App = App;
})(window);
