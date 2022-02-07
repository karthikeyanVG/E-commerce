const express = require('express');
const app = express();
const port = 8080;

//home route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//localhost:8080/page2 
app.get('/page2', (req, res) => {
    res.send('Hello World! from page2')
})

//access static files...js,image
app.use(express.static('public'));

//app listen prot
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})