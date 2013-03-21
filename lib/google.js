/**
 * A client for Google AJAX Web Search API on Node.js
 * Copyright(c) 2013 Adrian Statescu <mergesortv@gmail.com>
 * Source covered by the MIT License
 */

var request = require('request'),
    url = require('url'),
    _ = require('underscore'),
    qs = require('querystring');

var Google = function( options ) {

    if( !(this instanceof Google) ) return new Google( options )


    var defaults = {

        //API KEY
        appid: null,

        //Endpoint Google API Search
        endpoint: "http://ajax.googleapis.com/ajax/services/search/web?",

        //SourceLanguage:
        hl: "en",

        //Google Search amount of items response
        rsz: 8,

        //offset results
        start: 0,
 
        //version
        version: "1.0",

        userAgent: "Google Search API Node.js" 
    };

    //merge options passed in with defaults
    this.options = _.extend(defaults, options)
}


Google.prototype.search = function(query, callback, options) {
 
     if(typeof callback != 'function') {

        throw "Erorr: Callback function required!" 
        return
     }

     var opts = this.options;

     if(options != null) {

        opts = _.extend(this.options, options)
     }

     var uri = opts.endpoint + qs.stringify({
               "q": query,
               "rsz": 8,
               "hl": opts.hl,
               "v": opts.version,
               "start": opts.start})

     //for debug
     //console.log(uri);
     
     request({

          uri: uri,
          method: opts.method || "GET",
          headers: {
                  "User-Agent": opts.userAgent
          },
          timeout: 2000

     }, function(error, response, body){

          if(!error && response.statusCode >= 200 && response.statusCode < 300) {

             //the error could be in the body because bing returns 200 for failed requests
             var data = JSON.parse(body)

             callback( error, response, data.responseData.results )
           
          //otherwise should be something interesting here...  
          } else {

            callback(error, response, body) 
          }

     })
}

module.exports = Google

