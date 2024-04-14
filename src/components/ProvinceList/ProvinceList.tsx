// "use client";
// import React, { useState, useEffect } from 'react';
// import provinces from "../../assets/province.json";
// import District from '../DistrictList/DistrictList'

// interface Province {
//     id: number; 
//     province_name_en: string;
// }

// const ProvinceList = ({ selectedCountry  }: {selectedCountry: string}) => {
//     const [selectedProvinceId, setSelectedProvinceId] = useState<any>();
//     const [selectedProvince, setSelectedProvince] = useState<string>("");
//     const [isDisabled, setIsDisabled] = useState<boolean>(true);

//     useEffect(() => {
//         if (selectedCountry === "Nepal") {
//             setIsDisabled(false);
//         } else {
//             setIsDisabled(true);
//             setSelectedProvince("");
//             setSelectedProvinceId(0);
//         }
//     }, [selectedCountry]);

//     const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const selectedProvinceName = event.target.value;
//         const foundProvince = provinces.find(province => province.province_name_en === selectedProvinceName);

//         if (foundProvince) {
//             setSelectedProvinceId(foundProvince.id);
//             setSelectedProvince(selectedProvinceName);
//         } else {
//             setSelectedProvinceId(0); 
//             setSelectedProvince("");
//         }
//     };

//     return (
//         <div>
//             <select onChange={handleProvinceChange} disabled={isDisabled} value={selectedProvince}>
//                 <option value="">Province</option>
//                 {provinces.map((province: Province) => (
//                     <option key={province.id} value={province.province_name_en}>
//                         {province.province_name_en}
//                     </option>
//                 ))}
                
//             </select>
//             <District selectedProvinceId={selectedProvinceId}/>
//         </div>
//     );
// };

// export default ProvinceList;





"use client";
import React, { useState, useEffect } from 'react';
import provinces from "../../assets/province.json";
// import District from '@/app/District/District'

interface Province {
    id: number; 
    province_name_en: string;
}

const ProvinceList = ({ selectedCountry, setSelectedProvinceId  }: {selectedCountry: string, setSelectedProvinceId: (id: number) => void }) => {
    // const [selectedProvinceId, setSelectedProvinceId] = useState<any>();
    const [selectedProvince, setSelectedProvince] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (selectedCountry !== "Nepal") {
            setIsDisabled(true);
            setSelectedProvince("");
            setSelectedProvinceId(0);
        } else {
            setIsDisabled(false);
        }
    }, [selectedCountry]);

    const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedProvinceName = event.target.value;
        const foundProvince = provinces.find(province => province.province_name_en === selectedProvinceName);

        if (foundProvince) {
            setSelectedProvinceId(foundProvince.id);
            setSelectedProvince(selectedProvinceName);
        } else {
            setSelectedProvinceId(0); 
            setSelectedProvince("");
        }
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
            {/* <District selectedProvinceId={selectedProvinceId}/> */}
        </div>
    );
};

export default ProvinceList;