describe('Printer', function(){
  var printer;
  beforeEach(function(){
    printer = new Printer('Date', 'Type', 'Amount', 'Balance')
  })

  it('Stores Date as columnOne attribute', function(){
    expect(printer.columnOne).toEqual('Date');
  })
  it('Stores Type as columnTwo attribute', function(){
    expect(printer.columnTwo).toEqual('Type');
  })
  it('Stores Amount as columnThree attribute', function(){
    expect(printer.columnThree).toEqual('Amount');
  })
  it('Stores Balance as columnFour attribute', function(){
    expect(printer.columnFour).toEqual('Balance');
  })

  describe('#PrettyPrint', function(){
    it('Prints transaction values into a table', function(){
      var transaction = new Transaction('credit', 10, 10, new Date(2010, 10, 10));
      var transactionsArray = [transaction];
      var oldLog = console.log;
      console.log = jasmine.createSpy('log');
      printer.prettyPrint(transactionsArray);
      expect(console.log).toHaveBeenCalledWith('Wed, 10 Nov 2010 00:00:00 GMT ||   credit   ||      10      ||   10');
      console.log = oldLog;
    })
  })

})
