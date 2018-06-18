describe("Bank", function(){
  var bank;
  beforeEach(function(){
    bank = new Bank();
  })

  it("Has a balance", function(){
    expect(bank.balance).toEqual(0);
  })

})
