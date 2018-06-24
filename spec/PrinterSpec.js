describe('Printer', function(){

  var printer;
  var fakelog;

  beforeEach(function(){
    fakelog = jasmine.createSpy('log');
    printer = new Printer(fakelog);
  });

  describe('#PrintBankStatement', function(){
    it('Calls the __printColumnHeaders function', function(){
      printer.printBankStatement([]);
      expect(fakelog).toHaveBeenCalledWith('|   Date   ||   Credit   ||   Debit   ||   Balance   |');
    });
    it('Calls the __printHorizontalBorder function', function(){
      printer.printBankStatement([]);
      expect(fakelog).toHaveBeenCalledWith('======================================================================');
    });
    it('Prints value in the credit column when transaction is a credit', function(){
      var transactionSpy = jasmine.createSpy('Transaction', {
        'date': 'Wed, 10 Nov 2010 00:00:00 GMT',
        'type': 1,
        'amount': 10,
        'updatedBalance': 10
      });
      printer.printBankStatement([transactionSpy]);
      expect(fakelog).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   10 ||      ||   10');
    });
    it('Prints value in the debit column when transaction is a debit', function(){
      var transactionSpy = jasmine.createSpy('Transaction', {
        'date': 'Wed, 10 Nov 2010 00:00:00 GMT',
        'type': 0,
        'amount': 10,
        'updatedBalance': 10
      });
      printer.printBankStatement([transactionSpy]);
      expect(fakelog).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   || 10      ||   10');
    });
  });

});
