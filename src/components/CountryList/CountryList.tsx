// "use client";

// import React, { useState } from 'react';
// import countries from "../../assets/countries.json";
// import Province from '../ProvinceList/ProvinceList'

// interface Country {
//     country_name: string; 
// }

// const CountryList = () => {
//     const [selectedCountry, setSelectedCountry] = useState<string>("");
//     const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedCountry(event.target.value);
//     };

//     return (
//         <div>
//             <select onChange={handleCountryChange} value={selectedCountry}>
//                 <option value="">Country</option>
//                 {countries.map((country: Country) => (
//                     <option key={country.country_name} value={country.country_name}>
//                         {country.country_name}
//                     </option>
//                 ))}
//             </select>
//             <Province selectedCountry={selectedCountry}/>
//         </div>
//     );
// };

// export default CountryList;




"use client";
import React from 'react';
import countries from "../../assets/countries.json";

interface Country {
    country_name: string; 
}

const CountryList = ({ onCountrySelect }: { onCountrySelect: (country: string) => void }) => {

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = event.target.value;
        onCountrySelect(selectedCountry);
    };

    return (
        <div>
            <select onChange={handleCountryChange}>
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