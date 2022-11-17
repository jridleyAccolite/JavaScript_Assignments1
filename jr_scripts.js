// task 1: button to set field entries as name

document.getElementById("setName").onclick = ()=>{
    let fname = document.getElementById("in1").value;
    let lname = document.getElementById("in2").value;
    document.getElementById("name").innerHTML = `<h1>Name: ${fname} ${lname}</h1>`;
};

// task 2: add onHover event to change background colour

document.getElementById("name").onmouseover = ()=>{
    console.log("mouse over result");
    document.getElementById("background").setAttribute("style", "background-color: #eef8ab");
};

document.getElementById("name").onmouseleave = ()=>{
    console.log("mouse over result");
    document.getElementById("background").setAttribute("style", "background-color: white");
};



