describe('Printer', function(){
  var printer;
  beforeEach(function(){
    printer = new Printer('Date', 'Type', 'Amount', 'Balance')
  })

  describe('#PrintBankStatement', function(){
    it('Prints transaction values into a table', function(){
      var transaction = new Transaction('credit', 10, 10, new Date(2010, 10, 10));
      var transactionsArray = [transaction];
      var oldLog = console.log;
      console.log = jasmine.createSpy('log');
      printer.printBankStatement(transactionsArray);
      expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   credit   ||      10      ||   10');
      console.log = oldLog;
    })
  })

  describe('#__setColumnHeaders__', function(){
    it('Sets arguments into a formatted string', function(){
      expect(printer.__setColumnHeaders__(['Title One', 'Title Two']))
      .toEqual('|       Title One       ||       Title Two       |');
    })
  })

})
