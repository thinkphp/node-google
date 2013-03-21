var google = require('googler')

var g = google({appid:'no-api-key'})

g.search('MooTools', function(error, response, results){
  console.log(results[3].content) 
})