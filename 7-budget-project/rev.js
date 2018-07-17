var BudgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    allData = {
        items: {
            exp: [],
            inc: []
        },
        total: {
            budget: 0,
            percentage: 0
        }
    }

    return {
        addItem: function(type, desc, val) {
            var itemObj, ID, itemsArr, index;

            itemsArr = allData.items[type];

            index = itemsArr.length - 1;

            // id = itemsArr[index].id + 1;

            if (itemsArr.length > 0) {
                ID = itemsArr[index].id + 1;
            } else {
                ID = 0;
            }
            console.log(ID);

            console.log(itemsArr);
            if (type === 'exp') {
                itemObj = new Expense(ID, desc, val);

            } else if (type === 'inc') {
                itemObj = new Income(ID, desc, val);
            }

            itemsArr.push(itemObj);
            return itemObj;



        }
    }



})();

var UIController = (function() {

    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            }
        },

        displayItem: function(type, obj) {
            var html;

            if(type === 'inc') {
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">Sold car</div><div class="right clearfix"><div class="item__value">+ 1,500.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } 

            newHTML = replace
        }
    }
})();

var Controller = (function(budgetCtrl, UICtrl) {
    var setEventListner = function() {
        document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
        document.addEventListener('key', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            } 
        });
    };

    var ctrlAddItem = function() {
        var inputObj, itemObj;

        // console.log('ctrlAddItem running');
        inputObj = UICtrl.getInput();
        console.log(inputObj);
        itemObj = budgetCtrl.addItem(inputObj.type, inputObj.description, inputObj.value);
        UICtrl.displayItem(inputObj.type, itemObj);


    };

    return {
        init: function() {
            console.log('App Insistanciated')

            setEventListner();
        }
    }
    // init();


})(BudgetController, UIController);

Controller.init();