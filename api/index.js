import express from 'express';

const app = express();
const PORT = 9001;

app.get('/', function(req, res){
    return res.send('The API is working');
})

app.listen(PORT, (req, res) => {
    console.log(`server is running on PORT` ${PORT}
})