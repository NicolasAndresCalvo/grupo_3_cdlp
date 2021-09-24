const express =  require ('express');
const path = require ('path');
const morgan = require('morgan');

const app = express();
const port = 3000
const publicPath =  path.join(__dirname,'./public');

app.use(express.static(publicPath));

app.use(morgan('tiny'));

app.listen(process.env.PORT || port, () => console.log ('server up at: http://localhost:3000/'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));

app.get('/login', (req,res)=> res.sendFile(path.resolve(__dirname + '/views/login.html')));

app.get('/register', (req, res)=> res.sendFile(path.resolve(__dirname + '/views/register.html')));

app.get('/productcart', (req, res)=> res.sendFile(path.resolve(__dirname + '/views/productCart.html')));

app.get('/productdetail', (req, res)=> res.sendFile(path.resolve(__dirname + '/views/productDetail.html')));