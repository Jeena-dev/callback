//define a function
const sayHello = ()=> {
    console.log("Hello, world");
    
}
//calling a function
sayHello();


//statement fun
function greet(name){
    console.log(`Hello, ${name}`);

}
//  greet("John Doe")





 const hof = (callback)=>{
    const userName = prompt("Please enter your name?")
    callback(userName)
 }

hof(greet);









