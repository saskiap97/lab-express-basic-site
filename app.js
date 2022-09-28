const express = require('express');

const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// app.get(path, callback);

app.get('/', (request, response, next) => {
  console.log('this is the homepage');

  // response.send("hello world");

  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
  console.log('this is the about page');
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
  console.log('this is the contact page');
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response, next) => {
  console.log('this is the gallery page');
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(5500, () => console.log('My first app listening on port ! '));
