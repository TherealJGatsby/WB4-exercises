// Exercise 1
// JavaScript object - creates a file system to hold information

let myInfo = {
    firstName: "Martin Enriquez ",
    address: "123 Main N Street",
    city: "Phoenix",
    state: "Arizona",
    zip: "85008"

        
}
// calling a function named printContact and passing myInfo object into it.
printContact(myInfo);

// inside this function I passed the myInfo object
// then I console logged the properties 
function printContact(myInfo) {
    console.log(myInfo.firstName);
    console.log(myInfo.address);
    console.log(`${myInfo.city}, ${myInfo.state} ${myInfo.zip}`);
  
}