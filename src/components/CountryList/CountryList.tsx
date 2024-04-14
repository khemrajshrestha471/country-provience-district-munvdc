"use client";
import React, { useState } from 'react';
import countries from "../../assets/countries.json";

interface Country {
    country_name: string; 
}

const CountryList = ({ onCountrySelect }: { onCountrySelect: (country: string) => void }) => {
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryValue = event.target.value;
        setSelectedCountry(selectedCountryValue);
        onCountrySelect(selectedCountryValue);
    };

    return (
        <div>
            <select onChange={handleCountryChange} value={selectedCountry}>
                <option value="">Country</option>
                {countries.map((country: Country) => (
                    <option key={country.country_name} value={country.country_name}>
                        {country.country_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountryList;


// make such feature so that when user create button type is submit then the selected value should automatically send in console