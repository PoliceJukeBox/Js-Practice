let background = document.getElementById("container");
let button = document.getElementById("add");

let index=0;

//Change background

button.addEventListener("click", function(){

    if(index==0){
        background.style.backgroundColor="black";
        index=1;
    }else{
        background.style.backgroundColor ="white";
        index=0;
    }

});
