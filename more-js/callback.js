// Ex.1 Jquery
/*
$("#btn_1").click(function() {
    alerst("Btn 1 Clicked")
});

// Ex.2
friends.forEach(function(eachName, index) {
    console.log(index + 1 + ". " + eachName);
});
*/

//We can pass functions around like variables and return them in functions and use them in other functions

// Ex.3 
var allUserData = [];

function logStuff(userData) {
    if (typeof userData === "string") {

        console.log(userData);
    } else if (typeof userData === "object") {

        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
};

function getInput(options, callback) {

    allUserData.push(options);
    callback(options);
}

var input = getInput({ name: "Rich", speciality: "JavaScript" }, logStuff);