//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
express.static();

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/friends/src/index.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });