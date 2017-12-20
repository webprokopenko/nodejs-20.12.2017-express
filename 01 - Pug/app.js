const express = require('express');
const path = require('path');
const app = express();

// // view engine setup
app.set('views', path.join(__dirname, 'views-pug'));
app.set('view engine', 'pug');

// view engine setup
// app.set('views', path.join(__dirname, 'views-hbs'));
// app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('pages/index', {title: 'My title'});
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: err });
});

const server = app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port ' + server.address().port);
});
