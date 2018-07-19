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
            exp: 0,
            inc: 0,
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

            if (type === 'exp') {
                itemObj = new Expense(ID, desc, val);

            } else if (type === 'inc') {
                itemObj = new Income(ID, desc, val);
            }

            itemsArr.push(itemObj);
            return itemObj;
        },

        deleteItem: function(type, ID) {

            allData.items[type].forEach(function(current, index, array) {
                if (current.id === ID) {

                    array.splice(index, 1);
                }
                // console.log(current.id);

            });

        },


        calcBudget: function(type) {
            var itemsArr, sum, budget, percentage, totalInc, totalExp;
            itemsArr = allData.items[type];
            sum = 0;
            // console.log(type);
            // var ttt = this.addItem();
            // console.log(ttt.itemsArr);

            itemsArr.forEach(function(current) {
                sum = sum + current.value;
                allData.total[type] = sum;
            });


            totalInc = allData.total['inc'];
            totalExp = allData.total.exp;

            budget = totalInc - totalExp;
            allData.total.budget = budget;

            percentage = parseInt(totalExp / totalInc * 100);
            allData.total.percentage = percentage;

        },

        getBudget: function() {
            return {
                incArr: allData.items['inc'],
                totalInc: allData.total['inc'],
                totalExp: allData.total.exp,
                budget: allData.total.budget,
                percentage: allData.total.percentage
            }
        }
    }



})();

var UIController = (function() {

    // var domSelector = {
    //     // 1. Input. 
    //     inputType: '.add__type',
    //     inputDescr: '.add__description',
    //     inputValue: '.add__value',
    //     addBtn: '.add__btn',
    //     // 2. Output list.
    //     incContainer: '.inc__list',
    //     expContainer: '.exp__list',
    // }




    return {


        getDomSelectors: function() {
            return {
                // 1. Input. 
                inputType: '.add__type',
                inputDescr: '.add__description',
                inputValue: '.add__value',
                addBtn: '.add__btn',
                // 2. Output list.
                incContainer: '.inc__list',
                expContainer: '.exp__list',
                // 3. Output Budget.
                budgetVal: '.budget__value',
                incVal: '.budget__income--value',
                expVal: '.budget__expenses--value',
                expPercentage: '.budget__expenses--percentage',
            }
        },
        getInput: function() {
            var domSelectors = this.getDomSelectors();


            return {
                type: document.querySelector(domSelectors.inputType).value,
                description: document.querySelector(domSelectors.inputDescr).value,
                value: parseFloat(document.querySelector(domSelectors.inputValue).value)
            }
        },

        displayItem: function(type, obj) {
            var html, newHTML, el;

            if (type === 'inc') {
                el = '.inc__list';
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div> <div class = "right clearfix"> <div class = "item__value">%value%</div> <div class = "item__delete"> <button class = "item__delete--btn"> <i class = "ion-ios-close-outline"> </i> </button></div> </div></div>';
            } else if (type === 'exp') {
                el = '.exp__list';
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div> <div class = "right clearfix"> <div class = "item__value"> %value% </div> <div class = "item__percentage"> 21 % </div><div class="item__delete"> <button class = "item__delete--btn"> <i class = "ion-ios-close-outline"> </i> </button></div > </div></div>';
            }
            // console.log(obj);
            newHTML = html.replace('%id%', obj.id).replace('%description%', obj.description).replace('%value%', obj.value);

            document.querySelector(el).insertAdjacentHTML('beforeend', newHTML);
        },

        displayBudget: function(obj) {
            var domSelectors = this.getDomSelectors();
            document.querySelector(domSelectors.budgetVal).innerHTML = obj.budget;
            document.querySelector(domSelectors.incVal).innerHTML = obj.totalInc;
            document.querySelector(domSelectors.expVal).innerHTML = obj.totalExp;
            document.querySelector(domSelectors.expPercentage).innerHTML = obj.percentage;
            // console.log(obj.budget);
        },

        clearField: function() {
            var fields, fieldsArr, inputFields,
                domSelectors = this.getDomSelectors();

            fields = document.querySelectorAll(domSelectors.inputDescr + ', ' + domSelectors.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            // console.log(fieldsArr);
            fieldsArr.forEach(function(current) {
                current.value = "";
            });

            fieldsArr[0].focus();

            //Solution 2.
            // document.querySelector(domSelectors.inputDescr).value = "";
            // document.querySelector(domSelectors.inputValue).value = "";

            //Solution 3. not working
            // var inputFields = this.getInput();
            // inputFields.call(description) = "";
            // inputFields.value = "";

        },

        removeItems: function(id) {
            el = document.getElementById(id);
            el.parentNode.removeChild(el);
        }


    };

})();

var Controller = (function(budgetCtrl, UICtrl) {

    var domSelectors = UICtrl.getDomSelectors();

    var setEventListner = function() {
        document.querySelector(domSelectors.addBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();

            }
        });

        document.querySelector('.container').addEventListener('click', ctrlDeleteItem);
    };

    var ctrlAddItem = function() {
        var inputObj, itemObj, budget;

        // 1. Get Inputs from DOM
        inputObj = UICtrl.getInput();
        if (inputObj.description !== "" && !isNaN(inputObj.value) && inputObj.value > 0) {

            // 2. Add Exp & Inc to Budget controller
            itemObj = budgetCtrl.addItem(inputObj.type, inputObj.description, inputObj.value);

            // 3. Display Exp & Inc in UI
            UICtrl.displayItem(inputObj.type, itemObj);



            // 4. Update budget
            ctrlUpdateBudget(inputObj);

            // 5. clear fields
            UICtrl.clearField();
        }
    };




    var ctrlUpdateBudget = function(obj) {
        var inputObj, getBdge, budget;

        budget = budgetCtrl.calcBudget(Obj.type);
        getBdge = budgetCtrl.getBudget();

        UICtrl.displayBudget(getBdge);
        // console.log();
        console.log('arr = ');
        console.log(getBdge.incArr);
        //     console.log('exp = ' + getBdge.totalExp);
        // console.log(getBdge);
    }

    var ctrlDeleteItem = function(event) {
        var itemID, type, id;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; //type id

        if (itemID) {

            splitID = itemID.split('-')

            type = splitID[0];
            id = parseInt(splitID[1]);

            // Delet item from data structure
            budgetCtrl.deleteItem(type, id);

            // Remove item from UI
            UICtrl.removeItems(itemID);

            // Update budget

        }
        ctrlUpdateBudget();

    }

    return {
        init: function() {
            console.log('App Insistanciated')

            setEventListner();

            var getBdge = {
                totalInc: 0,
                totalExp: 0,
                budget: 0,
                percentage: '0%'
            }

            UICtrl.displayBudget(getBdge);
        }
    }
    // init();


})(BudgetController, UIController);

Controller.init();