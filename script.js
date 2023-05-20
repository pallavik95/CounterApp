let increment = document.getElementById("btn1");
let decrement = document.getElementById("btn2");
let resetvalue = document.getElementById("btn3");
let displaydata = document.getElementById("storedvalue");

//decrement
decrement.addEventListener("click", () => {
        let value = Number(displaydata.innerText);
        if (value > 0) {
            displaydata.innerText = value - 1;
        }
        else {
            alert("decrement not allowed");
        }
    });

//increment 
increment.addEventListener("click", () => {
        let value = Number(displaydata.innerText);
        if (value < 20) {
            displaydata.innerText = value + 1;
        }
        else {
            alert("increament not allowed");
        }
        
    });

// reset value

resetvalue.addEventListener("click", () => {
    displaydata.innerText = 0;
  });