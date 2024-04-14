"use client";
import React, { useState } from "react";
import countries from "../../assets/countries.json";

interface Country {
  country_name: string;
}

const CountryList = ({
  onCountrySelect,
}: {
  onCountrySelect: (country: string) => void;
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryName = event.target.value;
    setSelectedCountry(selectedCountryName);
    onCountrySelect(selectedCountryName); // send selected country to the user side which can be taken as a props and can console log the selected country
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
