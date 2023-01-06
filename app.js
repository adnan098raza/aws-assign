const http=require('http')

http.createServer(function(req,res){
    res.write("Hello node")
    res.end()
}).listen(8080)