describe('Bank', function(){
  var bank;
  beforeEach(function(){
    bank = new Bank();
  })

  it('Has a balance', function(){
    expect(bank.balance).toEqual(0);
  });

  it('Starts transactions attribute equal to a TransactionHistory instance', function(){
    expect(bank.transactions instanceof TransactionHistory).toBeTruthy();
  })


  describe('#Withdraw', function(){
    it('Reduces balance by 10 when parameter is 10', function(){
      bank.withdraw(10);
      expect(bank.balance).toEqual(-10);
    })
    it('Calls the TransactionHistory addToLog function', function(){
      var transactionHistorySpy = spyOn(bank.transactions, 'addToLog');
      bank.withdraw(10);
      expect(transactionHistorySpy).toHaveBeenCalled();
    })
  })

  describe('#Deposit', function(){
    it('Increases balance by 10 when parameter is 10', function(){
      bank.deposit(10);
      expect(bank.balance).toEqual(10);
    })
    it('Calls the TransactionHistory addToLog function', function(){
      var transactionHistorySpy = spyOn(bank.transactions, 'addToLog');
      bank.withdraw(10);
      expect(transactionHistorySpy).toHaveBeenCalled();
    })
  })

  describe('#Statement', function(){
    it('Calls the prettyPrint function', function(){
      var printStatementSpy = spyOn(Printer.prototype, 'printBankStatement');
      bank.deposit(10);
      bank.statement();
      expect(printStatementSpy).toHaveBeenCalledWith(bank.transactions.log.reverse());
    })
  })

})
