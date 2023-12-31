
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const Connection =require('./util/database')
const app = express();
Connection()
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));




app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3004,()=>{
  console.log('Server started')
})
