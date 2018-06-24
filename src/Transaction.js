function Transaction(type, amount, updatedBalance, date){
  this.type = type;
  this.amount = amount;
  this.updatedBalance = updatedBalance;
  this.date = date.toUTCString();
}

Transaction.DEBIT = 0;
Transaction.CREDIT = 1;
