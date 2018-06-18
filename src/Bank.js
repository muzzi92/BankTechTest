function Bank(){
  this.balance = 0;
  this.transactions = [];
};

Bank.prototype.withdraw = function(amount){
  this.balance -= amount;
  var transaction = new Transaction('debit', amount, this.balance);
  this.transactions.push(transaction);
  return transaction;
}

Bank.prototype.deposit = function(amount){
  this.balance += amount;
  var transaction = new Transaction('credit', amount, this.balance);
  this.transactions.push(transaction);
  return transaction;
}
