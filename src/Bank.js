function Bank(){
  this.balance = 0;
  this.transactions = [];
};

Bank.prototype.withdraw = function(amount){
  this.balance -= amount;
  this.__addToTransactionHistory__(new Transaction('debit', amount, this.balance));
}

Bank.prototype.deposit = function(amount){
  this.balance += amount;
  this.__addToTransactionHistory__(new Transaction('credit', amount, this.balance));
}

Bank.prototype.statement = function(){
  var printer = new Printer('Date', 'Type', 'Amount', 'Balance');
  printer.prettyPrint(this.transactions.reverse());
}

Bank.prototype.__addToTransactionHistory__ = function(completeTransaction){
  this.transactions.push(completeTransaction);
}
