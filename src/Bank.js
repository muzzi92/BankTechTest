function Bank(){
  this.balance = 0;
  this.transactions = new TransactionHistory();
}

Bank.prototype.withdraw = function(amount){
  this.balance -= amount;
  this.transactions.addToLog(new Transaction('debit', amount, this.balance));
};

Bank.prototype.deposit = function(amount){
  this.balance += amount;
  this.transactions.addToLog(new Transaction('credit', amount, this.balance));
};

Bank.prototype.statement = function(){
  new Printer().printBankStatement(this.transactions.log);
};
