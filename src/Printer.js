function Printer(col1 = 'Column One', col2 = 'Column Two',
                col3 = 'Column Three', col4 = 'Column Four'){
                  this.columnOne = col1;
                  this.columnTwo = col2;
                  this.columnThree = col3;
                  this.columnFour = col4;
}

Printer.prototype.prettyPrint = function(array){
  console.log(`          ${this.columnOne}          || ${this.columnTwo} || ${this.columnThree} || ${this.columnFour}`)
  console.log(`${"=".repeat(70)}`)
  for (var i = 0; i < array.length; i++) {
    console.log(`${array[i].date} ||   ${array[i].type}   ||      ${array[i].amount}      ||   ${array[i].updatedBalance}`)
  }
}
