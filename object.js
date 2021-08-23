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
// function Circle(radius,[x,y],color,visible){
//     this.radius = radius;
//     this.location = [x,y];
//     this.color = color;
//     this.visible = visible;
//     this.draw=function(){console.log("drawing")};
// }
// const circle = new Circle(5,[1,2],'#121213', 'yes');
// console.log(circle.location)
// console.log(circle.color)
// delete circle.location;
// circle.location = [4,5];
// console.log(circle.location);
// for(key in circle){
//     console.log(key, circle[key])
// }
// const message= "A thing"

// function Address(streetNumber, street, city, state, zipcode){
//     this.streetNumber= streetNumber;
//     this.street = street;
//     this.city = city;
//     this.state = state;
//     this.zipcode= zipcode;
// }
// let address1 = new Address(111,"North Square","Glendale", "The Fifty First", "10181");
// let address2 = new Address(111,"North Square","Glendale", "The Fifty First", "10181");
// function showAdress(location){

//     for(information in location){
//         console.log(`${information}: ${address1[information]}`)
//     }
// }
// showAdress(address1)
// showAdress(address2)
// function areEqual(address1,address2){
//     if ((address1.streetNumber === address2.streetNumber)&&(address1.street === address2.street)&&(address1.city === address2.city)&&(address1.state === address2.state)&&(address1.zipcode === address2.zipcode)){
//         console.log(true)
//     }else console.log(false)
// }
// function areSame(address1,address2){
//     if(address1 === address2){
//         console.log(true)
//     }else console.log(false)
// }
// areEqual(address1,address2)
// areSame(address1,address2)
// function BlogPost(title,body,author,views,commentsAuthor,CommentsBody,isLive) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = views;
//     this.comments =[commentsAuthor,CommentsBody];
//     this.isLive = isLive;
// }
// let post1= new BlogPost("test","post","John",3,"random person","random post","No")
// console.log(post1)
