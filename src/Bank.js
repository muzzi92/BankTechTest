function Bank(printer = new Printer){
  this.balance = 0;
  this.transactions = new TransactionHistory();
  this._printer = printer;
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
  this._printer.printBankStatement(this.transactions.log);
};
