const prompt = require("prompt-sync")({sigint:true});
let number = prompt("Enter Single Digit Number: ");
if(number==1){
    console.log("Entered Number in Words: ONE");
}else if(number==2){ 
    console.log("Entered Number in Words: TWO");
}else if(number==3){
    console.log("Entered Number in Words: THREE");
}else if(number==4){
    console.log("Entered Number in words: FOUR");
}else if(number==5){
    console.log("Entered Number in words: FIVE");
}else if(number==6){
    console.log("Entered Number in Words: SIX");
}else if(number==7){
    console.log("Entered Number in Words: SEVEN");
}else if(number==8){
    console.log("Entered Number in Words: EIGHT")
}else if(number==9){
    console.log("Entered Number in Words: NINE")
}