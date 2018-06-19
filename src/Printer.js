function Printer(){};

Printer.prototype.printBankStatement = function(array){
  console.log(this.__setColumnHeaders__(['Date', 'Type', 'Amount', 'Balance']))
  console.log(`${"=".repeat(70)}`)
  for (var i = 0; i < array.length; i++) {
    console.log(`${array[i].date} ||   ${array[i].type}   ||      ${array[i].amount}      ||   ${array[i].updatedBalance}`)
  }
}

Printer.prototype.__setColumnHeaders__ = function(headerArray){
  var headerString = '';
  for (var i = 0; i < headerArray.length; i ++) {
    headerString += `|       ${headerArray[i]}       |`;
  }
  return headerString;
}
