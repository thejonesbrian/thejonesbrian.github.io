/*for(var i = -10; i < 20; i++){
    console.log(i);
}*/

/*for(var i = 10; i <= 40; i++){
    console.log("Answer: ")
    if(i % 2 === 0){
        console.log(i);
    }
}*/

/*for( var i = 300; i <= 333; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}*/

/*for(var i = 5; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
    else {
        console.log(i + " is invalid");
    }
}*/
console.clear();
for(var i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 6 === 0 && i % 9 === 0){
        console.log(i);
    }
    hello();
}
function hello(){
    console.log("Hello");
}