# Bank Tech Test

This project was created for a technical test challenge at Makers Academy. It was built using **JavaScript** and utilised Object Orientated design principles as well as Test Driven Development.

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Installation

* Begin by forking this repo
* Clone it to your local machine using `git clone` followed by your SSH key
* Open the *SpecRunner.html* file in your Chrome browser. This will show you all the passing unit tests for the application
* Open the Google Developer tools console on this screen, in order to interact with the application
  * Right click on the SpecRunner page rendered in the browser
  * Select *Inspect* from the options
  * Select *Console* from the tool bar or the window that opens

## Instructions

In the console:
* To create a new bank account:
``` JavaScript
var bank = new Bank();
```

* To deposit money into your account:
``` JavaScript
bank.deposit(200);
```

* To withdraw money from your account:
```JavaScript
bank.withdraw(50);
```

* To see your bank statement:
```JavaScript
bank.statement();
```

How it should look in the browser:
![](https://i.imgur.com/6Mus4Zu.png)

## Testing
This challenge was Test Driven using Jasmine for unit testing. You can view all the passing unit tests by opening the SpecRunner.html file in your Chrome browser, as mentioned above.

## Bonus Features Considered
The project was designed to specifically meet the requirements laid out in the challenge, and so, no bonus features were added.

If I was to create bonus features for this challenge, they would include:
* Adding functionality to stop users withdrawing more money than is in their account
* Displaying a message in the console when they attempt to do so
OR
* Allow users to go a certain amount below 0, and provide a message to the console to let them know that they are in their overdraft.

* Create a User object that stores personal information such as balance and pin
* Ask for user pin before allowing withdrawal
