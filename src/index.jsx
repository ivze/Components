import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import './index.html';
import { countries } from './countries.js';

const App = () => {
  const [country, setCountry] = useState('CZ');

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="container">
      <div className="country-info">
        <form>
          <div className="form-field">
            <label htmlFor="country-select">Country:</label>
            <select
              id="country-select"
              value={country}
              onChange={handleCountryChange}
            >
              <option value="AF">Afghanistan</option>
              <option value="CZ">Czech Republic</option>
              <option value="BD">Bangladesh</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
