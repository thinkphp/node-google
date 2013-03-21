# node-google

A client for Google AJAX Web Search API on Node.js

# Installation

```
$ git clone git://github.com/thinkphp/node-google.git
$ npm install node-google
```

Touch app.js and add:

```
var google = require('googler')

var g = google({appid:'your-api-key'})

g.search('MooTools', function(error, response, results){

  console.log(results[3].content) 
})

```

Run the app

```
$ node app.js
```

otherwise 

```
$ mkdir myApp
$ cd myApp
$ npm install googler
$ touch app.js # and add
```

```
var google = require('googler')

var g = google({appid:'asdads'})

g.search('Adrian Statescu', function(error, response, results){
  console.log(results[0].content)
})

```

# License

MIT