function Printer(){};

Printer.prototype.printBankStatement = function(array){
  this.__printColumnHeaders__(['Date', 'Type', 'Amount', 'Balance']);
  this.__printHorizontalBorder__(70);
  for (var i = 0; i < array.length; i++) {
    console.log(`${array[i].date} ||   ${array[i].type}   ||      ${array[i].amount}      ||   ${array[i].updatedBalance}`)
  }
}

Printer.prototype.__printColumnHeaders__ = function(headerArray){
  var headerString = '';
  for (var i = 0; i < headerArray.length; i ++) {
    headerString += `|       ${headerArray[i]}       |`;
  }
  console.log(headerString);
}

Printer.prototype.__printHorizontalBorder__ = function (number) {
  console.log(`${"=".repeat(number)}`);
};
