function Bank(){
  this.balance = 0;
  this.transactions = [];
};

Bank.prototype.withdraw = function(amount){
  this.balance -= amount;
  return new Transaction('debit', amount);
}
