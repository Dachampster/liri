require("dotenv").config();
var keys = require("./keys.js");
var request = require('request');
var Song = require('node-spotify-api');
var Twitter = require('twitter');
var spotify = new Song(keys.spotify);
var omdb = keys.omdb.id;
var search = process.argv[2];


spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0]); 
  });

  var client = new Twitter({
    consumer_key: keys.twitter.consumer_key,
    consumer_secret: keys.twitter.consumer_secret,
    access_token_key: keys.twitter.access_token_key,
    access_token_secret: keys.twitter.access_token_secret
  });
   
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });

var grab = ("http://www.omdbapi.com/?apikey=" + omdb + "&s=" + search);
console.log(grab);
request(grab, function(error, response, body){
    var meat = JSON.parse(body);
console.log(meat.Search[0]);
});