import express from 'express';

import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './src/routes';
import React from 'react';
import path from 'path';
import fs from 'fs';


var port = 8000;
var app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});



console.log(__dirname);

app.listen(port, ()=> {
  console.log('Im listening: '+port);
});
