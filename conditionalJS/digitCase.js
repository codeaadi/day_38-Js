const prompt = require("prompt-sync")({ sigint: true });
let number = parseInt(prompt("Enter Single Digit Number: "));
switch (number) {
  case 1:
    console.log("Entered Number in Words: ONE");
    break;
  case 2:
    console.log("Entered Number in Words: TWO");
    break;
  case 3:
    console.log("Entered Number in Words: THREE");
    break;
  case 4:
    console.log("Entered Number in words: FOUR");
    break;
  case 5:
    console.log("Entered Number in words: FIVE");
    break;
  case 6:
    console.log("Entered Number in Words: SIX");
    break;
  case 7:
    console.log("Entered Number in Words: SEVEN");
    break;
  case 8:
    console.log("Entered Number in Words: EIGHT");
    break;
  default:
    console.log("Entered Number in Words: NINE");
}
