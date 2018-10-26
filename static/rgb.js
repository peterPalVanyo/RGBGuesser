var numSquers = 6;
var colors = [];
var pickedColor;
var rgbDisplay = document.getElementById("rgbDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var head = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

resetButton.addEventListener("click", function () {
    reset();
})

function init() {
    //mode button setter
    setUpModeButtons();

    //squeres setter
    setUpSqueres();

    reset();
}

// action the mode
function setUpModeButtons() {
    for(i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Könnyű" ? numSquers = 3 : numSquers = 6;
            reset(numSquers);
        })
    }
}

// action the squeres
function setUpSqueres() {
    for(i=0; i<squares.length; i++){
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor){
                messageDisplay.textContent = "Helyes válasz!!";
                changeColor(pickedColor);
                resetButton.textContent = "Mehet új menet?"
                head.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Rossz válasz. Próbálkozz újra!";
            }
        })
    }
}

// nonaction scene depend on the numSquers: and there is a default
function reset(){
    colors = generateRandomColors(numSquers);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    resetButton.textContent = "Új színeket akarok!";
    messageDisplay.textContent = "";
    for(i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    head.style.backgroundColor = "steelblue";
}

//////////////////////////////////////////////////////////////////just 4 color fussing and start

// nonaction for squeres
function changeColor(color) {
    for(i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


//pick a random from the generated colors array
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//fill an array with random colors
function generateRandomColors(num) {
    var arr = [];
    for(i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

//make a random color rgb and return string
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

init();