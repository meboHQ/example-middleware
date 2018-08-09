const express = require('express');
const morgan = require('morgan');
const Mebo = require('mebo');

// creating an express app
const app = express();

// logging requests to the console
app.use(morgan('dev'));

// running sum action through a middleware: Get: http://localhost:8080/sum?a=1&b=2
app.get('/sum', Mebo.Handler.get('web').middleware('sum', (err, result, req, res, next) => {
  if (err) return next(err);
  res.send(`result: ${result}`);
}));

app.get('/', function (req, res) {
  res.send('Middleware Example');
})

// starting the server
const port = process.env.PORT || 8080; // set our port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!\n`);
});
