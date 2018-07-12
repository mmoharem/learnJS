//Notes:
// document.addEventListner('keypress', function(event) {
//     console.log(event);
// });
var budgetController = (function() {

    var Expense = function(id, descr, value) {
        this.id = id;
        this.descr = descr;
        this.value = value;
    };

    var Income = function(id, descr, value) {
        this.id = id;
        this.descr = descr;
        this.value = value;
    };

    var allData = {
        items: {
            exp: [], //[1,2,3,4]
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItems: function(type, des, val) {
            id = 0;
            var newItem, ID,

                //select (inc or exp) array.
                itemsArr = allData.items[type];

            if (itemsArr.length > 0) {
                //Create new ID.
                ID = itemsArr[itemsArr.length - 1].id + 1;
            } else {
                ID = 0;
            }


            //Creat new item (exp or inc)
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);

            } else
            if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //Push item int data structure
            allData.items[type].push(newItem);
            return newItem;
        },

        testingData: function() {
            console.log(allData);
        }
    };
})();

var UIController = (function() {

    var domStrings = {
        inputType: '.add__type',
        inputDescr: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(domStrings.inputType).value,
                description: document.querySelector(domStrings.inputDescr).value,
                value: document.querySelector(domStrings.inputValue).value,
            };

        },

        getDomStrings: function() {
            return domStrings
        }
    };

})();

var controller = (function(budgetCtrl, UICrl) {

    var setEventListner = function() {
        var theDomStr = UICrl.getDomStrings();

        document.querySelector(theDomStr.addBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) { // e stand for event
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function() {

        var input, newItem;

        // 1. Get the field input
        input = UICrl.getInput();
        // console.log
        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItems(input.type, input.description, input.value);
        // 3. add the item to UI-controller
        // 4. calculate the budget
        // 5. Display the budget on the UI
        budgetCtrl.testingData();

    };

    return {
        init: function() {
            setEventListner();
        }
    }

})(budgetController, UIController);

controller.init();