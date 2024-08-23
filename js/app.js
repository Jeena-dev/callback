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





//  const hof = (callback)=>{
//     const userName = prompt("Please enter your name?")
//     callback(userName)
//  }

// hof(greet);


//Synchronous:in order
//console.log(1);
//console.log(2); first 1 run then 2 run.


//Asynchronous:order is not matter.u can run be4/after dont run 1 wait ku 2 first run ku baz 1.
// move on when it is ready the call it


//1min=60sec .1sec=1000meli second
//setTimeOUt accept 2 things hof and a time.
let first = ()=>console.log("Hello,First");
let second =()=>{
    setTimeout(function(){
        console.log("Hello,second")
    },4000)

}



first();
second();
console.log("Hello,I am here.");




const learnGit = ()=> console.log("Hello,Everyone")

setTimeout(learnGit,3000)





function asynOperation(callback){
 console.log("Operation started ...");

setTimeout(()=> {console.log("Hello,Everyone");
callback();
},2000);

}

asynOperation(()=>{
    console.log("callback executed after operation completion");
})







function displayTime(){
    console.log("Current Time" +new Date().toLocaleTimeString());
}

// setInterval(displayTime,3000)


















