// var ps=require("fs")
// // ps.mkdirSync("node")
// //ps.writeFileSync("node/write.js","hello")
// ps.appendFileSync("node/write.js","byeee")
// data=ps.readFileSync("node/write.js","utf-8")
// //console.log(data.toString())
// console.log(data)
// ps.renameSync("node/write.js","node/read.js")
// ps.unlinkSync("node/read.js")
// ps.rmdirSync("node")


//read data from file and sort that data in asse using .sort function
// var ps=require("fs")
// ps.writeFileSync("1.txt","50 -1 99 100 20 0 56 78 59")
// data=ps.readFileSync("1.txt","utf-8")
// console.log(data)
// data1=data.split(" ")
// d=data1.sort((a,b)=>a-b)
// console.log(d)

//1.create a dir named student data inside dir, create json file named student.js array read and convert into 
//js and display display student using loop and condition 
const ps=require("fs")
// ps.mkdirSync("student data")
// console.log("directory created")
// let student=[
//     {
//         "name":"rahul","marks":"80"
//     },
//     {
//         "name":"datta","marks":"10"
//     },
//     {
//         "name":"tyagi","marks":"50"
//     }
// ]
// ps.writeFileSync("student data/students.js",JSON.stringify(student))
// console.log("created ")
let data=JSON.parse(ps.readFileSync("student data/students.js","utf-8"))
console.log("studnt list")
console.log(data)
for(s of data){
    if(s.marks>75){
        console.log(s.name+" "+s.marks)
    }
}
