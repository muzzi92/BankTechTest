describe('TransactionHistory', function(){

  it('It has a log attribute of an empty array', function(){
    var transactionHistory = new TransactionHistory();
    expect(transactionHistory.log).toEqual([]);
  })

})
