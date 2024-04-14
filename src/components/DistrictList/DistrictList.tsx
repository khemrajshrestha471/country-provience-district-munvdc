"use client";
import React, { useState, useEffect } from 'react';
import districts from "../../assets/districts.json";
interface District {
    district_id: string; 
    province_id: string;
    district_name_en: string;
}

const DistrictList = ({ selectedProvinceId, setSelectedDistrictId }: {selectedProvinceId: number, setSelectedDistrictId: (id: any) => void }) => {
    const [selectedDistrict, setSelectedDistrict] = useState<string>("");
    const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);


    useEffect(() => {
        if(selectedProvinceId) {
            const filtered = districts.filter(district => district.province_id === String(selectedProvinceId));
            setFilteredDistricts(filtered);
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
            setSelectedDistrict("");
            setSelectedDistrictId(0);
        }

    }, [selectedProvinceId]);

    const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDistrictName = event.target.value;
        const foundDistrict = districts.find(district => district.district_name_en === selectedDistrictName);

        if (foundDistrict) {
            setSelectedDistrictId(foundDistrict.district_id);
            setSelectedDistrict(selectedDistrictName);
        } else {
            setSelectedDistrictId(0); 
            setSelectedDistrict("");
        }
    };

    return (
        <div>
            <select disabled={isDisabled} value={selectedDistrict} onChange={handleDistrictChange}>
                <option value="">District</option>
                {filteredDistricts.map((district: District) => (
                    <option key={district.district_id} value={district.district_name_en}>
                        {district.district_name_en}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DistrictList;