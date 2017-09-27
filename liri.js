//loading in:
//keys.js
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');
var client = new twitter(keys.twitterKeys);
//filesystem
var fs = require('fs');

var nodeArgv = process.argv;
console.log(nodeArgv)
var command = process.argv[2];

var z = "";

for (var i=3; i<nodeArgv.length; i++){
  if(i>3 && i<nodeArgv.length){
    z = z + "+" + nodeArgv[i];
  } else{
    z = z + nodeArgv[i];
  }
}