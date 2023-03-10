const prompt=require("prompt-sync")({sigint:true});
let num = parseInt(prompt("ENter Number to check: "));
let isPrime=true;
for(let i=2;i<num;i++){
    if(num%i==0){
        isPrime=false;
        break;
}
}
if(isPrime){
    console.log("Entered Number is Prime");
}else{
    console.log("Entered Number Is Not Prime");
};