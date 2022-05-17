const jsonServer = require('json-server');
const server = jsonServer.create(); 
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const express =require("express"); 
const port = process.env.PORT || 3000; 

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello world")
});

app.listen( port , ()=>{
    console.log('Example app listening on port ${3000}')
});
//server.use(middlewares);
//server.use(router);
//server.listen(port);