const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname +'/dist/baloo-app'));  
app.get('/*', (req, res) => {  
  res.sendFile(__dirname +'/dist/baloo-app/index.html');  
});    
app.listen(process.env.PORT || 8080);
