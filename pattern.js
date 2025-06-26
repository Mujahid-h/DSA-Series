// Import the module
import promptSync from "prompt-sync";

// Initialize the prompt function
const prompt = promptSync();

// Use it
let n = parseInt(prompt("Enter a number: "));

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for (let i = 1; i <= n; i++) {
//     for (let j = 1 ; j <= n ; j++) {
//         process.stdout.write("* ");
//     }
//     console.log("");
// }

// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 1; i <= n; i++) {
//     for (let j = 1 ; j <= i ; j++) {
//         process.stdout.write("* ");
//     }
//     console.log("");
// }

// A
// A B 
// A B C 
// A B C D 
// A B C D E 

// for (let i = 1; i <= n; i++) {
//     let asciiCode = 65; // ASCII code for 'A'
//     for (let j = 1 ; j <= i ; j++) {
//         process.stdout.write(String.fromCharCode(asciiCode) + " ");
//         asciiCode++; // Increment to get the next letter
//     }
//     console.log("");
// }

// * * * * *
// * * * *
// * * *
// * *
// *

// for (let i = 1; i <= n; i++) {
//   for (let j = i; j <= n; j++) {
//     process.stdout.write("* ");
//     // console.log("* ");
//   }
//   console.log("");
// }

//         *     
//       * *
//     * * *
//   * * * *
// * * * * *

// for (let i = 1; i <= n; i++) {
//   // Print leading spaces
//   for (let j = i; j < n; j++) {
//     process.stdout.write("  "); // 2 spaces for better alignment and 1 for triangle pattern 
//   }

//   // Print stars with a space
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }

//   // Move to next line
//   console.log("");
// }

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// for (let i = 1; i <= n; i++) {
//   // Print leading spaces
//   for (let j = 1; j < i; j++) {
//     process.stdout.write("  "); // 2 spaces for better alinment and 1 space for downwards triangle
//   }

//   // // Print stars with a space
//   for (let k = i; k <= n; k++) {
//     process.stdout.write("* ");
//   }

//   // Move to next line
//   console.log("");
// }


// *       *
//   *   * 
//     * 
//   *   * 
// *       *


for(let i = 1 ; i <= n ; i ++) {
    for (let j = 1 ; j<= n ; j++) {
        if (i === j || i + j === n + 1) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  "); 
        }
    }
    console.log(" ")
}
