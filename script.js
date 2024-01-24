var color = ["red", "green", "cyan", "black", "voilet", "blue", "yellow", "purple", "orange", "lightgreen", "lemon"];
var shapes = ["square", "rectangle", "triangle", "circle"];
var index = 0;

var cShape = document.getElementById("change-shape");
var cColor = document.getElementById("change-color");
var main = document.querySelector('.inner');

cShape.addEventListener("click", changeShape);
cColor.addEventListener("click", changeColor);

function changeColor() {
    if (index === color.length) {
        index = 0;
    }
    document.getElementById("circle").style.backgroundColor = color[index];
    index++;
}

 function changeShape() {
        if(index==0){
          main.classList.toggle(shapes[index]);
         //main.classList.toggle(shapes[index+1]);
      }else if(index<shapes.length-1){
        main.classList.toggle(shapes[index+2]);
         main.classList.toggle(shapes[index-1]);
      }else{
        
        main.classList.toggle('square');
      }

      if(index==shapes.length-1){
        index=0;
      }else{
        index++;
      }
     
     
 }


  
