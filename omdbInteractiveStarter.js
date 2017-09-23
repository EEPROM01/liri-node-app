// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created
var fs = require('fs');

fs.readFile('"http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece"', 'utf8', function(err,data){
 if (err){
 	console.log(err)
 	return;
 }

 var things = data.split(",")

 for (var i=0,i < things.length, i++){
 	if(things ='Cinderella'){
 		console.log('Year:')
 		
 	}
 }
})


Year



// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------



// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
var request=require(request);

// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "";
// ...


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request to the queryUrl
// ...

  // If the request is successful
  // ...

  // Then log the Release Year for the movie
  // ...
