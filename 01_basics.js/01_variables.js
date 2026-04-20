const accountId = "12345"
let accountEmail = "madhurg0612@gmail.com"
var accountPassword = "Tamasha"
accountCity =  "Noida"


console.log(accountId);

//Used to group multiple vaiables, constants into a table (starts with index 0)
console.table([accountId, accountEmail, accountPassword, accountCity]);

//accountId = "21332" //gives error as constants once declared cannot be modified
accountEmail = "mg@mg.com"
/*
    Do not use var because the issue of block scope and functional scope
*/
accountPassword = "JN"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity]);