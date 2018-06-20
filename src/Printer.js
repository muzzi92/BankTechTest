function Printer(){}

Printer.prototype.printBankStatement = function(array){
  this.__printColumnHeaders(['Date', 'Credit', 'Debit', 'Balance']);
  this.__printHorizontalBorder(70);
  for (var i = 0; i < array.length; i++) {
    if (array[i].type === new Bank().typeOfTransaction.CREDIT) {
      console.log(`${array[i].date} ||   ${array[i].amount} ||      ||   ${array[i].updatedBalance}`);
    } else if (array[i].type === new Bank().typeOfTransaction.DEBIT) {
      console.log(`${array[i].date} ||   || ${array[i].amount}      ||   ${array[i].updatedBalance}`);
    }
  }
};

Printer.prototype.__printColumnHeaders = function(arguments){
  var headerString = '';
  for (var i = 0; i < arguments.length; i ++) {
    headerString += `|   ${arguments[i]}   |`;
  }
  console.log(headerString);
};

Printer.prototype.__printHorizontalBorder = function (number) {
  console.log(`${"=".repeat(number)}`);
};
