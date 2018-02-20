//require("dotenv").config();
require("keys.js");
var request = require('request');
var song = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);
  console.log(spotify);
  console.log(client);

  
 
var query = new Song({
  id: spotify.id,
  secret: spotify.secret
});