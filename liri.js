//loading in:
//keys.js
var keys = require('./keys.js');
var  request = require('request');
var twitter = require('twitter');
var  spotify = require('spotify');
var  client = new twitter(keys.twitterKeys);
//file system
var  fs = require('fs');

var  nodeArgv = process.argv;
console.log(nodeArgv)
var  flag = process.argv[2];

var  z = "";
for (var i=3; i<nodeArgv.length; i++){
  if(i>3 && i<nodeArgv.length){
    z = z + "+" + nodeArgv[i];
  } else{
    z = z + nodeArgv[i];
  }
}

switch(flag){
  case "my-tweets":
    displayTweets();
  break;

  case "spotify-this-song":
    if(z){
      spotifyQuery(z);
    } else{
      spotifyQuery("The Sign");
    }
  break;

  case "movie-this":
    if(z){
      omdb(z)
    } else{
      omdb("Mr. Nobody")
    }
  break;

  case "do-what-it-says":
    doThis();
  break;

  default:
    console.log("{Select: my-tweets, spotify-this-song, movie-this, do-what-it-says}");
  break;
}

function displayTweets(){
  var screenName = {screen_name: '@Denver94160573'};
  client.get('statuses/user_timeline', screenName, function(error, tweets, response){
    if(!error){
      for(var i = 0; i<tweets.length; i++){
        var date = tweets[i].created_at;
        console.log("@Denver94160573: " + tweets[i].text + " Created: " + date.substring(0, 19));
        //Appending log file
        fs.appendFile('log.txt', "@Denver94160573: " + tweets[i].text + " Created: " + date.substring(0, 19));
       
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      }
    }else{
      console.log('Error occurred');
    }
  });
}
//URL is correct...error on items in array??
function spotifyQuery(song){
  spotifyAPI.search({type: 'track', query: 'song'}, function(error, data){
    if(!error){
      for(var i = 0; i < data.tracks.items.length; i++){
        var trackData = data.tracks.items[i];
        console.log("***********************************");
        console.log("Artist: " + trackData.artists[0].name);
        console.log("Track: " + trackData.name);
        console.log("Track URL: " + trackData.preview_url);
        console.log("Associated Album: " + trackData.album.name);
        console.log("***********************************");
        
        //Works! appending text log...
        fs.appendFile('log.txt', songData.artists[0].name);
        fs.appendFile('log.txt', songData.name);
        fs.appendFile('log.txt', songData.preview_url);
        fs.appendFile('log.txt', songData.album.name);
      }
    } else{
      console.log('Err');
    }
  });
}
//This Works.
function omdb(movie){
  var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true&apikey=40e9cece';
//request and parse of movie data
  request(omdbURL, function (error, response, body){
    if(!error && response.statusCode == 200){
      var body = JSON.parse(body);
      console.log("");
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      console.log("Movie Title: " + body.Title);
      console.log("Release Year: " + body.Year);
      console.log("IMdB Rating: " + body.imdbRating);
      console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors);
      console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
      console.log("Rotten Tomatoes URL: " + body.tomatoURL);
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      //Appening again
      fs.appendFile('log.txt', "Movie Title: " + body.Title);
      fs.appendFile('log.txt', "Release Year: " + body.Year);
      fs.appendFile('log.txt', "IMdB Rating: " + body.imdbRating);
      fs.appendFile('log.txt', "Country: " + body.Country);
      fs.appendFile('log.txt', "Language: " + body.Language);
      fs.appendFile('log.txt', "Plot: " + body.Plot);
      fs.appendFile('log.txt', "Actors: " + body.Actors);
      fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + body.tomatoRating);
      fs.appendFile('log.txt', "Rotten Tomatoes URL: " + body.tomatoURL);

    } else{
      console.log('Err')
    }
    //Default
    if(movie === "Mr. Nobody"){
      console.log("-----------------------");
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      //adds text to log.txt
      fs.appendFile('log.txt', "-----------------------");
      fs.appendFile('log.txt', "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
    }
  });

}

function doThis(){
  fs.readFile('random.txt', "utf8", function(error, data){
    var txt = data.split(',');

    spotify(txt[1]);

  });
}

