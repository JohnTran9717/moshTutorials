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

// console.log(fizzbuzz(7))
 
// function fizzbuzz(input) {
//     if (typeof input !== "number"){
//         return NaN
//     }
//     if ((input%3)==0 && (input%5)==0){
//         return("Fizzbuzz")
//     }
//     if((input%3==0) && (input%5!=0)){
//         return("Fizz")
//     }
//     if((input%3!=0) && (input%5==0)){
//         return("Buzz")
//     }
//     if((input%2!=0) || (input%2)!=1){
//         return(input)
//     }
// }



checkspeed(180)

function checkspeed(speed){
    let speedLimit=70
    let pointsPerMile =5
    const point=Math.floor((speed-speedLimit)/pointsPerMile)-2
    if (point <= 0){
        console.log("Speed:" + point);
        console.log("You're good")
    }
    if (point>=1 && point<10){
        console.log("Speed:" + point);
        console.log("You're getting a ticket")
    }
    if (point>=10){
        console.log("Speed:"+ point)
        console.log("Your going to jail")
    }
}
