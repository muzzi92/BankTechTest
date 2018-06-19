describe('Printer', function(){

  var printer;
  var oldLog;

  beforeEach(function(){
    printer = new Printer('Date', 'Type', 'Amount', 'Balance');
    oldLog = console.log;
    console.log = jasmine.createSpy('log');
  })

  afterEach(function(){
    console.log = oldLog;
  })

  describe('#PrintBankStatement', function(){
    it('Prints transaction values into a table', function(){
      var transaction = new Transaction('credit', 10, 10, new Date(2010, 10, 10));
      var transactionsArray = [transaction];
      printer.printBankStatement(transactionsArray);
      expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   credit   ||      10      ||   10');
    })
  })

  describe('#__printColumnHeaders__', function(){
    it('Prints arguments as a formatted string', function(){
      printer.__printColumnHeaders__(['Title One', 'Title Two']);
      expect(console.log).toHaveBeenCalledWith('|       Title One       ||       Title Two       |');
    })
  })

  describe('#__printHorizontalBorder__', function(){
    it('Prints the input number of equals signs to form a border', function(){
      printer.__printHorizontalBorder__(5);
      expect(console.log).toHaveBeenCalledWith('=====');
    })
  })

})
