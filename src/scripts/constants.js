console.log('This is constants example!');

// const avengerId;
/**
 * This declaration of a constant 'avengerId' will fail
 * because you need to initialize a constant when it is declared!
 * Browser will not explicitly point out that constants have to be initialized when declared.
 * Instead it will say:
 * "Module parse failed: Unexpected token (lineNumber:positionOfTheSemicolon)
 * You may need an appropriate loader to handle this file type."
 */

const avengerId = 216;
//correct declaration and initialization of a constant
console.log("Value of the avengerId constant: " + avengerId);

// avengerId = 21;
/**
 * Illegal change of constant value!
 * Constants were introduced to prevent programmer error
 * which can happen when a variable which should not be changed is changed.
 * To prevent this use const(ants).
 * If constant's value is changed, browser will show in the console:
 * "Uncaught TypeError: Assignment to constant variable."
 */