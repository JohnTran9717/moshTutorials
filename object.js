//function createCircle(radius,x,y,color,visible){
//     return{
//         radius,
//         location:{
//             x:x,
//             y:y,
//         },
//         color,
//         visible,
//     draw(){
//         console.log("drawing")
//     }
//     }
// }
// const circle1 = createCircle(15,1,2,"red","visible")
// console.log(circle1.radius)
// let circle2 = createCircle(12,1,2,"blue","no")
// console.log(circle2.radius)

// Constructors
function Circle(radius,[x,y],color,visible){
    this.radius = radius;
    this.location = [x,y];
    this.color = color;
    this.visible = visible;
    this.draw=function(){console.log("drawing")};
}
const circle = new Circle(5,[1,2],'#121213' 'yes');
console.log(circle.location)
console.log(circle.color)
delete circle.location;
circle.location = [4,5];
console.log(circle.location);
