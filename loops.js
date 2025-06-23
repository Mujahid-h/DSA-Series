// let pr = prompt("Enter a number: ");
// if (pr === null || pr.trim() === "") {
//   console.log("No input provided.");
// } else {
//   let num = parseInt(pr);
//   if (isNaN(num)) {
//     console.log("Invalid input. Please enter a number.");
//   } else {
//     if (num <= 0) {
//       console.log("Negative numbers and  0 are not allowed.");
//     } else {
//       let fact = 1;
//       for (let i = 1; i <= num; i++) {
//         fact *= i;
//       }
//       console.log(`The factorial of ${num} is ${fact}.`);
//     }
//   }
// }

// ==============================================================================

// let pr = prompt("Enter a number: ");
// let pr = "27";

// if (pr === null || pr.trim() === "") {
//   console.log("No input provided.");
// } else {
//   let num = parseInt(pr);
//   if (isNaN(num)) {
//     console.log("Invalid input. Please enter a number.");
//   } else {
//     if (num <= 0) {
//       console.log("Negative numbers and  0 are not allowed.");
//     } else {
//       var factors = [];
//       for (let i = 1; i <= Math.floor(num / 2); i++) {
//         // Check if i is a factor of num
//         if (num % i === 0) {
//           factors.push(i);
//         }
//       }
//       factors.push(num); // Include the number itself
//       console.log(`The factors of ${num} are: ${factors.join(", ")}`);
//     }
//   }
// }

// ==============================================================================

// let pr = "37ss";

// if (pr === null || pr.trim() === "") {
//   console.log("No input provided.");
// } else {
//   let num = parseInt(pr);
//   if (isNaN(num)) {
//     console.log("Invalid input. Please enter a number.");
//   } else {
//     if (num <= 0) {
//       console.log("Negative numbers and  0 are not allowed.");
//     } else {
//       console.log(isPrime(num));
//     }
//   }
// }

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// ==============================================================================

// let pr = "12345";

// if (pr === null || pr.trim() === "") {
//   console.log("No input provided.");
// } else {
//   let num = parseInt(pr);
//   if (isNaN(num)) {
//     console.log("Invalid input. Please enter a number.");
//   } else {
//     if (num <= 0) {
//       console.log("Negative numbers and  0 are not allowed.");
//     } else {
//       var sum = 0;
//       while (num > 0) {
//         let remainder = num % 10; // Get the last digit
//         sum += remainder; // Add it to the sum
//         num = Math.floor(num / 10); // Remove the last digit
//       }
//       console.log(`The sum of the digits is: ${sum}`);
//     }
//   }
// }

// ==============================================================================

// let pr = "12345";

// if (pr === null || pr.trim() === "") {
//   console.log("No input provided.");
// } else {
//   let num = parseInt(pr);
//   if (isNaN(num)) {
//     console.log("Invalid input. Please enter a number.");
//   } else {
//     if (num <= 0) {
//       console.log("Negative numbers and  0 are not allowed.");
//     } else {
//       var rev = 0;
//       while (num > 0) {
//         let remainder = num % 10; // Get the last digit
//         rev = rev * 10 + remainder;
//         num = Math.floor(num / 10); // Remove the last digit
//       }
//       console.log(`The reverse of the number is: ${rev}`);
//     }
//   }
// }

// ==============================================================================

// let n = "146";

// let num = parseInt(n);

// if (isNaN(num)) console.log("Invalid input. Please enter a number.");
// else {
//   if (num <= 0) console.log("Negative numbers and 0 are not allowed.");
//   else {
//     var copy = num;
//     sum = 0;
//     while (num > 0) {
//       let rem = num % 10;
//       var fact = 1;
//       for (let i = 1; i <= rem; i++) {
//         fact *= i;
//       }
//       console.log(`The factorial of ${rem} is ${fact}.`);
//       num = Math.floor(num / 10);
//     }
//     sum = sum + fact;

//     if (sum === copy) {
//       console.log(`${copy} is a strong number.`);
//     } else {
//       console.log(`${copy} is not a strong number.`);
//     }
//   }
// }

// ==============================================================================

const random = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess = -1;

console.log(random);

while (guess !== random && attempts < 5) {
  let guess = parseInt(
    prompt(`Guess a number between 1 and 100: ${attempts + 1}/5`)
  );

  if (isNaN(guess)) {
    console.log("Invalid input. Please enter a number.");
    continue;
  }

  if (guess === random) {
    console.log(
      ` 🎉 Congratulations! You've guessed the number ${random} in ${attempts} attempts.`
    );
  }
  attempts++;

  if (attempts < 5) {
    console.log(
      guess < random ? "Too low! Try again." : "Too high! Try again."
    );
  } else {
    console.log(
      `❌ Sorry, you've used all attempts. The number was ${random}.`
    );
  }
}
