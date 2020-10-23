const express = require('express');
const path = require('path');
const app1 = express();
app1.use(express.static(__dirname + '/dist/baloo-app'));
app1.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+
    '/dist/baloo-app/index.html'));});    
app1.listen(process.env.PORT || 8080);
