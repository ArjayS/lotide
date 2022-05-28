const flatten = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(array[i]);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
