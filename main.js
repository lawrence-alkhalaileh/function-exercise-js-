//  -------------------------- question - 1

// let x = 532443;
// let xStr = x.toString();
// let arr = [];

// for (let i = xStr.length - 1; i >= 0; i--) {
//   arr.push(xStr[i]);
// }

// console.log(arr.join(""));

// ------------------------- question - 1 ..... 2nd method

// function reverseNumber(num) {
//   let reversed = 0;
//   while (num !== 0) {
//     let lastDigit = num % 10;
//     reversed = reversed * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }
//   return reversed;
// }

// let numberToBeReversed = 532443;
// let reversed = reverseNumber(x);
// console.log(reversed);

// ----------------------- question - 2

// let nubmerOfIterations = 15;

// for (let i = 0; i <= nubmerOfIterations; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// ---------------------- question - 3

let original = "Orange";
let arr = original.toLowerCase().split("");
let ascii = [];

for (let i = 0; i < arr.length; i++) {
  let y = arr[i].charCodeAt(0);
  ascii.push(y);
}

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

bubbleSort(ascii);

let final = [];

for (let i = 0; i < arr.length; i++) {
  let y = String.fromCharCode(ascii[i]);
  final.push(y);
}

console.log(final.join(""));

// ---------------------- question - 4

// function dash(number) {
//   let arr = [];
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 == 0 && number[i + 1] % 2 == 0) {
//       arr.push(number[i]);
//       arr.push("-");
//     } else {
//       arr.push(number[i]);
//     }
//   }
//   return arr.join("");
// }

// let x = [0, 2, 5, 4, 6, 8];

// console.log(dash(x));

// ------------------------ question - 5

// function ageChecker(age) {
//   return age < 18 ? "a minor" : "adult";
// }
// console.log(ageChecker(17));
