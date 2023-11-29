let arr = [1, 2, 3];


function addThemup(value,idx) {
  console.log(value);
  return value * idx;
}

arr.forEach( addThemup )
