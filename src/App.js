import './App.css';
import { useState } from 'react';

function App() {
  //#region State Variables (not relevant to assignment)
  const [calcCurrentValue, setCalcCurrentValue] = useState('');
  const [calcOperationSelection, setCalcOperationSelection] = useState('none');
  const [calcSignSelection, setCalcSignSelection] = useState('+');
  const [calcNumberSelection, setCalcNumberSelection] = useState('');
  //#endregion

  //#region Button Event Callbacks (used in assignment)
  function btnClear() {
    setCalcCurrentValue('');
    setCalcNumberSelection('');
    setCalcOperationSelection('none');
    setCalcSignSelection('+');
  }

  function btnBackspace() {
    setCalcNumberSelection(
      (calcNumberSelection.length <= 1)
        ? ''
        : calcNumberSelection.substring(0, calcNumberSelection.length - 1)
    );
  }

  function btnSelectOperationModulus() {
    btnSelectOperation_Helper('mod');
  }

  function btnSelectOperationDivision() {
    btnSelectOperation_Helper('div');
  }

  function btnSelectOperationMultiplication() {
    btnSelectOperation_Helper('mul');
  }

  function btnSelectOperationAddition() {
    btnSelectOperation_Helper('add');
  }

  function btnSelectOperationSubtraction() {
    btnSelectOperation_Helper('sub');
  }

  function btnSelectSign() {
    if (calcSignSelection === '+') {
      setCalcSignSelection('-');
    }
    else {
      setCalcSignSelection('+');
    }
  }

  function btnClickNumber0() {
    btnClickNumber_Helper('0');
  }

  function btnClickNumber1() {
    btnClickNumber_Helper('1');
  }

  function btnClickNumber2() {
    btnClickNumber_Helper('2');
  }

  function btnClickNumber3() {
    btnClickNumber_Helper('3');
  }

  function btnClickNumber4() {
    btnClickNumber_Helper('4');
  }

  function btnClickNumber5() {
    btnClickNumber_Helper('5');
  }

  function btnClickNumber6() {
    btnClickNumber_Helper('6');
  }

  function btnClickNumber7() {
    btnClickNumber_Helper('7');
  }

  function btnClickNumber8() {
    btnClickNumber_Helper('8');
  }

  function btnClickNumber9() {
    btnClickNumber_Helper('9');
  }

  function btnClickNumberPeriod() {
    btnClickNumber_Helper('.');
  }

  function btnPerformCalculation() {
    if (calcCurrentValue !== '' && calcOperationSelection !== 'none' && calcNumberSelection !== '') {
      switch (calcOperationSelection) {
        case 'mod': setCalcCurrentValue('' + (+calcCurrentValue % +(calcSignSelection + calcNumberSelection))); break;
        case 'div': setCalcCurrentValue('' + (+calcCurrentValue / +(calcSignSelection + calcNumberSelection))); break;
        case 'mul': setCalcCurrentValue('' + (+calcCurrentValue * +(calcSignSelection + calcNumberSelection))); break;
        case 'add': setCalcCurrentValue('' + (+calcCurrentValue + +(calcSignSelection + calcNumberSelection))); break;
        case 'sub': setCalcCurrentValue('' + (+calcCurrentValue - +(calcSignSelection + calcNumberSelection))); break;
        default: console.error('unknown operation selection: ' + calcOperationSelection);
      }

      setCalcNumberSelection('');
      setCalcSignSelection('+');
      setCalcOperationSelection('none');
    }
  }
  //#endregion

  //#region Helper Functions (not relevant to assignment)
  function btnSelectOperation_Helper(op) {
    if (calcCurrentValue !== '' || calcNumberSelection !== '') {
      setCalcOperationSelection(op);
      if (calcCurrentValue === '' && calcNumberSelection !== '') {
        setCalcCurrentValue((calcSignSelection !== '-') ? calcNumberSelection : '-' + calcNumberSelection);
        setCalcNumberSelection('');
        setCalcSignSelection('+');
      }
    }
  }

  function btnClickNumber_Helper(key) {
    if (key !== '.' || !calcNumberSelection.includes('.')) {
      if (calcCurrentValue === '' || calcOperationSelection !== 'none') {
        setCalcNumberSelection(calcNumberSelection + key);
      }
    }
  }

  function getOperationString(op) {
    switch (op) {
      case 'mod': return '%';
      case 'div': return '÷';
      case 'mul': return '×';
      case 'add': return '+';
      case 'sub': return '-';
      default: console.error('unknown operation: ' + op);
    }
  }

  function renderDisplayText() {
    console.log('update', calcCurrentValue, calcOperationSelection, calcNumberSelection, calcSignSelection)
    if (calcCurrentValue !== '') {
      if (calcOperationSelection !== 'none') {
        if (calcNumberSelection !== '') {
          return `${calcCurrentValue} ${getOperationString(calcOperationSelection)} ${(calcSignSelection !== '-') ? '' : '-'}${calcNumberSelection}`;
        }
        else {
          return `${calcCurrentValue} ${getOperationString(calcOperationSelection)}`;
        }
      }
      else {
        return calcCurrentValue;
      }
    }
    else if (calcNumberSelection !== '') {
      return ((calcSignSelection !== '-') ? '' : '-') + calcNumberSelection;
    }
    else {
      return '';
    }
  }
  //#endregion

  /*

    ASSIGNMENT INSTRUCTIONS

    Use the "Button Event Callbacks" functions to fix and implement the event listeners

    1) Fix the broken event listeners
    2) Implement the missing event listeners

    NOTE: The following buttons are already correctly implemented!
    - Clear Button
    - Subtract Button
    - "1" Button
    - Equals Button

  */
  return (
    <div id="calc">
      <div id="calc-display">{ renderDisplayText() }</div>
      <div id="calc-buttons">
        <button onClick={btnClear}>Clear</button>
        <button onClick={btnBackspace}>&lt;×]</button>
        <button onClick={btnSelectOperationModulus}>%</button>
        <button onClick={btnSelectOperationDivision}>÷</button>
        <button onClick={btnClickNumber7}>7</button>
        <button onClick={btnClickNumber8}>8</button>
        <button onClick={btnClickNumber9}>9</button>
        <button onClick={btnSelectOperationMultiplication}>×</button>
        <button onClick={btnClickNumber4}>4</button>
        <button onClick={btnClickNumber5}>5</button>
        <button onClick={btnClickNumber6}>6</button>
        <button onClick={btnSelectOperationSubtraction}>-</button>
        <button onClick={btnClickNumber1}>1</button>
        <button onClick={btnClickNumber2}>2</button>
        <button onClick={btnClickNumber3}>3</button>
        <button onClick={btnSelectOperationAddition}>+</button>
        <button onClick={btnSelectSign}>±</button>
        <button onClick={btnClickNumber0}>0</button>
        <button onClick={btnClickNumberPeriod}>.</button>
        <button onClick={btnPerformCalculation}>=</button>
      </div>
    </div>
  );
}

export default App;
