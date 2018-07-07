// function factorial(x) {
//     if (x === 0) {
//         return 1;
//     }
//     return x * factorial(x - 1);
// }
// console.log(factorial(5));

// function factorial(x) {
//     if (x < 0) {
//         return -1;
//     } else if (x === 0) {
//         return 1;
//     } else {
//         return x * factorial(x - 1);
//     }
// }
// console.log(factorial(-5));

// 5 * 4
// 20 * 3
// 60 * 2
// 120 * 1
// 120 

// function factorial(num) {

//     var result = num;

//     if (num === 0 || num === 1) {
//         return 1;
//     }

//     while (num > 1) {
//         num--;
//         result = result * num;
//     }
//     console.log(result);

// }

// factorial(5);

function forFact(num) {
    if (num === 0 || num === 1)
        return 1;

    for (var i = num - 1; i >= 1; i--) {

        num = num * i;

    }
    return num;
}

document.write(forFact(5));