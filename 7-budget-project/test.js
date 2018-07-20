// map()
// arr = [2, 4, 5, 6, 6, 7, 7];

// bythree = arr.map(function(current) {
//     return current * 3
// });

// console.log(bythree);
/////////////////////////////////////

// reminder, Modulas %

// function evenOdd(number) {
//     let reminder = number % 2;
//     if (reminder == 0) {
//         console.log("even");
//     } else if (reminder == Math.round(reminder)) {
//         console.log("odd");
//     } else {
//         console.log("invalid");
//     }
// }

// evenOdd(0);

// (function(j) {
//     var arr, x, z, j;
//     arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     x = 1;

//     // arr.forEach(function(current) {
//     //     forea = current % 2;
//     //     console.log(forea);
//     // });

//     for (var i = 0; i < j; i++) {
//         if (i === 0) {
//             x = 1;
//         } else {
//             x = x + 2;
//         }
//         console.log(x);

//     }
//     //1,3,5,7,9,11,12
//     x = 1 + 2
//     x = x + 2

//     // console.log(3 % 2);

// })(7);

function towerBuilder(nFloors) {
    // build here
    var tower = [];

    var star = '*';
    //   var clot = "'" + star + "'";
    // console.log(clot);

    for (var i = 0; i < nFloors; i++) {

        if (i === 0) {
            star = 1;
        } else {
            star = star + 2;
        }
        console.log(star);
    }

}
towerBuilder(3);