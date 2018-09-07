export function randomArray(arr){
  let newArray = [],length = arr.length;
  if(!Array.isArray(arr))
  return newArray
  for(let i=0;i<length;i++){  // [1,2,3,4,5,6,7]
    let index = parseInt(Math.random()*arr.length)
    newArray[i] = arr[index];
    arr.splice(index,1)
  }

  return newArray

}
