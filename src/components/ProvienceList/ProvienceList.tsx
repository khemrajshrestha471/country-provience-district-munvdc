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





// "use client";
// import React, { useState } from 'react';
// import provinces from "../../assets/province.json";

// interface Province {
//     id: number; 
//     province_name_en: string;
// }

// const ProvinceList = () => {
//     const [selectedProvince, setSelectedProvince] = useState<string>("");

//     const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedProvince(event.target.value);
//     };
//     return (
//         <div>
//             <select onChange={handleProvinceChange}>
//                 <option value="">Province</option>
//                 {provinces.map((province: Province) => (
//                     <option key={province.id} value={province.province_name_en}>
//                         {province.province_name_en}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };

// export default ProvinceList;


"use client";
import React, { useState, useEffect } from 'react';
import provinces from "../../assets/province.json";

interface Province {
    id: number; 
    province_name_en: string;
}

const ProvinceList = ({ selectedCountry }: {selectedCountry: string}) => {
    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (selectedCountry === "Nepal") {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
            setSelectedProvince("");
        }
    }, [selectedCountry]);

    const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProvince(event.target.value);
    };

    return (
        <div>
            <select onChange={handleProvinceChange} disabled={isDisabled} value={selectedProvince}>
                <option value="">Province</option>
                {provinces.map((province: Province) => (
                    <option key={province.id} value={province.province_name_en}>
                        {province.province_name_en}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProvinceList;
