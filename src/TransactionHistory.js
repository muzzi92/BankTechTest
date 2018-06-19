function TransactionHistory(){
  this.log =[];
};

TransactionHistory.prototype.addToLog = function(transaction){
  this.log.push(transaction);
}
