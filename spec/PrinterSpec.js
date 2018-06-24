describe('Printer', function(){

  var printer;
  var oldLog;

  beforeEach(function(){
    printer = new Printer();
    oldLog = console.log;
    console.log = jasmine.createSpy('log');
  });

  afterEach(function(){
    console.log = oldLog;
  });

  describe('#PrintBankStatement', function(){
    it('Calls the __printColumnHeaders function', function(){
      printer.printBankStatement([]);
      expect(console.log).toHaveBeenCalledWith('|   Date   ||   Credit   ||   Debit   ||   Balance   |');
    });
    it('Calls the __printHorizontalBorder function', function(){
      printer.printBankStatement([]);
      expect(console.log).toHaveBeenCalledWith('======================================================================');
    });
    it('Prints value in the credit column when transaction is a credit', function(){
      var transactionSpy = jasmine.createSpy('Transaction', {
        'date': 'Wed, 10 Nov 2010 00:00:00 GMT',
        'type': 1,
        'amount': 10,
        'updatedBalance': 10
      });
      printer.printBankStatement([transactionSpy]);
      expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   10 ||      ||   10');
    });
    it('Prints value in the debit column when transaction is a debit', function(){
      var transactionSpy = jasmine.createSpy('Transaction', {
        'date': 'Wed, 10 Nov 2010 00:00:00 GMT',
        'type': 0,
        'amount': 10,
        'updatedBalance': 10
      });
      printer.printBankStatement([transactionSpy]);
      expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   || 10      ||   10');
    });
  });

  describe('#__printColumnHeaders__', function(){
    it('Prints arguments as a formatted string', function(){
      printer.__printColumnHeaders(['Title One', 'Title Two']);
      expect(console.log).toHaveBeenCalledWith('|   Title One   ||   Title Two   |');
    });
  });

  describe('#__printHorizontalBorder__', function(){
    it('Prints the input number of equals signs to form a border', function(){
      printer.__printHorizontalBorder(5);
      expect(console.log).toHaveBeenCalledWith('=====');
    });
  });

});
