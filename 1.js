var a={
            "name" : "Test",
            "age" : 20,
            "ispass" : false,
            "address" : {
                "city" : "Ahmedabad",
                "zip" : 12345
            },
            "subject" : ["Maths","Science"],
            "year" : null
        }
        console.log(a)
        console.log(a.age)
        console.log(a["address"])
const data = require("./1.json");
console.log(a)

let obj=JSON.parse('{"var1":"LJ","var2":"Uni."}');
console.log(obj)
console.log(obj.var1+" "+obj.var2);

let result=JSON.stringify({var1:"LJ",var2:"Uni"})
console.log(result)
console.log(result.var1+" "+result.var2)

let update=JSON.parse(result)
console.log(update)

let person = {
    name: "XYZ",
    age:22,
    city: "Rajkot",
}
person.marks=30
console.log(person)
person["city"]="Ahmedabad"
console.log(person)
let key="age"
person[key]=25,
console.log(person)