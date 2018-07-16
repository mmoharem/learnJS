
var budgetController = (function() {

})();

var UIController = (function() {
    var getInput = function() {
        var type, description, value;
        type = document.querySelector('.add__add__type').value;
        description = document.querySelector('.add__description').value;
        value = document.querySelector('.add__value').value;
        console.log(type + description);
    }
})();

var Controller = (function(budgetCtrl, UICtrl) {
    var setEventListner = function() {
        document.querySelector('.add__btn').addEnemtListner('click', ctrlAddItem);
        document.addEventListener('key', function(event) {
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        UICtrl.getInput();
    };

})(budgetController, UIController);