describe('Features', function(){

  var oldLog;
  var testDate;
  var bank;

  beforeEach(function(){
    oldLog = console.log;
    console.log = jasmine.createSpy('log');
    testDate = new Date(2010, 10, 10);
    bank = new Bank();
    bank.deposit(1000, testDate);
  });

  afterEach(function(){
    console.log = oldLog;
  });

  it('After multiple withdrawals and deposits, it prints correct statement', function(){
    bank.withdraw(50, testDate);
    bank.statement();
    expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   || 50      ||   950');
    expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   1000 ||      ||   1000');
  });

  it('The statements are correct when printed multiple times after transactions', function(){
    bank.statement();
    bank.deposit(20, testDate);
    bank.statement();
    expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   20 ||      ||   1020');
  });

});
