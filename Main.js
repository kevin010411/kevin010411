var http = require('http');
var url = require('url')
var fs = require('fs')

http.createServer(function(req,res){
    var url_path = url.parse(req.url,true);
    var path_name;
    console.log(url_path.pathname);
    if(url_path.pathname!="/")
        path_name = "." + url_path.pathname + '.html';
    else
        path_name = "." + url_path.pathname + 'HomePage.html';
    console.log(path_name)
    fs.readFile(path_name,function(err,data){
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("File Not Found");
        }
        else
        {
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
        }
        
    })
}).listen(8080);