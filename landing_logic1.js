// Use 'Submit' button as the selector
let loginbtn = document.querySelector("input[type='submit']");

var i = 0;
const obj = [];

loginbtn.addEventListener("click", () => {
    let inputs = document.querySelectorAll(".inputs input");

    // Assuming you want to capture input values
    obj[i] = {
        nid: inputs[0].value,
        type: inputs[1].value,
        name: inputs[2].value
    };
    if(obj[i].type==="Institution")
    {
        location.replace("/institution.html");
    }
    else{
        location.replace("/student.html");
    }
    i++;
});
