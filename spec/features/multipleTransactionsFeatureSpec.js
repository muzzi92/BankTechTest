describe('Features', function(){

  var oldLog;
  var testDate;

  beforeEach(function(){
    oldLog = console.log;
    console.log = jasmine.createSpy('log');
    testDate = new Date(2010, 10, 10);
  });

  it('After multiple withdrawals and deposits, it prints correct statement', function(){
    var bank = new Bank();
    bank.deposit(1000, testDate);
    bank.withdraw(100, testDate);
    bank.withdraw(50, testDate);
    bank.deposit(20, testDate);
    bank.statement();
    expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   20 ||      ||   870');
    expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   || 50      ||   850');
    expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   || 100      ||   900');
    expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   1000 ||      ||   1000');
  });

});
