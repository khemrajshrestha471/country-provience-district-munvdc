// import React, { useState } from 'react';
import React from 'react';
import countries from "../../assets/countries.json";

interface Country {
    country_name: string; // defining types of country_name for typescript
}

const CountryList = () => {
    // const [selectedCountry, setSelectedCountry] = useState<string>(""); // state variable to store selected country value

    // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => { // this function trigger when value select in select field
    //     setSelectedCountry(event.target.value);
    // };

    return (
        <div>
            {/* <select value={selectedCountry} onChange={handleChange}> */}
            <select>
                <option value="">Country</option>
                {countries.map((country: Country) => (
                    <option key={country.country_name} value={country.country_name}>
                        {country.country_name}
                    </option>
                ))}
            </select>
            {/* {selectedCountry && <p>Selected country: {selectedCountry}</p>} */}
        </div>
    );
};

export default CountryList;
