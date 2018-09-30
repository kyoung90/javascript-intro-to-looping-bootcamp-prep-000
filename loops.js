var i = 0;
 
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  do{
    array.pop();
  }while(array.length > 0 && incrementVariable());
  
  return array;
}