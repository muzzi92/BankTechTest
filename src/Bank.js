function Bank(){
  this.balance = 0;
  this.transactions = new TransactionHistory();
}

Bank.prototype.withdraw = function(amount, date = new Date()){
  this.balance -= amount;
  this.transactions.addToLog(
    new Transaction(Transaction.DEBIT, amount, this.balance, date)
  );
};

Bank.prototype.deposit = function(amount, date = new Date()){
  this.balance += amount;
  this.transactions.addToLog(
    new Transaction(Transaction.CREDIT, amount, this.balance, date)
  );
};

Bank.prototype.statement = function(){
  new Printer().printBankStatement(this.transactions.log);
};
