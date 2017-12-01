const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
    saveUninitialized: true,
    resave: false,
    name: 'session',
    secret: 'thisIsSuperSecret'
};

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('assets')));
app.use(session(sessionConfig));

app.get('/', (request, response) => {
    response.render('index', { name: name_url(request) });
});

//app.get('/result', (request, response)
  //  response.render('result', { name: result(request) });
//}); 

app.listen(port, () => console.log(`listening on port ${port}`));