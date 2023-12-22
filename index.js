const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";

}

function calculate(){
    //display.value = eval(display.value) // the eval takes in 1+2+3 and so on.
    //we need to put this in a try and catch block so that it can handle any error encounterd because if you do 7+ and press = it wont display antthing as the cal is not complete and its suposed to display error
    
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value= "Error";
    }

}