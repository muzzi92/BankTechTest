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
    it('Creates a new instance of Transaction', function(){
      instance = bank.withdraw();
      expect(instance instanceof Transaction).toBeTruthy();
    })
  })

})
