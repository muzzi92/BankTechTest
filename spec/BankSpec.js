describe('Bank', function(){

  var bank;
  var fakePrinter;

  beforeEach(function(){
    fakePrinter = {};
    bank = new Bank(fakePrinter);
  });

  it('Constructs with a balance attribute equal to zero', function(){
    expect(bank.balance).toEqual(0);
  });

  it('Constructs with a transactions attribute equal to a TransactionHistory instance', function(){
    expect(bank.transactions instanceof TransactionHistory).toBeTruthy();
  });


  describe('#Withdraw', function(){
    it('Decreases balance by 10 when parameter is 10', function(){
      bank.withdraw(10);
      expect(bank.balance).toEqual(-10);
    });
    it('Calls the TransactionHistory addToLog function', function(){
      var transactionHistorySpy = spyOn(bank.transactions, 'addToLog');
      bank.withdraw(10);
      expect(transactionHistorySpy).toHaveBeenCalled();
    });
  });

  describe('#Deposit', function(){
    it('Increases balance by 10 when parameter is 10', function(){
      bank.deposit(10);
      expect(bank.balance).toEqual(10);
    });
    it('Calls the TransactionHistory addToLog function', function(){
      var transactionHistorySpy = spyOn(bank.transactions, 'addToLog');
      bank.withdraw(10);
      expect(transactionHistorySpy).toHaveBeenCalled();
    });
  });

  describe('#Statement', function(){
    it('Calls the printBankStatement function', function(){
      fakePrinter.printBankStatement = jasmine.createSpy("printBankStatement");
      bank.deposit(10, new Date(2010, 10, 10));
      bank.statement();
      expect(fakePrinter.printBankStatement).toHaveBeenCalledWith([jasmine.objectContaining({
        type: Transaction.CREDIT,
        amount: 10,
        updatedBalance: 10,
        date: 'Wed, 10 Nov 2010 00:00:00 GMT'
      })]);
    });
  });

});
