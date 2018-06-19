function Bank(){
  this.balance = 0;
  this.transactions = new TransactionHistory();
  this.transactionClass = Transaction;
}

Bank.prototype.withdraw = function(amount){
  this.balance -= amount;
  this.transactions.addToLog(this.transactionClass('debit', amount, this.balance));
};

Bank.prototype.deposit = function(amount){
  this.balance += amount;
  this.transactions.addToLog(this.transactionClass('credit', amount, this.balance));
};

Bank.prototype.statement = function(){
  new Printer().printBankStatement(this.transactions.log);
};
