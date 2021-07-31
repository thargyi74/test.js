let objects = {
  // left hand side is string name, right hand side is value
  propertyTwo: "Property Two",
  $anotherProperty: "Another Property",
  0: "Zero",
};
objects.prop1 = "Property One";

let school = {
  name: "UCSY",
};
let param = "size";
let config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config);
console.log({...objects,...school});
console.log("Obj Prop2", objects.propertyTwo);
console.log("obj", objects[0]);
