import { add, subtract, multiply, divide } from './math.js';
import { showResult } from './messages.js';

const a = 10;
const b = 5;

showResult('dodawania', add(a, b));
showResult('odejmowania', subtract(a, b));
showResult('mnożenia', multiply(a, b));
showResult('dzielenia', divide(a, b));