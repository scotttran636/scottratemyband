/*(function(window) {
  "use strict";
  console.log("USING formhandler.js");
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    console.log("Constructing FormHandler from selector");
    console.log("selector= " + selector);
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log("calling FormHandler.addSubmitHandler()");
    this.$formElement.on("submit", function(event) {
      console.log("calling callback function inside FormHandler.addSubmitHandler()");
      event.preventDefault();

      var data = {};
      console.log("this = " + this);
      console.log("$(this) = " + $(this));
      $(this).serializeArray().forEach(function(item) {
        console.log("item= " + item);
        console.log("calling $(this).serializeArray().forEach(function(item))");
        console.log("item is: " + item);
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log("This is data: "+ data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.addInputHandler = function(fn) {
    console.log("calling FormHandler.addInputHandler()");
    this.$formElement.on("input", "[name=\"emailAddress\"]", function(event) {
      console.log("calling callback function inside FormHandler.addInputHandler()");
      var emailAddress = event.target.value;
      var message = "";
      if (fn(emailAddress)) {
        event.target.setCustomValidity("");
      } else {
        message = emailAddress + " is not an authorized email address!";
        event.target.setCustomValidity(message);
      }
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);*/

(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
      });
      fn(data);
    });
  };

  FormHandler.prototype.addInputHandler = function(fn) {
    this.$formElement.on("input", "[name=\"emailAddress\"]", function(event) {
      var emailAddress = event.target.value;
      var message = "";
      if (fn(emailAddress)) {
        event.target.setCustomValidity("");
      } else {
        message = emailAddress + " is not an authorized email address!";
        event.target.setCustomValidity(message);
      }
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
