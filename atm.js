"use strict";

// create function to get balance (getBalance)
// create function to withdraw 
// create function to deposit
// create function to validate pin (validatePin)
// export all function to index.js file for interaction
// This file will collect data from accounts.js, receive calls from index.js, and then pass data back to index.js

const accounts = require('./accounts');


function getBalance(){
    console.log(accounts.balance); 
}

function withdraw(moneyOut){
    accounts.balance -= moneyOut;
}

function deposit(moneyIn){
    accounts.balance += moneyIn;
}

function validatePin(importedPinNum){

    if(importedPinNum === accounts.pinNum){
        return true;
    }
    else{
        return false;
    }
}

module.export.balance = getBalance;
module.export.withdraw = withdraw;
module.export.deposit = deposit;
module.export.pin = validatePin;



