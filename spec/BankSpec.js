describe('Bank', function(){
  var bank;
  beforeEach(function(){
    bank = new Bank();
  })

  it('Has a balance', function(){
    expect(bank.balance).toEqual(0);
  });

  it('Start with an empty array to store transactions', function(){
    expect(bank.transactions).toEqual([]);
  })

  describe('#Withdraw', function(){
    it('Reduces balance by 10 when parameter is 10', function(){
      bank.withdraw(10);
      expect(bank.balance).toEqual(-10);
    })
    it('Pushes a complete transaction to the transactions array', function(){
      bank.withdraw(10);
      expect(bank.transactions).toContain(jasmine.objectContaining({type: 'debit', amount: 10 }));
    })
  })

  describe('#Deposit', function(){
    it('Increases balance by 10 when parameter is 10', function(){
      bank.deposit(10);
      expect(bank.balance).toEqual(10);
    })
    it('Pushes a complete transaction to the transaction array', function(){
      bank.deposit(10);
      expect(bank.transactions).toContain(jasmine.objectContaining({type: 'credit', amount: 10 }));
    })
  })

  describe('#Statement', function(){
    it('Calls the prettyPrint function', function(){
      var printStatementSpy = spyOn(Printer.prototype, 'printBankStatement');
      bank.deposit(10);
      bank.statement();
      expect(printStatementSpy).toHaveBeenCalledWith(bank.transactions);
    })
  })

  describe('#__AddToTransactionHistory__', function(){
    it('Pushes a transaction to the transactions array', function(){
      var transactionSpy = jasmine.createSpy('transaction');
      bank.__addToTransactionHistory__(transactionSpy);
      expect(bank.transactions).toContain(transactionSpy);
    })
  })

})
