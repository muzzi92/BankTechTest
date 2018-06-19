describe('Balance', function(){
  it('Starts with a current balance of 0', function(){
    var balance = new Balance();
    expect(balance.current).toEqual(0);
  })
})
