function Bank(){
  this.balance = 0;
  this.transactions = new TransactionHistory();
  this.transactionTypeEnum = {
    DEBIT: 0,
    CREDIT: 1
  };
}

Bank.prototype.withdraw = function(amount){
  this.balance -= amount;
  this.transactions.addToLog(
    new Transaction(this.transactionTypeEnum.DEBIT, amount, this.balance)
  );
};

Bank.prototype.deposit = function(amount){
  this.balance += amount;
  this.transactions.addToLog(
    new Transaction(this.transactionTypeEnum.CREDIT, amount, this.balance)
  );
};

Bank.prototype.statement = function(){
  new Printer().printBankStatement(this.transactions.log);
};
