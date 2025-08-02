import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('Euro');

  const handleSubmit = (e) => {
    e.preventDefault();
    let convertedAmount = 0;
    
    if (currency === 'Euro') {
      convertedAmount = parseFloat(amount) * 80;
    }

    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  return (
    <div>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Currency:
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="Euro">Euro</option>
            <option value="USD">USD</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
