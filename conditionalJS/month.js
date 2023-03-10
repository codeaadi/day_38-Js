const prompt = require("prompt-sync")({ sigint: true });
let date1 = prompt("Enter Date :");
let month1 = prompt("Enter Month :");
console.log(date1);
console.log(month1);
if (date1 >= 20 && month1 >= 3 || date1 <= 20 && month1 <= 6) {
  console.log("Entered Values are true");
} else console.log("Entered values Are not true");
