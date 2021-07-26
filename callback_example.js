console.log("Start");
function cb() {
  console.log("Callback");
}
setTimeout(cb, 1000);

setTimeout(function anotherCallback() {
  console.log("Another Callback");
}, 2000);
console.log("End");
