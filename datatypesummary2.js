// Primtive

// 7types primtive: string, number, boolean, null, undefined, symboll, bigint
const id = Symbol('1432');
const anotherid = Symbol('1432')
console.log(id===anotherid);


// Reference (Non primitive)

// Array, object, Functions

/**Array**/
const friends = ["Ashwin", "Ashutosh", "Abhinav"]

/***object***/
let myobj = {        //things in curly bracket are called object
    name: "aman",
    age: 21,
}

/**function can be treated as a veriable */
const myFuction = function() {
    console.log("hello coollege");
}
myFuction();

console.log(typeof myFuction);