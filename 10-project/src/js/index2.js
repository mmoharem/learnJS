import axios from 'axios';
async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'c94538f12565265a5f888a65f8cd1bee';

    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(res);
    const recipes = res.data.recipes;

    const recArr = await recipes.forEach((recipe, index) => {

        return recipe;
        // console.log(index);
    });
    console.log(recArr);
}
getResults('pizza');