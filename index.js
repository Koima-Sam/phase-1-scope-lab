// Write your solution in this file!
//declare a global variable
var customerName = 'bob';

//creates a functions that accesses the varible and capitalizes it
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

//Stores the best customer
function setBestCustomer(){
    bestCustomer = 'not bob';
}

//Overwrites the best customer
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}
//Modify least favourite customer
const leastFavoriteCustomer = "Wendy";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Mandy";
}