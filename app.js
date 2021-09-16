const express =  require ('express');
const app = express();
const path = require ('path')

const pathPublico =  path.join(__dirname,'./public');

app.use(express.static(pathPublico));

app.listen(3001, () => console.log ('server up at: http://localhost:3001/'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));