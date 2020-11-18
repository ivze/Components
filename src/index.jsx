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
              {countries.map((country) => (
                <option value={country.country}>{country.name}</option>
              ))}

              {/* <option value="AF">Afghanistan</option>
              <option value="CZ">Czech Republic</option>
              <option value="BD">Bangladesh</option> 
              
              chci input text, jeho obsah použiju na filtrování pole countries (use effect)
              
              */}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
