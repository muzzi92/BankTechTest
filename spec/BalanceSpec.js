describe('Balance', function(){

  var balance;

  beforeEach(function(){
    balance = new Balance();
  });

  it('Starts with a current balance of 0', function(){
    expect(balance.current).toEqual(0);
  });

  describe('#Incease', function(){
    it('Increases current balance by 10 when input argument is 10', function(){
      balance.increase(10);
      expect(balance.current).toEqual(10);
    });
  });

  describe('#Decrease', function(){
    it('Decreases current balance by 10 when input argument is 10', function(){
      balance.decrease(10);
      expect(balance.current).toEqual(-10);
    });
  });

});
