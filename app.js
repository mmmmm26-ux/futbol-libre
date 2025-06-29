const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const indexRoutes = require('./routes/index');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
