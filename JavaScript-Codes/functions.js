// Default Parameter

function area(radius, precision = 2){
    return (Math.PI * radius * radius).toFixed(precision);
}

console.log('Area of circle -> ', area(4));            
console.log('Area of circle -> ', area(4, 3));
console.log('Area of circle -> ', area(4, undefined));
console.log('Area of circle -> ', area(4, 0));

// Empty Return
function func2(){
    return;
}

console.log(func2());

// Multiple line return
function func3()
{
    return (
        1 + 4 + 57 + 8
        + "Hello"
    );
}

console.log(func3());

// Call Back Function

function fun1(){
    console.log('fun1');
}

function fun2(cb){
    console.log('fun2');
    cb();
}

fun2(fun1);

// Another example of Callback Fucntion
function ask(question, yes, no){
    const answer = confirm(question);
    if (answer){
        yes();
    }else{
        no();
    }
}

function showOk() {
    console.log("Ok");
}

function showCancel(){
    console.log('Cancelled');
}

ask("Do you want to delete this user?", showOk, showCancel);

ask(
    "Do you agree to the terms & conditions?", 
    function() {console.log("Yes, I agree!");},
    function() {console.log("No, I don't agree!");}
)

// Call back functions, anonymous functions and arrow functions are majorly used while working with Arrays. 
// This is the basic for ReactJS and NodeJS.
