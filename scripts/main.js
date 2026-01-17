
//store a reference to the <img> in a var
const myImg = document.querySelector("img"); 

//on click, swap image
myImg.addEventListener("click", () => {
    const mySrc = myImg.getAttribute("src"); 
    if (mySrc === "images/fibonacci.webp") {
        myImg.setAttribute("src", "images/thestomper.jpg");
    } else {
        myImg.setAttribute("src", "images/fibonacci.webp");
    }
}); 

//create references for the button and heading 
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//set username to remember at later site visit
function setUserName() {
    const userName = prompt("who the fuck are you: ");
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem("name", userName);
        myHeading.textContent = `oh hey ${userName}, welcome to Himb Shrine`; 
    }
}

//store and/or return username
if (!localStorage.getItem("name")) {
    setUserName();  //call the function we defined
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `oh hey ${storedName}, welcome to Himb Shrine`
}

//add event handler to the button 
myButton.addEventListener("click", () => {
    setUserName();
});

