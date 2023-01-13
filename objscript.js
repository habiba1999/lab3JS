const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
    motor: "celender",
  };

//method 1 
//Object.keys()
//static method returns an array of keys in object
console.log("Object.keys()");
console.log(Object.keys(myCar));


//method 2
//Object.entries()
// reterive key and value of object
console.log("Object.entries()");
for (const [key, value] of Object.entries(myCar)) {
    console.log(`${key}: ${value}`);
  }


//method 3
//Object.assign
//copy value from object to another

console.log("Object.assign()");
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(target);

//method 4
//Object.freeze()
/* A frozen object can no longer be changed: new properties cannot be added, 
existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed,
 and the object's prototype cannot be re-assigned.freeze() returns the same object that was passed in.*/

console.log("Object.freeze()");
const obj = {prop: 42};
Object.freeze(obj);
obj.prop = 33;
// Throws an error in strict mode
console.log(obj.prop);

//method 5
//Object.isFrozen()
//static method determines if an object is frozen.
console.log("Object.isFrozen()");
const object1 = {property1: 42};
console.log(Object.isFrozen(object1));
// Expected output: false
Object.freeze(object1);
console.log(Object.isFrozen(object1));
// Expected output: true

//method 6
//Object.create()
//create new object using an existing object as the prototype of the newly created object.
console.log("Object.create()");
const newObject = Object.create(myCar);
console.log("New object.motor -> "+newObject.motor);

//method 7
// Object.getOwnPropertyNames()
//return an object properities as array
console.log("Object.getOwnPropertyNames()");
console.log(Object.getOwnPropertyNames(myCar));

//method 8
//Object.getOwnPropertyDescriptor
//Check if properity is exist or not and can check it's value
console.log("Object.getOwnPropertyDescriptor()");
const descriptor1 = Object.getOwnPropertyDescriptor(myCar,'make');

console.log(descriptor1.configurable);
// Expected output: true
console.log(descriptor1.value);
// Expected output: Ford


//method 9
//Object.is()
//static method determines whether two values are the same value
console.log("Object.is()");
console.log(Object.is("foo", "foo")); // true
console.log(Object.is("foo", "bar")); // false

//method 10
//Object.hasOwn()
//check if object has specific property

console.log("Object.hasOwn()");
console.log(Object.hasOwn(myCar,"motor"));
