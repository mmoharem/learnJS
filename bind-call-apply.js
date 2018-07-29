//apply

function adddFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = adddFourAges(18, 30, 12, 21);

console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);