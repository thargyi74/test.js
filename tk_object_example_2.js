let objects = { // left hand side is string name, right hand side is value
    propertyTwo : "Property Two",
    $anotherProperty : "Another Property",
    0: "Zero",
}
objects.prop1 = "Property One";

let school = {
    name : "UCSY",
}
console.log("Obj Prop2", objects.propertyTwo);
console.log("obj", objects[0]);