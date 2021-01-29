"use strict";

// // create user menu for interacting with ATM
// // This file will receive data from atm.js and then prompt user. 


const prompt = require('prompt-sync')();
const atm = require('./atm')


  

function validatePerson(){
    console.log("Please enter your pin");
    let inputPin = prompt();
    return inputPin; 
}
validatePerson();

function pinValidated() {
    if(atm.pin(validatePerson) === true){
        mainMenu;
    }
    else if(atm.pin(validatePerson) === false){
        console.log("Pin is incorrect.");
        validatePerson;
    }
    
}
pinValidated();
function mainMenu(){
    console.log("Hello! Please type 'W' to withdraw, 'D' to deposit, 'G' to get your balance, or 'C' to cancel");
    let userInput = prompt();
    switch(userInput){
      case "W":
          console.log("How much would you like to withdraw?");
          const withdrawAmount = prompt();
          atm.withdraw(withdrawAmount);
          anotherTransaction;
      break;
      case "D":
        console.log("How much would you like to deposit?");
        const depositAmount = prompt();
        anotherTransaction;
      break;
      case "G":
          console.log(atm.balance);
      break;
      case "C":
          console.log("Ok. Have a nice day.")
      return
      default:
      return mainMenu();
    }
  }
  
function anotherTransaction() {
    console.log("Do you want to continue to another transaction? Type 'Y' for yes, or 'N' for no");
    const userInput = prompt();
    const validYesNo = yesNo(userInput).trim()
    switch(validYesNo){
        case "Y":
            mainMenu;
        break;
        case "N":
            console.log("Thank you. Have a great day.");
            greetings();    
        break;
        default:
            console.log("Invalid entry. ");
            anotherTransaction()
        }

    function yesNo(input){
        return input.toUpperCase(); 
      }