// var url=require("url")
// var a="https://video.co:8080/video?doc=-01&hl-en#Hello"
// var b=url.parse(a,true)
// console.log(b)
// process.noDeprecation=true

//write node js script  to fetch the query string from the static url and check if year is leap or not 
// var u=require("url")
// var a="https://localhost:8080/default.html?year=2025&month=feb"
// var q=u.parse(a,true)
// console.log(q)
// qdata=q.query
// console.log(qdata.year)
// if(qdata.year%4==0){
//     console.log("leap")
// }
// else{
//     console.log("not")
//}


//to print query string of url in file(fsd.txt) using es6 callback.
//  var u=require("url")
//  var fs=require("fs")
// var a="https://localhost:8080/default.html?year=2025&month=feb"
// var q=u.parse(a)
// console.log(q)
// qdata=q.query
// fs.writeFile("fsd.txt",qdata,(err)=>{
//     if(err)throw err
//     console.log("file created")
// })


//write a parse url and calculate average of 3 nums passed as query parameter
var u=require("url")
 var fs=require("fs")
var a="https://localhost:8080/test?m1=50&m2=60&m3=70"
var q=u.parse(a,true)
console.log(q)
qdata=q.query
console.log(qdata)
console.log(typeof(qdata.m1))
var m1=parseInt(qdata.m1)
var m2=parseInt(qdata.m2)
var m3=parseInt(qdata.m3)
var avg=(m1+m2+m3)/3
console.log(avg)