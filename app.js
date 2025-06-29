const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const indexRoutes = require('./routes/index');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
