/*
Parks & Streets:
noOfParks = 3
buildDate = 

A) Parks
1- tree density of easch park = totalTrees/parkArea;
2- each park average age = allAges/noOfParks
3- name of parks that have more than 1000 trees

B) Streets
1- total and average length of the town streets
2- size classification of each of this streets
    (tiny, small, normal, big and huge)
    if size is unkhown the size is normal.

    parks(name, total, build);

*/

class Super {
    constructor(name, buildYear) {
        this.name = name;
        this.build = buildYear;
    }
}

class Park extends Super {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear)
        this.area = area; //Km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const treeDensity = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${treeDensity} trees per squre Km`);
    }

    moreTress() {
        if (this.numTrees > 1000) {
            console.log(`the ${this.name} has more than 1000 trees.`);
        }
    }
}

class Street extends Super {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear)
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const streetClass = new Map();
        streetClass.set(1, 'tiny');
        streetClass.set(2, 'small');
        streetClass.set(3, 'normal');
        streetClass.set(4, 'big');
        streetClass.set(5, 'huge');
        console.log(`the ${this.name} street, build in ${this.build} and its size is ${streetClass.get(this.size)}`);
    }
}

const parks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
]

const streets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
]


// var loop = function(items, callback) {
//     items.forEach(item => {
//         callback(item);
//     });
// }

var loop = function(items, callback) {
    for (item of items) {
        callback(item);
    }
}

function calcSum(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return sum / arr.length;
}

function reportParks(p) {

    console.log('------Parks Report--------');
    // 1. Tree denisty of each par
    p.forEach(park => park.treeDensity());

    // 2. Each par average age
    const age = p.map(park => new Date().getFullYear() - park.build);
    const avg = calcSum(age);
    console.log(`each park average age is: ${Math.floor(avg)} years`);


    // 3. Park name having more than 100 treees
    // option 1.
    // p.forEach(park => park.moreTress());

    // option 2.
    /*
    for (park of p) {
        if (park.numTrees < 1000) {
            console.log(`the ${park.name} has more than 1000 trees.`)
        }
    }
    */

    // option 3.
    const i = p.findIndex(park => park.numTrees > 1000);
    console.log(`the ${p[i].name} has more than 1000 trees.`);
};


function reportStreets(s) {
    console.log('------Streets Report--------');
    // 1- total and average length of the town streets

    // 2- size classification
};

reportParks(parks);

reportStreets(streets);



// */