// const fs=require("fs")
// fs.writeFileSync("test.txt","hello")
// console.log("sync complete")
// console.log("outside")
// fs.writeFile("test.txt","hello",function(err){
//     if(err){
//         console.log("err",err)
//     }
//     else{
//         console.log("complete")
//     }
// })

//write node js script to copy content of one file to another
//from sourse.txt and inserted todestination.txt and read data from destination file at the end 
//perform all this task as a async
// const ps=require("fs")
// ps.writeFile("sourse.txt","hello",(err)=>{if(err)throw err ;console.log("sourse file created")
// ps.readFile("sourse.txt","utf-8",(err,data)=>{if(err)throw err ;console.log(data);console.log("ok")
// ps.writeFile("destination.txt",data,(err)=>{if(err)throw err ;console.log("sourse file2 created")
// ps.readFile("destination.txt","utf-8",(err,data)=>{if(err)throw err ;console.log(data);console.log("ok")}) })})})

//wirte node js script to write text to help.txt after that append the text "you are appending" to the same 
//file after that read the file and print content on console. after finishing read operation print the line
//"thanks "

// const ps=require("fs")
// ps.writeFile("help.txt","hello",(err)=>{if(err)throw err ;console.log("sourse file created")
// ps.readFile("help.txt","utf-8",(err,data)=>{if(err)throw err ;console.log(data);console.log("ok")
// ps.writeFile("help.txt","appending",(err)=>{if(err)throw err ;console.log("sourse file2 created")
// ps.readFile("help.txt","utf-8",(err,data)=>{if(err)throw err ;console.log(data);console.log("ok")
// })})})})


// var em=require("events")
// var ee=new em()
// ee.on("connection",function(){
//     console.log("conn suc")
//     ee.emit("data received")
// })  
// ee.on("data received",function(){
//     console.log("data received succ")
// })
// ee.emit("connection")
// console.log("thanks")


//1.registering multi event lisner for different events(myEvent1,myEvent2).
//2. removing a specific event listener (removeListener) for myEvent2.
//3. removing all the listeneres associated with myListener1.
//trigger eventrs and observe which listener ececute


// var em=require("events")
// var ee=new em()
// var fun1=(msg)=>{
//     console.log("msg from 1"+msg)
// }
// var fun2=(msg)=>{
//     console.log("msg from 2"+msg)
// }
// var fun3=(msg)=>{
//     console.log("msg from 3"+msg)
// }
// ee.on("myEvent1",fun1)
// ee.on("myEvent2",fun2)
// ee.on("myEvent1",fun3)
// ee.on("myEvent2",fun3)

// ee.removeListener("myEvent2",fun2)
// ee.removeAllListeners("myEvent1")
// ee.emit("myEvent2","LJU")
// ee.emit("myEvent1","LJIET")


//create 2 listener for a common event.print number of events associated with an emiter.remove 1 listener and call 
// remaining listener again.also print number of remaining listerneer

// var em=require("events")
// var ee=new em()
// var list1=function(){
//     console.log("listener 1 exce")

// }
// var list2=function(){
//     console.log("listener 2 exce")   

// }
// ee.on("conn",list1)
// ee.on("conn",list2)
// let c=ee.listenerCount("conn")
// console.log("count1"+c)
// ee.removeListener("conn",list1)
// ee.removeAllListeners("conn")
// c=ee.listenerCount("conn")
// console.log("count again"+c)
// ee.emit("conn")


//to handle event to write data in file append data in file and then read the data from the file and display in console.
//use events and async fs module.

// var em=require("events")
// var ee=new em()
// var fs=require("fs")
// ee.on("write",function(){
//     fs.writeFile("a.txt","Hello",(err)=>{
//         if(err)throw err
//         console.log("file created")
//         ee.emit("append")

//     })
// })
// ee.on("append",function(){
//     fs.appendFile("a.txt","hiii",(err)=>{
//         if(err)throw err
//         console.log("file appended")
//         ee.emit("read")
//     })
// })
// ee.on("read",function(){
//     fs.readFile("a.txt","utf-8",(err,data)=>{
//         if(err)throw err
//         console.log("file readed"+data)
//     })
// })
// ee.emit("write")


//create a folder named abc 2.create a file xyz.txt and enter data into it append data to that file and print message
//read the data from the file and print message in console.copy content from xyz.txt to pqr.txt delete the file xyz.txt
//print all operations perform. using sync

var em=require("events")
var ee=new em()
var fs=require("fs")
ee.on("write",function(){
    fs.writeFileSync("xyz.txt","hello")
    console.log("succ")
    ee.emit("read")
})
ee.on("read",function(){
    fs.readFile("xyz.txt","utf-8",(err,data)=>{
        if(err)throw err
        console.log("file readed"+data)
        ee.on("copy")
    })
})
ee.on("copy",function(){
    a=fs.copyFileSync("xyz.txt")
    fs.appendFileSync("pqr.txt",a)
})
ee.emit("write")


