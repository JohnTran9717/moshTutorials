function createCircle(radius,x,y,color,visible){
    return{
        radius,
        location:{
            x:x,
            y:y,
        },
        color:color,
        visible:visible,
    draw(){
        console.log("drawing")
    }
    }
}