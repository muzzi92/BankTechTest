function Printer(logger = console.log){
  this._logger = logger;
}

Printer.prototype.printBankStatement = function(transactions){
  this.__printColumnHeaders(['Date', 'Credit', 'Debit', 'Balance']);
  this.__printHorizontalBorder(70);
  this.__printTransactions(transactions);
};

Printer.prototype.__printColumnHeaders = function(arguments){
  var headerString = '';
  for (var i = 0; i < arguments.length; i ++) {
    headerString += `|   ${arguments[i]}   |`;
  }
  this._logger(headerString);
};

Printer.prototype.__printHorizontalBorder = function (number) {
  this._logger('='.repeat(number));
};

Printer.prototype.__printTransactions = function(transactions) {
  transactions.forEach(function(transaction) {
    if (transaction.type === Transaction.CREDIT) {
      this._logger(`${transaction.date} ||   ${transaction.amount} ||      ||   ${transaction.updatedBalance}`);
    } else if (transaction.type === Transaction.DEBIT) {
      this._logger(`${transaction.date} ||   || ${transaction.amount}      ||   ${transaction.updatedBalance}`);
    }
  }, this);
};
