import React from 'react'

export default function currencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency
    } = props

  return (
    <div>
      <input type="number" className="input" />
      <select value={selectedCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option} </option>
        ))}

      </select>
    </div>
  );
}
