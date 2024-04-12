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





// CountryDisplay.tsx

import React from 'react';
import { handleCountryValue } from '../CountryList/CountryHandler'; // Importing the function

const ProvinceList = () => {
    // Assuming you have a component function where you get the country name from some source
    // For demonstration purposes, let's assume you have a hardcoded country name here
    const countryName = "Nepal"; // You can replace this with your actual country name source

    // Get the processed value from the handleCountryValue function
    const processedValue = handleCountryValue(countryName);

    // Determine the message to display based on the processed value
    const message = processedValue === "Nepal" ? "Good" : "Not Good";

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default ProvinceList;

