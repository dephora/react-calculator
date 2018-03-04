import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';

const Keypad = ({numbers, operators}) => {

  numbers = numbers.map(number => {
    return (
      <Key 
        key={number}
        keyType="number-key"
        keyValue={number}
      />
    );
  });

  operators = operators.map(operator => {
    return (
      <Key 
        key={operator}
        keyType="operator-key"
        keyValue={operator}
      />
    );
  });

  return (
    <div className="keypad-container">
      <div className="numbers-container">
        {numbers}
      </div>
      <div className="operators-container">
        {operators}
      </div>
      <div className="submit-container">
        <Key
          keyType="submit-key"
          keyValue="="
        />
      </div>
    </div>
  );
}

Keypad.propTypes = {
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
}

export default Keypad;