// var http=require("http")
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'application/json'})
//     const data={
//         subject:"FSD",
//         lecture:4
//     }
//     res.end(JSON.stringify(data))

// }).listen(5000)



// var http=require("http")
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write(req.url+"<br>")
//     req.end("url fetched")


// }).listen(8000)

//creat 1 page with 2 links both pages must contain html type content and add required content
//if user add any other url path,then he or she wll be redirected to page and plain message will be displayed
//page not found
// var h=require("http")
// var server=h.createServer(function(req,res){
// if(req.url=='/'){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write('<h1>Hello</h1>')
//     res.end()

// }
// else if(req.url=='/about'){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write('about page')
//     res.end()
// }
// else{
//     res.writeHead(404,{'content-type':'text/plain'})
//     res.write('page not found')
//     res.end()
// }
// })
// server.listen(5001)

//write js program to load simplem html file from your dir and print its content as html content 
// var h=require("http")
// var url=require("url")
// var fs=require("fs")
// var server=h.createServer(function(req,res){
//     var q=url.parse(req.url,true)
//     fs.readFile("."+q.pathname,function(err,data){
//         if(err){
//             res.writeHead(404,{'content-type':'text/plain'})
//             res.end()
//         }
//         else{
//             res.writeHead(200,{'content-type':'text/html'})
//             res.end(data)
//         }
//     })
// }).listen(5022)

//write node js script to fetch values from url given bellow and display output as asked
//datda must be writen as bellow in file name exam.txt file link must be fetched from url
//read content from the file and send response to server in '/' page but in <h1> tag and red color if sny other pages requisted
//it showes page not found message 

//  var h=require("http")
// var url=require("url")
// var fs=require("fs")
// const url1="https://www.google.com/exam.txt?c1=Hello&c2=Fsd2+t1+test&c3=welcome to"
// const parseUrl=url.parse(url1,true)
// console.log(parseUrl.pathname)
// const c1=parseUrl.query.c1
// const c2=parseUrl.query.c2
// const c3=parseUrl.query.c3
// const filename="."+parseUrl.pathname
// const content=c1+"!\n"+c3+" "+c2+"\n"
// fs.writeFileSync(filename,content)
// var server=h.createServer(function(req,res){
//     if(req.url=='/'){
//         data=fs.readFileSync(filename,'utf-8')
//         res.writeHead(200,{'content-type':'text/html'})
//         res.end("<h1 style=`color:red`>"+data+"</h1>")
//     }
//     else{
//         res.writeHead(404,{'contenr-type':'text/plain'})
//         res.end("page not page")
//     }
// }).listen(1001)


//create http web page on which home page display "welcome to home page" in blue color and font size in 32px 
//login page sourese 1html file from your dir.gallery page reflects 1 image from your dir and ny other request
//shows page not shows message

var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    if (req.url == "/") {
       res.writeHead(200, { "Content-Type": "text/html" });
        res.end('<h1 style="color:blue; font-size:32px;">Welcome to Home Page</h1>');
    } 
    else if (req.url == "/login") {
        let data = fs.readFileSync("1.html", "utf-8"); 
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
       
    } 
    else if (req.url === "/gallery") {
        data1=fs.readFileSync("1.png")
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data1)
        res.end(); 

    } 
    else {
        res.end("Page not found");
    }
});

server.listen(3001)
