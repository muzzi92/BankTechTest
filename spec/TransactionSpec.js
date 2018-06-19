describe('Transaction', function(){

  var transaction;
  
  beforeEach(function(){
    transaction = new Transaction('credit', 10, 10, new Date(2010, 10, 10));
  });

  it('Stores type arugment as property', function(){
    expect(transaction.type).toEqual('credit');
  });

  it('Stores amount arugment as property', function(){
    expect(transaction.amount).toEqual(10);
  });

  it('Stores amount arugment as property', function(){
    expect(transaction.updatedBalance).toEqual(10);
  });

  it('Stores date argument as property', function(){
    expect(transaction.date).toEqual('Wed, 10 Nov 2010 00:00:00 GMT');
  });

});
