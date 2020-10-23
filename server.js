const express = require('express');
const path = require('path');
const app1 = express();
app.use(express.static(__dirname + '/dist'));  
app.all('*', (req, res) => {  
  res.status(200).sendFile(__dirname + '/dist/index.html');  
});    
app1.listen(process.env.PORT || 8080);
