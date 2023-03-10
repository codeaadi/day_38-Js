let random1 = Math.floor(Math.random()*1000);
let random2 = Math.floor(Math.random()*1000);
let random3 = Math.floor(Math.random()*1000);
let random4 = Math.floor(Math.random()*1000);
let random5 = Math.floor(Math.random()*1000);
// for finding tne biggest value
console.log(random1);
console.log(random2);
console.log(random3);
console.log(random4);
console.log(random5);
if((random1>random2)&&(random1>random3)&&(random1>random4)&&(random1>random5)){
    console.log("Biggest number is :" + random1);
}else if((random2>random1)&&(random2>random3)&&(random2>random4)&&(random2>random5)){
    console.log("Biggest Number is :"+random2);
}else if((random3>random1)&&(random3&&random2)&&(random3>random4)&&(random3>random5)){
    console.log("Bigest Number is :"+random3);
}else if((random4>random1)&&(random4>random2)&&(random4>random3)&&(random4>random5)){
    console.log("Biggest Number is :"+random4);
}else("Biggest Number is :"+random5);
