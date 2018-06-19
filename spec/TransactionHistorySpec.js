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
      var transactionSpy = jasmine.createSpy('transaction');
      transactionHistory.addToLog(transactionSpy);
      expect(transactionHistory.log).toContain(transactionSpy);
    });
  });

});
