const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.log(
      `The type of operand for actual is a ${typeof actual}, and the type of operand for expected is ${typeof expected}`
    );
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    console.log(
      `The type of operand for actual is a ${typeof actual}, and the type of operand for expected is ${typeof expected}`
    );
  }
};

const eqObjects = function (object1, object2) {
  const newArray1 = Object.keys(object1); //Establishing a variable will be good because it will be less taxing for the processing of your program. Rather than spreading Object.keys(object1), Object.keys(object2) to each of the lines of the program just establish a variable instead.
  const newArray2 = Object.keys(object2);

  if (newArray1.length !== newArray2.length) {
    return false;
  }

  for (let key of newArray1) {
    if (object1[key] !== object2[key]) {
      //There are no specific order in the object keys so you can compare them as it is and not as an indexed array
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false);

//ATTEMPTS BELOW//

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// const eqObjects = function (object1, object2) {
//   for (let i = 0; i < Object.keys(object1).length; i++) {
//     for (let j = 0; j < Object.keys(object2).length; j++) {
//     }
//   }
// };
// console.log(eqObjects(ab, ba));

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// console.log(ab["a"] === ba["a"]);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// const eqObjects = function (object1, object2) {
//   let x = [];
//   let y = [];
//   for (let i = 0; i < Object.keys(object1).length; i++) {
//     const target1 = Object.keys(object1)[i];
//     return x.push(object1[target1]);
//   }
//   for (let j = 0; j < Object.keys(object1).length; j++) {
//     const target2 = Object.keys(object2)[j];
//     return y.push(object1[target2]);
//   }
//   return x, y;
// };
// console.log(eqObjects(ab, ba));

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// const eqObjects = function (object1, object2) {
//   for (let i = 0; i < Object.keys(object1).length; i++) {
//     for (let j = 0; j < Object.keys(object2).length; j++) {
//       const target1 = Object.keys(object1)[i];
//       const target2 = Object.keys(object2)[j];
//       return object1[target1] !== object2[target2];
//       // if (object1[target1] !== object2[target2]) {
//       //   return false;
//     }
//   }

//   return true;
// };
// console.log(eqObjects(ab, ba));
