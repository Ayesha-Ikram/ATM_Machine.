#! /usr/bin/env node
import inquirer from "inquirer";
//Assign user Balance & pin
let balance = 10000;
let pin = 1226;
// Take pin from user
const pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "userPin",
        message: "Enter Your PIN :"
    }
]);
if (pinAnswer.userPin === pin) {
    console.log("Correct Pin Code!!!");
}
else {
    console.log("Incorrect Pin Code!!! ");
}
// Select an option from user
const options = await inquirer.prompt([
    {
        type: "list",
        name: "userOption",
        message: "Select an Option : ",
        choices: ["Withdraw", "Fast Cash", "Balance inquiry", "Exit"],
    }
]);
//If the user chooses "Withdraw" option
if (options.userOption === "Withdraw") {
    // Prompt the user to enter the withdrawal amount
    const amountResponse = await inquirer.prompt([
        {
            type: "number",
            name: "userAmount",
            message: "Enter Your Amount :",
        },
    ]);
    // Extract the withdrawal amount from the response
    const userAmount = amountResponse.userAmount;
    if (userAmount > balance) {
        console.log("Invalid Amount.");
    }
    else {
        // Perform the withdrawal transaction
        console.log("Transaction Successful!!!");
        balance -= amountResponse.userAmount;
        console.log(`Your remaining Balance is : ${balance}`);
    }
}
// If the user chooses "Fast Cash" option
if (options.userOption === "Fast Cash") {
    const amountResponse = await inquirer.prompt([
        {
            type: "list",
            name: "userAmount",
            message: "Select Your Amount:",
            choices: ["1000", "2000", "3000", "4000", "5000"],
        },
    ]);
    console.log("Transaction Successful!!!");
}
// If the user chooses "Balance inquiry" option
if (options.userOption === "Balance inquiry") {
    console.log(` Your remaining Balance is ${balance}`);
}
//If the user chooses "Exit" option
if (options.userOption === "Exit") {
    console.log(" ");
}
