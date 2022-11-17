// task 3: on button click transfer to new page with details in json format

class Result { firstName;
lastName;
Email;
DOB;
Age;
Designation;
Address;
constructor(fn, ln, e, dob, age, desig, add){
    this.firstName = fn;
    this.lastName = ln;
    this.Email = e;
    this.DOB = dob;
    this.Age = age;
    this.Designation = desig;
    this.Address = add;
}
};

document.getElementById("enter").onclick = ()=> {
    let fname = document.getElementById("in1").value;
    let lname = document.getElementById("in2").value;
    let email = document.getElementById("in3").value;
    let dob = document.getElementById("in4").value;
    let age = document.getElementById("in5").value;
    let designation = document.getElementById("in6").value;
    let address = document.getElementById("in7").value;
    
    // save details as an obj
    var result = new Result(fname, lname, email, dob, age, designation, address);
    
    // save obj to local storage so that it is accessible to next page
    // JSON.stringify() helps preserve obj format
    localStorage.setItem('result', JSON.stringify(result));
    
    // redirect to next page
    window.location.href = "result.html";
}