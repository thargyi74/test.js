function x(){
    console.log("CallBack Function");
}
function y(x){ //Higher Order Function
    x();
    console.log("higher order function.");
}