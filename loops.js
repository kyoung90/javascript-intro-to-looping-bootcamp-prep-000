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

function whileLoop(number){
  while(number !== 0){
    console.log(number);
    number--;
  }
  return "done";
}

function forLoop(array){
  for(var i = 0; i < 25; i++){
    if(i == 1){
      array.push
    }
  }
}
