function Balance(){
  this.current = 0;
};

Balance.prototype.increase = function(amount) {
  this.current += amount;
}
