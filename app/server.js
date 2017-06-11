const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./routing/apiroutes.js')(app); 
require('./routing/htmlroutes.js')(app);

app.listen(process.env.PORT || 3030, function(){
	console.log('App listening on PORT ' + process.env.PORT);
});

