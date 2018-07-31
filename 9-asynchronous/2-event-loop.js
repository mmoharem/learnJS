///////////////////// The callback hell /////////
/*
function getRecipe() {
    setTimeout(() => {
        const recipeID = [533, 883, 432, 974];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = { title: 'French tomato pasta', publisher: 'Jonas' };
            console.log(`${id}: ${recipe.title}`);
        }, 1500, recipeID[2]);

        setTimeout(publisher => {
            const recipe2 = {
                title: 'Italian Pizza',
                publisher: 'Jonas'
            };
            console.log(recipe2);
        }, 1500, recipe.publisher);

    }, 1500);
}
getRecipe();
*/

/////////////////// Promises ////////////
// Promises:
// 1. Object that keeps track about whether a certain event has happend already or not.
// 2. Determines what happens after the event has happend.
// 3. Implements the consept of a future value that we're expecting.

// (Pending) --->Event Happens---->  (Settled/Resolved) ---> (Fulfilled) or (rejected)

// new Promise(the executer fn(resolve, reject) => {
//       //...ajax call or async code 
// });

// resolve fn() is for the promise success.
// reject fn() is for the promise fail.

// There is two methods on all the promis object (then) and (catch) methods.

/*
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {

    return new Promise((resolve, reject) => {

        setTimeout(ID => {
            const recipe = {
                title: 'French tomato pasta',
                publisher: 'Jonas'
            };

            resolve(`${ID}: ${recipe.title}`);

        }, 1500, recID);
    });
};

const getRecipe2 = recPub => {

    return new Promise((resolve, reject) => {

        setTimeout(publisher => {
            const recipe2 = {
                title: 'Italian Pizza',
                publisher: 'Jonas'
            };

            resolve(recipe2);
        }, 1500, recPub);
    });
};

getIDs
    .then(IDs => {
        console.log(IDs);
        return getRecipe(IDs[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRecipe2(recipe.publisher);
    })
    .then(recipe2 => {
        console.log(recipe2);
    })
    .catch(error => {
        console.log(error);
    });
    */

///////////// Asunc/Await ////////////////

/*
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {

    return new Promise((resolve, reject) => {

        setTimeout(ID => {
            const recipe = {
                title: 'French tomato pasta',
                publisher: 'Jonas'
            };

            resolve(`${ID}: ${recipe.title}`);

        }, 1500, recID);
    });
};

const getRecipe2 = recPub => {

    return new Promise((resolve, reject) => {

        setTimeout(publisher => {
            const recipe2 = {
                title: 'Italian Pizza',
                publisher: 'Jonas'
            };

            resolve(recipe2);
        }, 1500, recPub);
    });
};

const getRecipeAw = async function getRecipeAw() {
        const IDs = await getIDs;
        console.log(IDs);


        const recipe = await getRecipe(IDs[2]);
        console.log(recipe);

        const recipe2 = await getRecipe2(recipe.publisher);
        console.log(recipe2.publisher);

        return recipe;

    }
    // getRecipeAw();

// Broblem:
// const ret = getRecipeAw;
// console.log(ret);

// Solve:
// Solution 1.
// async function bobo() {
//     const ret = await getRecipeAw();
//     console.log(ret);
// }
// bobo();

// Solution 2.
getRecipeAw().then((ret) => {
    console.log(ret);
})

*/

////////////AJAX with Fetch & Promises //////////

// Using metaweather.com api

// fetch('https://www.metaweather.com/api/location/2487956/');

// cross origin resource sharing (cors):
//  to allow devaloper share api on other server

// also using proxy like (crossorigin.me)

/*
function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        // Fetch: gets data and return promis
        .then(result => {
            return result.json();
        })
        .then(data => {
            const today = data.consolidated_weather[0];
            console.log(`Temperature in ${data.title} stay betwee ${today.min_temp} and ${today.max_temp}`);

        })
        .catch(error => console.log(error));
}

getWeather(2487956);
getWeather(44418);
*/

////////////AJAX with Fetch & Async/Await //////////

async function getWeather(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const today = data.consolidated_weather[0];
        console.log(`Temperature in ${data.title} stay betwee ${today.min_temp} and ${today.max_temp}`);

        return data;

    } catch (error) {
        alert(error);

    }

}


getWeather(2487956);
// const dataLandon = getWeather(44418);
// then()

// async function bobo(city) {
//     const dataLandon = await getWeather(city);
//     console.log(dataLandon);
// }
// bobo(44418);

let dataLandon;
getWeather(44418).then(data => {
    dataLandon = data;
    console.log(dataLandon);
});