//Array Method 1
//push()
//add Elements to array 

console.log("array.push");
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits);

//Array Method 2
//key()
//returns a new Array Iterator object that contains the keys for each index in the array.
console.log("array1.keys()");
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
for (const key of iterator) {
  console.log(key);
}

//Array Method 3
//array.pop()
//removes the last element from an array and returns that element
console.log("array.pop()");
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// Expected output: "tomato"


//Array Method 4
//array.map()
//method creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log("array.map()");
const arr = [1, 4, 9, 16];
// Pass a function to map
const map1 = arr.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]


//Array Method 5
//array.fill()
// method changes all elements in an array to a static value,
// from a start index (default 0) to an end index (default array.length). It returns the modified array.
console.log("array.fill()");
const numb = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(numb.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]


//Array Method 6
//array.flat()
//method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log("array.flat()");
const arrf = [0, 1, 2, [3, 4]];
console.log(arrf.flat());
// Expected output: Array [0, 1, 2, 3, 4]
const arrff = [0, 1, 2, [[[3, 4]]]];
console.log(arrff.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]


//Array Method 7
//array.filter()
//method creates a shallow copy of a portion of a given array, 
//filtered down to just the elements from the given array that pass the test implemented by the provided
console.log("array.filter()");
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


//Array Method 8
//array.length
//return the length of array
console.log("array.length");
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
// Expected output: 4


//Array Method 9
//array.splice()
//method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log("array.splice()");
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]


//Array Method 10
//array.shift()
//method removes the first element from an array and returns that removed element.
console.log("array.shift()");
const ar = [1, 2, 3];

const firstElement = ar.shift();

console.log(ar);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

