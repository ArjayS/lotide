const middle = function (array) {
  let newArray = [];
  if (array.length <= 2) {
    newArray.push();
  } else if (array.length % 2 === 0) {
    let midEven = array.length / 2;
    for (let i = 0; i < array.length; i++) {
      if (i === midEven || i === midEven - 1) {
        newArray.push(array[i]);
      }
    }
  } else if (array.length % 2 !== 0) {
    let midOdd = Math.floor(array.length / 2);
    for (let j = 0; j < array.length; j++) {
      if (j === midOdd) {
        newArray.push(array[j]);
      }
    }
  }
  return newArray;
};

////////////////////////////////////////////////////

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
