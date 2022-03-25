let fizzTerm = 3;
let buzzTerm = 5

for(let i = 1; i <= 100; i++){
    if(i % fizzTerm == 0 && i % buzzTerm == 0){
        console.log("FizzBuzz");
    }
    else if(i % fizzTerm == 0){
        console.log("Fizz");
    }
    else if(i % buzzTerm == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}