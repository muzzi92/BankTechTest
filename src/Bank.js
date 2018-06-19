function Bank(){
  this.balance = new Balance();
  this.transactions = new TransactionHistory();
}

Bank.prototype.withdraw = function(amount){
  this.balance.decrease(amount);
  this.transactions.addToLog(new Transaction('debit', amount, this.balance.current));
};

Bank.prototype.deposit = function(amount){
  this.balance.increase(amount);
  this.transactions.addToLog(new Transaction('credit', amount, this.balance.current));
};

Bank.prototype.statement = function(){
  new Printer().printBankStatement(this.transactions.log.reverse());
};
