describe('TransactionHistory', function(){

  var transactionHistory;

  beforeEach(function(){
    transactionHistory = new TransactionHistory();
  });

  it('It has a log attribute of an empty array', function(){
    expect(transactionHistory.log).toEqual([]);
  });

  describe('#AddToLog', function(){
    it('Pushes transaction argument to log array', function(){
      var fakeTransaction = {};
      transactionHistory.addToLog(fakeTransaction);
      expect(transactionHistory.log).toContain(fakeTransaction);
    });
  });

});
