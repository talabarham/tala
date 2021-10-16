//log to console 
console.log("hello..");
console.log({a:1,b:2,c:3});
console.log([1,2,3]);
console.table({a:1,b:2,c:3});
console.error("an error has occurred");
console.warn("an error has occurred");
cosole. time('t');
console.log({a:1,b:2,c:3});
console.log([1,2,3]);
console.timeEnd('t');
//variable,let,const
var n="ahmad";
console.log(n);
var greeting;
console.log(greeting);
//multiword variable
var firstName="rami";
var first_name="ahmad";
var FirstName="sara";
//let
let t="abood";
console.log(t);
//const (Es6)
const namee="ahmad";
console.log(namee);
const person={
name:"tala",
age:19
}
console.log(person);

const number=[1,2,3];
console.log(number);
number.push(4);
//function declartions:
function sayHello(){
    console.log("hello every one");
}
sayHello();
function greet(){
    return"hello";
}
function gree(name){
    return"hello"+name;
}
//reference types
const color=['blue','red'];
console.log(typeof color);
//date
const today=newDate();
console.log(typeof today);
//type converion
let value;
value=3;
console.log(value);
console.log(typeof value);
value=string(3);
console.log(value.length);
//convert string to number
val=Number('3')
console.log(value.toFixed())
