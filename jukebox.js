var numSongs = 0, selectedID;

function Jukebox(){
  this.playing = false;
  this.songs = [];
  this.search = function(searchTerm){
    //make an ajax request
    var result;
    $.ajax({
        type: "GET",
        url: "https://freemusicarchive.org/api/trackSearch",
        data: {
            q: searchTerm,
            limit: 20
        },
        dataType: 'json',
        success: function(response) {
            console.log(response);
            result = response;
        },
        error: function(err) {
            console.error( err );
        }
    });
    // extract song id from result
    var id;
    for (var i=0; i<result.aRows.length; i++){

    }
    //display serch results
    for (var i=0; i<result.aRows.length; i++){

    }
  }
  this.add = function(song){

  }
  this.remove = function(song){

  }
  this.togglePlay = function(){
    this.audio.play();
    this.playing = !this.playing;
  }
  this.next = function(){

  }
  this.prev = function(){

  }
}

$(function() {
  $(".playBtn").click(function() {
    $(".glyphicon-play").toggleClass('glyphicon-pause');
  });
  // hide or show the playlist
  $(".collapseBtn").click(function() {
    $(".glyphicon-collapse-down").toggleClass('glyphicon-collapse-up');
    $(".playList").slideToggle(400);
  });

  $(".playList > li").click(function(){
    $(".playList > li").removeClass("active");
    $(this).addClass("active");
  });
});
