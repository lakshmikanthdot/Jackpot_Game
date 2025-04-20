// 1. Depsoit some money
// 2. Determine the number of lines to bet
// 3. Collect a Bet amount
// 4. spin the slot machine
// 5. check the user won
// 6. give the user there winnings or take the money when loss
// 7. play again

// arrow function

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8, // SYMBOLS_COUNT["A"] -> 2 (key value pairs)
};

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};
// 1. Depsoit some money

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a Deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("invalid number try again");
    } else {
      return numberDepositAmount;
    }
  }
};

// 2. Determine the number of lines to bet

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("invalid number of Lines, try again");
    } else {
      return numberOfLines;
    }
  }
};

// 3. Collect a Bet amount

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("invalid bet, try again");
    } else {
      return numberBet;
    }
  }
};

// 4. spin the slot machine

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    // console.log(symbol, count); // key value pairs
    for (let i = 0; i < count; i++) {
      // console.log(i);
      symbols.push(symbol);
      // symbols.push(count); // it will give number means value 2,2,4,4,4,4 etc....
      // console.log(symbols); // it will give possible numbers of itteration values are below
      /* eg of itteration
      [ 'A' ]
      [ 'A', 'A' ]
      [ 'A', 'A', 'B' ]
      [ 'A', 'A', 'B', 'B' ]
      [ 'A', 'A', 'B', 'B', 'B' ]
      [ 'A', 'A', 'B', 'B', 'B', 'B' ]
      [
        'A', 'A', 'B',
        'B', 'B', 'B',
        'C'
      ]
      [
        'A', 'A', 'B',
        'B', 'B', 'B',
        'C', 'C'
      ]
      [
        'A', 'A', 'B',
        'B', 'B', 'B',
        'C', 'C', 'C'
      ]
      [
        'A', 'A', 'B', 'B',
        'B', 'B', 'C', 'C',
        'C', 'C'
      ]
      [
        'A', 'A', 'B', 'B',
        'B', 'B', 'C', 'C',
        'C', 'C', 'C'
      ]
      [
        'A', 'A', 'B', 'B',
        'B', 'B', 'C', 'C',
        'C', 'C', 'C', 'C'
      ]
      [
        'A', 'A', 'B', 'B',
        'B', 'B', 'C', 'C',
        'C', 'C', 'C', 'C',
        'D'
      ]
      [
        'A', 'A', 'B', 'B',
        'B', 'B', 'C', 'C',
        'C', 'C', 'C', 'C',
        'D', 'D'
      ]
      [
        'A', 'A', 'B', 'B',
        'B', 'B', 'C', 'C',
        'C', 'C', 'C', 'C',
        'D', 'D', 'D'
      ]
      [
        'A', 'A', 'B', 'B',
        'B', 'B', 'C', 'C',
        'C', 'C', 'C', 'C',
        'D', 'D', 'D', 'D'
      ]
      [
        'A', 'A', 'B', 'B', 'B',
        'B', 'C', 'C', 'C', 'C',
        'C', 'C', 'D', 'D', 'D',
        'D', 'D'
      ]
      [
        'A', 'A', 'B', 'B', 'B',
        'B', 'C', 'C', 'C', 'C',
        'C', 'C', 'D', 'D', 'D',
        'D', 'D', 'D'
      ]
      [
        'A', 'A', 'B', 'B', 'B',
        'B', 'C', 'C', 'C', 'C',
        'C', 'C', 'D', 'D', 'D',
        'D', 'D', 'D', 'D'
      ]
      [
        'A', 'A', 'B', 'B', 'B',
        'B', 'C', 'C', 'C', 'C',
        'C', 'C', 'D', 'D', 'D',
        'D', 'D', 'D', 'D', 'D'
      ]
      */
    }
    // console.log(symbols); // it will give the block of figures match with value of i and count are below
    /* if i < count gives the value
  [ 'A', 'A' ]
  [ 'A', 'A', 'B', 'B', 'B', 'B' ]
  [
    'A', 'A', 'B', 'B',
    'B', 'B', 'C', 'C',
    'C', 'C', 'C', 'C'
  ]
  [
    'A', 'A', 'B', 'B', 'B',
    'B', 'C', 'C', 'C', 'C',
    'C', 'C', 'D', 'D', 'D',
    'D', 'D', 'D', 'D', 'D'
  ]
  */
  }
  // console.log(symbols); // it will give the final value of output as below length is 20
  /* Final output 
  [
  'A', 'A', 'B', 'B', 'B',
  'B', 'C', 'C', 'C', 'C',
  'C', 'C', 'D', 'D', 'D',
  'D', 'D', 'D', 'D', 'D'
  ]
   */
  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols]; // copy array
    // console.log(reelSymbols.length); // 20
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length); // length is 20 randomly select the number random is 0 to 1
      // console.log(randomIndex);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      // console.log(reels); // push 3 values in each array by random give below
      /* random values are push into array 
      [ [ 'D' ], [], [] ]
      [ [ 'D', 'C' ], [], [] ]
      [ [ 'D', 'C', 'D' ], [], [] ]
      [ [ 'D', 'C', 'D' ], [ 'B' ], [] ]
      [ [ 'D', 'C', 'D' ], [ 'B', 'C' ], [] ]
      [ [ 'D', 'C', 'D' ], [ 'B', 'C', 'C' ], [] ]
      [ [ 'D', 'C', 'D' ], [ 'B', 'C', 'C' ], [ 'D' ] ]
      [ [ 'D', 'C', 'D' ], [ 'B', 'C', 'C' ], [ 'D', 'D' ] ]
      [ [ 'D', 'C', 'D' ], [ 'B', 'C', 'C' ], [ 'D', 'D', 'C' ] ]
      */
      reelSymbols.splice(randomIndex, 1); //
    }
  }
  return reels;
};

