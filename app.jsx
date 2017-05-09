import Timeline from './src/Timeline'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

let app = express();

app.set('views', __dirname+"/test");
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
	res.render('index', {});
});

app.listen(3000, function() {
	console.log("Listening");
})
