var data1={image:"./Rohit-Sharma2.png",name : "Rohit sharma",designation:"Indian cricket team skipper"};
var data2={image: "./surya.avif",name : "surya kumar yadav",designation:"right hand batsman"};
var isdata1= true;
var displaydata;
var changemypic = function(){
    if (isdata1){
        displaydata=data2;
        isdata1 = false;
    }
    else{
        displaydata = data1;
        isdata1=false;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesig").innerHTML=displaydata.designation;
}