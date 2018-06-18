describe('Printer', function(){
  var printer;
  beforeEach(function(){
    printer = new Printer('Date', 'Type', 'Amount', 'Balance')
  })

  it('Stores optional title parameters as attributes', function(){
    expect(printer.columnOne).toEqual('Date');
  })

})
