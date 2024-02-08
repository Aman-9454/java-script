// it is two types(i).Stack, stack memory is used in primitive data type
//  (II).Heap  heap memory is used in non-primitive data type

let myname = "aman kumar";
let anothername = myname;
anothername = "amitraj";
console.log(myname);
console.log(anothername);
// heap memory
let userone = {
    email: "user@gmail.com",
    upi: "aswin@hdfc.com"
}

let userTwo = userone
userTwo.email = "uaer@google.com"
console.log(userone.email);
console.log(userTwo.email);