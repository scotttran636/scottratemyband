(function(window) {
  "use strict";
  var App = window.App || {};

  function Band(db) {
    this.db = db;
  }

<<<<<<< HEAD
  Band.prototype.getBandVideo = function(bandName,cb){
=======
  /*Band.prototype.getBandVideo = function(bandName,cb){
>>>>>>> 27380cd83fab0c729aa567d20fda75630af52354
    this.db.getByKey(bandName,function(serverResponse){
      if(serverResponse.length != 0){
        console.log("The band video is :" + serverResponse[0].bandVideo);
        cb(serverResponse[0].bandVideo);
      }
    });
<<<<<<< HEAD
  };
=======
  }*/
>>>>>>> 27380cd83fab0c729aa567d20fda75630af52354

  Band.prototype.getBandInfo = function(bandName,cb){
    this.db.getByKey(bandName,function(serverResponse){
      if(serverResponse.length != 0){
        cb(serverResponse[0]);
      }
    });
<<<<<<< HEAD

=======
>>>>>>> 27380cd83fab0c729aa567d20fda75630af52354
  };

  Band.prototype.saveComment = function(order) {
    this.db.add(order.emailAddress, order);
  };

<<<<<<< HEAD
  Band.prototype.deliverOrder = function(order) {
    console.log("calling Truck.deliverOrder()");
    //console.log("Delivering order for " + customerId);
    this.db.remove(order);
  };

=======
>>>>>>> 27380cd83fab0c729aa567d20fda75630af52354
  Band.prototype.displayComments = function(bandName,cb) {
    /*this.db.getAll(function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });*/
    this.db.getByKey(bandName,function(serverResponse){
      if(serverResponse.length != 0){
        console.log("The list of comments is :" + serverResponse);
        cb(serverResponse);
      }
    });
  };

<<<<<<< HEAD
  Band.prototype.getGenre = function(bandGenre, cb) {
    this.db.getByKey(bandGenre, function(serverResponse){
      if(serverResponse.length != 0){
        console.log("This is list of genres:" + serverResponse);
        cb(serverResponse);
      }
    });
  };

=======
>>>>>>> 27380cd83fab0c729aa567d20fda75630af52354
  App.Band = Band;
  window.App = App;

})(window);
