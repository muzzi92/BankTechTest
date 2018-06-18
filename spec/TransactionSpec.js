describe('Transaction', function(){
  var transaction;
  beforeEach(function(){
    transaction = new Transaction('credit', 10, new Date(2010, 10, 10));
  })

  it('Stores type arugment as property', function(){
    expect(transaction.type).toEqual('credit');
  })

  it('Stores amount arugment as property', function(){
    expect(transaction.amount).toEqual(10);
  })

  it('Stores date argument as property', function(){
    var date = new Date(2010, 10, 10)
    expect(transaction.date).toEqual(date);
  })

})
