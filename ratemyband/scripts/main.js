(function(window) {
  "use strict";
  console.log("USING main.js");
  var FORM_SELECTOR_COMMENTS = "[data-band-review=\"form\"]";
  var CHECKLIST_SELECTOR = "[data-band-review=\"user-comments\"]";
  var FORM_SELECTOR_LOGIN_MODAL = "[data-signin=\"form\"]";
  var FORM_SELECTOR_SIGNUP_MODAL = "[data-signup=\"form\"]";

  //var FORM_SELECTOR_GENRE = "[data-band-genre=\"form\"]";
  //var SELECTOR_GENRE = "[data-band-genre=\"genres\"]";

  var App = window.App;
  var $ = window.jQuery;
  var Band = App.Band;
  var RemoteDataStore = App.RemoteDataStore;
  var Comments = App.Comments;
  var FormHandler = App.FormHandler;
  //var Genres = App.Genres;

  var remoteDSComments = new RemoteDataStore("http://localhost:2403/user-comments");
  var remoteDSLogin = new RemoteDataStore("http://localhost:2403/users/login");
  var remoteDSBands = new RemoteDataStore("http://localhost:2403/bands");
  var remoteDSGenre = new RemoteDataStore("http://localhost:2403/bands");

  var mybandComments = new Band(remoteDSComments);
  var bandDetails = new Band(remoteDSBands);
  var mybandLogin = new Band("users", remoteDSLogin);
  var mybandGenre = new Band(remoteDSGenre);

  window.mybandComments = mybandComments;
  window.mybandDetails = bandDetails;
  window.mybandLogin = mybandLogin;
  window.mybandGenre = mybandGenre;

  //var Genrelist = new Genres(SELECTOR_GENRE);

  var commentsSummary = new Comments(CHECKLIST_SELECTOR);
  var formHandlerComments = new FormHandler(FORM_SELECTOR_COMMENTS);

  var formHandlerLoginModal = new FormHandler(FORM_SELECTOR_LOGIN_MODAL);
  var formHandlerSignupModal = new FormHandler(FORM_SELECTOR_SIGNUP_MODAL);


  var params = window.location.search.split("?")[1];
  var bandName = decodeURIComponent(params.split("=")[1]);

  $(document).ready(function() {
    $("#bandName").text(bandName);
    //$("input[name=\"vote\"]").required = true;
    bandDetails.getBandInfo.call(bandDetails, bandName, function(bandInfo) {
      $("#bandPerformanceDay").text("Performance on " + bandInfo.performanceDay);
      $("#bandVideo").attr("src", bandInfo.bandVideo);
    });
  });

  formHandlerComments.addSubmitHandler(bandName, function(data) {
    mybandComments.saveComment(data);
    commentsSummary.addRow(data);
  });

  /*$(FORM_SELECTOR_GENRE).ready(function(){
    myTruckGenre.getGenre.call(myTruckGenre, function(genreband) {
      $("#bandGenre").text("This is this band's " + genreband.genre);
      Genrelist.addGenre.call(Genrelist, genreband);
    });
  });*/

  $(FORM_SELECTOR_COMMENTS).ready(function() {
    //console.log("Page refreshed");

    mybandComments.displayComments.call(mybandComments, bandName, function(comments) {
      var numUpVotes = 0;
      var numDownVotes = 0;
      $.each(comments, function(i, comment) {
        if(comment.vote == "upvote"){
          numUpVotes++;
        }else{
          numDownVotes++;
        }
        commentsSummary.addRow.call(commentsSummary, comment);
      });
      console.log("Total up votes : " + numUpVotes);
      console.log("Total down votes : " + numDownVotes);
      $("#upvoteCount").text(numUpVotes);
      $("#downvoteCount").text(numDownVotes);
    });
  });

  //Login Button Click Handler
  document.getElementById("LoginButton").addEventListener("click", function(){
    //Open Login Modal Form
    $("#login-modal").modal();
  });

  //Signup Button Click Handler
  document.getElementById("SignupButton").addEventListener("click", function(){
    //Open Login Modal Form
    $("#signup-modal").modal();
  });

  document.getElementById("CommentButton").addEventListener("click", function(){
    $("#comment-modal").modal();
  });

  //LOGGING OUT
  document.getElementById("LogoutButton").addEventListener("click", function(){
    $.ajax({
      url: "http://localhost:2403/users/logout",
      type: "POST",
      data: {},
      cache: false,
      xhrFields:{
        withCredentials: true
      },
      success: location.reload(),
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  });

  //Signup Form Handler
  formHandlerSignupModal.addSubmitHandler(function(data) {
    console.log(data);
    $.ajax({
      url: "http://localhost:2403/users",
      type: "POST",
      data: {"username": data.username, "password":  data.password},
      cache: false,
      xhrFields:{
        withCredentials: true
      },
      success: {},
      error: function(xhr) {
        console.log(data);
        console.log(xhr.responseText);
        console.log(data.newusername);
        console.log(data.newpassword);
      }
    });
  });



  //Login Form Handler
  formHandlerLoginModal.addSubmitHandler(function(data) {
    //LOGGING IN
    $.ajax({
      url: "http://localhost:2403/users/login",
      //url: "http://localhost:2403/users",
      type: "POST",
      data: {username: data.username, password: data.password},
      cache: false,
      xhrFields:{
        withCredentials: true
      },
      success: location.reload(),
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  });

  //WHO AM I
  $.ajax({
    url: "http://localhost:2403/users/me",
    type: "GET",
    cache: false,
    xhrFields:{
      withCredentials: true
    },
    success: function(result) {
      changeDomUser.addUserInfoText(result.username);
      currentUser = result.username;
    },
    error: function(xhr) {
      console.log(xhr.responseText);
    }
  });

})(window);
