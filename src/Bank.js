function Bank(){
  this.balance = 0;
  this.transactions = new TransactionHistory();
  this.typeOfTransaction = {
    DEBIT: 0,
    CREDIT: 1
  };
}

Bank.prototype.withdraw = function(amount, date = new Date()){
  this.balance -= amount;
  this.transactions.addToLog(
    new Transaction(this.typeOfTransaction.DEBIT, amount, this.balance, date)
  );
};

Bank.prototype.deposit = function(amount, date = new Date()){
  this.balance += amount;
  this.transactions.addToLog(
    new Transaction(this.typeOfTransaction.CREDIT, amount, this.balance, date)
  );
};

Bank.prototype.statement = function(){
  new Printer().printBankStatement(this.transactions.log);
};
