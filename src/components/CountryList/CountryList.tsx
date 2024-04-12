
// import React from 'react';
// import countries from "../../assets/countries.json";
// import ProvinceList from '../ProvienceList/ProvienceList';

// interface Country {
//     country_name: string; 
// }

// const CountryList = () => {
//     const [selectedCountry, setSelectedCountry] = React.useState<string>("");

//     const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedCountry(event.target.value);
//     };
//     return (
//         <div>
//             <select onChange={handleCountryChange}>
//                 <option value="">Country</option>
//                 {countries.map((country: Country) => (
//                     <option key={country.country_name} value={country.country_name}>
//                         {country.country_name}
//                     </option>
//                 ))}
//             </select>
//             <ProvinceList countryName={selectedCountry} />
//         </div>
//     );
// };

// export default CountryList;





"use client";

import React, { useState } from 'react';
import countries from "../../assets/countries.json";
import ProvinceList from '../ProvienceList/ProvienceList';
interface Country {
    country_name: string; 
}

const CountryList = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>("");

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(event.target.value);
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
            <ProvinceList countryName={selectedCountry} />
        </div>
    );
};

export default CountryList;