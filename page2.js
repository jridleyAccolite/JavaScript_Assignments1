// receieve data from local storage, JSON.parse() decodes frmo string to obj
var details = JSON.parse(localStorage.getItem('result'));

// remove the data from local storage to keep tidy
localStorage.removeItem('result');

let obj2 = {'state': 'test', 'country': 'test', 'postcode': '123123' };

// merge the two objects with the spread operator
let merged = {
    ...details,
    ...obj2
};

// print data to console
console.log(merged);

let {firstName, lastName, Email, DOB, Age, Designation, Address, state, country, postcode} = merged;

document.getElementById("form-details").innerHTML = `<p>First Name: ${firstName}<br>
Last Name: ${lastName}<br>Email: ${Email}<br>DOB: ${DOB}<br>Age: ${Age}
<br>Designation: ${Designation}<br>Address: ${Address}<br>Country: ${country}<br>State: ${state}
<br>Postcode: ${postcode}`;