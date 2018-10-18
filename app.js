const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
var exphbs = require('express-handlebars');


mongoose.connect(process.env.MONGODB_URI || 'mongod://localhost/intensive-website', {useNewUrlParser: true});

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.use(bodyParser.urlendcoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.json());


app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port 3000!')
})


module.exports = app;
