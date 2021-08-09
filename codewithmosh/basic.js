// let greet = (name, last) => {console.log(`"Hello ${name} ${last}"`)}
// greet ("Davis", "Nix" )
// console.log("one" == 1)

// if(a>=6 && a<12){
//     console.log("good morning")
// } else if (a>=12 && a>18){
//     console.log("good evening")
// } else if (a>=18) {
//     console.log("good night")
// } else {console.log("go to bed")}

// console.log(isLandscape(20,15))

// function isLandscape(width, height) {
//     return ((width > height) ? "landscape" : "portrait");
// }

console.log(fizzbuzz(7))
 
function fizzbuzz(input) {
    if ((input%3)==0 && (input%5)==0){
        return("Fizzbuzz")
    }else if((input%3==0) && (input%5!=0)){
        return("Fizz")
    }else if((input%3!=0) && (input%5==0)){
        return("Buzz")
    }else if((input%3!=0) || (input%5!=0) || (input%2!=0) || (input%2)!=1){
        return(input)
    }else return "Not a number"
}