// import React from "react"

// const ProvinceList = () => {
//     return (
//         <>
//         <h1>This is ProvinceList</h1>
//         </>
//     )
// }

// export default ProvinceList


// "use client";
// import React, { useState, useEffect } from 'react';

// interface Props {
//     countryName: string;
// }

// const ProvinceList: React.FC<Props> = ({ countryName }) => {
//     const [selectedProvince, setSelectedProvince] = useState<string>("");
//     const [disabled, setDisabled] = useState<boolean>(countryName !== "Nepal");

//     useEffect(() => {
//         setSelectedProvince("");
//         setDisabled(countryName !== "Nepal");
//     }, [countryName]);

//     const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedProvince(event.target.value);
//     };

//     return (
//         <>
//             <select value={selectedProvince} disabled={disabled} onChange={handleProvinceChange}>
//                 <option value="">Province</option>
//                 <option value="Koshi">Koshi</option>
//                 <option value="Provience 2">Province 2</option>
//                 <option value="Bagmati">Bagmati</option>
//             </select>
//         </>
//     );
// };

// export default ProvinceList;





// DisplayCountryStatus.tsx
// import React from 'react';
// import { handleCountryValue } from '../CountryList/CountryHandler';

// const ProvinceList = () => {
//     const selectedCountry = handleCountryValue();

//     return (
//         <div>
//             {selectedCountry === "Nepal" ? (
//                 <h1>Good</h1>
//             ) : (
//                 <h1>Not Good</h1>
//             )}
//         </div>
//     );
// };

// export default ProvinceList;



import React from 'react';
import handleCountryValue from '../CountryList/CountryHandler'; // Importing the function

const ProvinceList = () => {
    const selectedCountry = handleCountryValue(""); // Pass any default value if needed

    // Check if the selected country is "Nepal"
    const isGoodCountry = selectedCountry === "Nepal";

    return (
        <div>
            {/* Display "Good" or "Bad" based on the selected country */}
            {isGoodCountry ? <h1>Good</h1> : <h1>Bad</h1>}
        </div>
    );
};

export default ProvinceList;

