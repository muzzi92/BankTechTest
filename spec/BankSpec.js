describe('Bank', function(){

  var bank;

  beforeEach(function(){
    bank = new Bank();
  });

  it('Constructs with a balance attribute equal to a Balance instance', function(){
    expect(bank.balance instanceof Balance).toBeTruthy();
  });

  it('Constructs with a transactions attribute equal to a TransactionHistory instance', function(){
    expect(bank.transactions instanceof TransactionHistory).toBeTruthy();
  });


  describe('#Withdraw', function(){
    it('Calls the Balance decrease function with 10, when argument is 10', function(){
      var balanceSpy = spyOn(bank.balance, 'decrease');
      bank.withdraw(10);
      expect(balanceSpy).toHaveBeenCalledWith(10);
    });
    it('Calls the TransactionHistory addToLog function', function(){
      var transactionHistorySpy = spyOn(bank.transactions, 'addToLog');
      bank.withdraw(10);
      expect(transactionHistorySpy).toHaveBeenCalled();
    });
  });

  describe('#Deposit', function(){
    it('Calls the Balance increase function with 10, when argument is 10', function(){
      var balanceSpy = spyOn(bank.balance, 'increase');
      bank.deposit(10);
      expect(balanceSpy).toHaveBeenCalledWith(10);
    });
    it('Calls the TransactionHistory addToLog function', function(){
      var transactionHistorySpy = spyOn(bank.transactions, 'addToLog');
      bank.withdraw(10);
      expect(transactionHistorySpy).toHaveBeenCalled();
    });
  });

  describe('#Statement', function(){
    it('Calls the prettyPrint function', function(){
      var printStatementSpy = spyOn(Printer.prototype, 'printBankStatement');
      bank.deposit(10);
      bank.statement();
      expect(printStatementSpy).toHaveBeenCalledWith(bank.transactions.log.reverse());
    });
  });

});
