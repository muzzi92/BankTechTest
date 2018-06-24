function Printer(logger = console.log){
  this.logger = logger;
}

Printer.prototype.printBankStatement = function(array){
  this.__printColumnHeaders(['Date', 'Credit', 'Debit', 'Balance']);
  this.__printHorizontalBorder(70);
  for (var i = 0; i < array.length; i++) {
    if (array[i].type === Transaction.CREDIT) {
      this.logger(`${array[i].date} ||   ${array[i].amount} ||      ||   ${array[i].updatedBalance}`);
    } else if (array[i].type === Transaction.DEBIT) {
      this.logger(`${array[i].date} ||   || ${array[i].amount}      ||   ${array[i].updatedBalance}`);
    }
  }
};

Printer.prototype.__printColumnHeaders = function(arguments){
  var headerString = '';
  for (var i = 0; i < arguments.length; i ++) {
    headerString += `|   ${arguments[i]}   |`;
  }
  this.logger(headerString);
};

Printer.prototype.__printHorizontalBorder = function (number) {
  this.logger(`${'='.repeat(number)}`);
};
