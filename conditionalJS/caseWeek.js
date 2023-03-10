const prompt = require("prompt-sync")({sigint:true});
let day = parseInt(prompt("Enter The Day Of Week: "));
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESADAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THRUSDAY");      
    case 5:
        console.log("FRIDAY");    
        break;
    case 6:
        console.log("SATURDAY");
        break;
    default:
        console.log("SUNDAY");        
}