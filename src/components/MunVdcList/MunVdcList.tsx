"use client";
import React, { useState, useEffect } from 'react';
import munvdcs from "../../assets/mun-vdc.json";

interface MunVdc {
    district_id: string; 
    local_body_id: string; 
    local_body_name_en: string;
}

const MunVdcList = ({ selectedDistrictId, selectedProvinceId }: {selectedDistrictId: number, selectedProvinceId:number}) => {
    const [selectedMunVdc, setSelectedMunVdc] = useState<string>("");
    const [filteredMunVdc, setFilteredMunVdc] = useState<MunVdc[]>([]);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);


    useEffect(() => {
        if(selectedDistrictId && selectedProvinceId) {
            const filtered = munvdcs.filter(munvdc => munvdc.district_id === String(selectedDistrictId));
            setFilteredMunVdc(filtered);
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
            setSelectedMunVdc("");
        }

    }, [selectedDistrictId, selectedProvinceId]);

    const handleMunVdcChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMunVdcName = event.target.value;
        setSelectedMunVdc(selectedMunVdcName)
    };

    return (
        <div>
            <select disabled={isDisabled} value={selectedMunVdc} onChange={handleMunVdcChange}>
                <option value="">Mun/Vdc</option>
                {filteredMunVdc.map((munvdc: MunVdc) => (
                    <option key={munvdc.local_body_id} value={munvdc.local_body_name_en}>
                        {munvdc.local_body_name_en}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MunVdcList;
