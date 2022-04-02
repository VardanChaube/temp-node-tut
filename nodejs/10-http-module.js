const http = require('http');

const server= http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('Welcome to homepage');

    }
    else if(req.url=='/about'){
        res.end('Here is our short History');
    }
    else{
    res.end(
    `<h1>OOPS</h1>
    <p>sorry we cannot load your page.</p>
    <a href='/'>back to homepage</a>`);
    }

});

server.listen(5000);