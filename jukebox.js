
function Jukebox(){
  this.playing = false;
  this.songs = [];
  this.currentSong;
  this.songSuggestion = [];
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
            var numPatt = /\d+/g; // regex to find numbers
            var id, ids = [];
            // extract song id from result
            for (var i=0; i<result.aRows.length; i++){
              id = result.aRows[i].match(numPatt);
              ids[i] = id;
            }
            for (var i=0; i<result.aRows.length; i++){
              console.log("ids:"+ids[i]);
            }
            this.songSuggestion = ids.slice();
            console.log("suggestion:"+this.songSuggestion);
            // display search results
            for (var i=0; i<result.aRows.length; i++){

            }
        },
        error: function(err) {
            console.error( err );
        }
    });
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

var jukebox = new Jukebox();
jukebox.search('deerhoof');
console.log(jukebox);
$(function(){
  $(".playBtn").click(function() {
    $(".glyphicon-play").toggleClass('glyphicon-pause');
  });
  // hide or show the playlist
  $(".collapseBtn").click(function() {
    $(".glyphicon-collapse-down").toggleClass('glyphicon-collapse-up');
    $(".playList").slideToggle(400);
  });

  $(".playList > li").click(function(){
    alert();
    $(".playList > li").removeClass("active");
    $(this).addClass("active");
  });
})
