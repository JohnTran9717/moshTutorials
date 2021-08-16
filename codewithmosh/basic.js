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



// checkspeed(180)

// function checkspeed(speed){
//     let speedLimit=70
//     let pointsPerMile =5
//     const point=Math.floor((speed-speedLimit)/pointsPerMile)-2
//     if (point <= 0){
//         console.log("Speed:" + point);
//         console.log("You're good")
//     }
//     if (point>=1 && point<10){
//         console.log("Speed:" + point);
//         console.log("You're getting a ticket")
//     }
//     if (point>=10){
//         console.log("Speed:"+ point)
//         console.log("Your going to jail")
//     }
// }
//  showNumbers(10)
// function showNumbers(limit){
//     if(typeof limit !== "number"){
//         console.log(NaN)
//     }else if(limit%2==0){
//         console.log( limit+" " +'"Even"')
//     }else {console.log(limit+' '+'"Odd"')}
// }
// displayEvenOrOdd(10)
// function displayEvenOrOdd(limit){
//     for(i=1; i<=limit; i++){
//         if(i%2==0){
//             console.log(i+' '+'"Even"')
//         }else{
//             console.log(i+' '+'"Odd"')
//         }
//     }
// }
// falsey undefined null '' false 0 NaN
//truthy intergers strings true

// const arrayInput =[1,2,3,4,5,true]
// console.log(countTruthy())
// console.log(arrayInput.length)
// function countTruthy(){
//     let count= 0;
//     for(let value of arrayInput){
//         if(value){count++}
//     }
//     return count
// }
// let movie ={
//     title:'Another Movie',
//     releaseDate:'never',
//     rating:'unknown',
//     director:'No one',
//     length:3
// }
// showProperties(movie)
// function showProperties() {
//     for(let obj in movie){
//         if(typeof movie[obj] == 'string'){
//             console.log(obj, movie[obj])
//         }
//     }
// }
// console.log(sum(10))
// function sum(limit){
//     let total = 0;
    
//     for(let i=1; i<=limit; i++){
//         if(i%3==0)
//             total+=i
//         if(i%5==0)
//             total+=i
//     }

//     console.log(total)
//     }
// let marks=[80,80,60,100]
//     let total=0;
//     let dividor=0;
//     calcGrades(marks)
// function calcGrades(){
//  for(let score of marks){
//         total+= score;
//         dividor++;
//     }
// }
// grade()
// function grade(){
//     let classGrade;
//     average= total/dividor;
//     if (average<=59) classGrade="F";
//     if (average>59) classGrade="D";
//     if (average>69) classGrade="C";
//     if (average>79) classGrade="B";
//     if (average>89) classGrade="A";
//     let total=0;
//     let dividor=0;
//     console.log(average)
//    console.log(classGrade)
// }
// showStars(10)
// function showStars(rows) {
//     for(let row=1; row<=rows; row++){
//         let pattern="";
//         for (let i=0; i<rows; i++) {
//         pattern+="*"; 
//         console.log(pattern);
//         }
//         break
//     }
// }
// showPrimes(50)
// function showPrimes (limit) {
//     for(let currentNumber=2; currentNumber <= limit; currentNumber++) isPrime(currentNumber)
// }
// function isPrime(number){   
//         for(let factor=2; factor < number; factor++)
//             if(number%factor===0)
//                 return false
//         console.log(number)
// }
