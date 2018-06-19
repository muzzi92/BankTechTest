function Printer(){}

Printer.prototype.printBankStatement = function(array){
  this.__printColumnHeaders(['Date', 'Type', 'Amount', 'Balance']);
  this.__printHorizontalBorder(70);
  for (var i = 0; i < array.length; i++) {
    console.log(`${array[i].date} ||   ${array[i].type}   ||      ${array[i].amount}      ||   ${array[i].updatedBalance}`);
  }
};

Printer.prototype.__printColumnHeaders = function(headerArray){
  var headerString = '';
  for (var i = 0; i < headerArray.length; i ++) {
    headerString += `|       ${headerArray[i]}       |`;
  }
  console.log(headerString);
};

Printer.prototype.__printHorizontalBorder = function (number) {
  console.log(`${"=".repeat(number)}`);
};