const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    // console.log(rows);
    /* it will push the 3 empty arrays
    [ [] ]
    [ [], [] ]
    [ [], [], [] ]
    */
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
      // console.log(rows);
      /* itterate and reverse the array to rows
      eg : 
      [ [ 'D', 'D', 'D' ], [ 'B', 'D', 'B' ], [ 'D', 'D', 'A' ] ] this is column 
      tranfer to row like below
      [ [ 'D', 'B', 'D' ], [ 'D', 'D', 'D' ], [ 'D', 'B', 'A' ] ]

      [ [ 'D' ] ]
      [ [ 'D', 'B' ] ]
      [ [ 'D', 'B', 'D' ] ]
      [ [ 'D', 'B', 'D' ], [ 'D' ] ]
      [ [ 'D', 'B', 'D' ], [ 'D', 'D' ] ]
      [ [ 'D', 'B', 'D' ], [ 'D', 'D', 'D' ] ]
      [ [ 'D', 'B', 'D' ], [ 'D', 'D', 'D' ], [ 'D' ] ]
      [ [ 'D', 'B', 'D' ], [ 'D', 'D', 'D' ], [ 'D', 'B' ] ]
      [ [ 'D', 'B', 'D' ], [ 'D', 'D', 'D' ], [ 'D', 'B', 'A' ] ]
      */
    }
  }
  return rows;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = ""; // eg A | B | C
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

// 5. check the user won

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOLS_VALUES[symbols[0]];
    }
  }
  return winnings;
};

const game = () => {
  let balance = deposit();
  while (true) {
    console.log("You have a balance of $" + balance);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    // console.log(reels); // [ [ 'A', 'C', 'D' ], [ 'C', 'A', 'D' ], [ 'C', 'D', 'B' ] ]
    /* eg of transpose
  this are in column so need to transpose to row 
  eg. 
  [ [ 'A', 'C', 'D' ], [ 'C', 'A', 'D' ], [ 'C', 'D', 'B' ] ]
  
  ['A','C','C']
  ['C','A','D']
  ['D','D','B']
  
  transpose matrix or array
*/
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, $" + winnings.toString());

    if (balance <= 0) {
      console.log("You Ran Out of Money!");
      break;
    }
    const playAgain = prompt("Do You Want to Play Again (y/n)? ");
    if (playAgain != "y") break;
  }
};

game();
