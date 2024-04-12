![oop-header](https://media.git.generalassemb.ly/user/41550/files/f8cffa13-3069-4078-9bd7-d9a07912bb24)

# JavaScript Classes - Lab

## Intro

Now that you've learned about using **classes** in JavaScript to create objects, it's time for some practice!

**This lab is a DELIVERABLE**

## Setup and Instructions

1. Fork and clone this repository.
2. In the [solutions.js](/solutions.js) file, complete the excercise
3. In this lab, you will choose one of the object hierarchies below, **Bank Accounts** or **People**, and write the classes to implement it. (You do not have to complete both)

## Exercise

**`BankAccount`** class:

| Derived From | Properties | Methods |
| :---: | :---: | :---: |
| n/a | `ownerName`, `balance`, `acctNum` (generated in constructor - not passed in) | `deposit`, `withdraw` |

**`CheckingAccount`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `BankAccount` | `overdraftEnabled` |  Override `withdraw` to implement overdraft feature |

**`SavingsAccount`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `BankAccount` | None |  Override `withdraw` to disallow withdrawals completely :) |


### People

**`Person`** class:

| Derived From | Properties | Methods |
| :---: | :---: | :---: |
| n/a | `firstName`, `lastName` | `sayHello` |

**`Employee`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `Person` | `company`, `wage` (string), `active` (set to `true` in constructor) | `receiveRaise` (updates `wage`), `terminate` (set `active` to false) |

**`Manager`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `Employee` | `department` | `giveRaise` (calls `receiveRaise` on Employee object passed as arg) |

**`Worker`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `Employee` | `manager` (references a `Manager` object) | Your choice - be creative! |


## Deliverables

**This lab is a deliverable**. Please submit your pull request once completed.

## Bonus

Create a `Employee Payment` class using a combination of `Bank Account` and `People` heirarchies. Hint: You might need a `Payment` and `Company` classes, but there's more than one way to do this.

<br> 

<details>
  <summary> 🔍 One possible solution. Try not to peek </summary>

  <hr>
  
  [Here's an implementation](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley) of the `People` class hierarchy. 
  
  <hr>
  
  </details>
