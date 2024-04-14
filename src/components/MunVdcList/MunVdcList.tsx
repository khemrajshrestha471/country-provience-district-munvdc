"use client";
import React, { useState, useEffect } from "react";
import munvdcs from "../../assets/mun-vdc.json";

interface MunVdc {
  district_id: string;
  local_body_id: string;
  local_body_name_en: string;
}

const MunVdcList = ({
  selectedDistrictId,
  selectedProvinceId,
  onMunVdcSelect,
}: {
  selectedDistrictId: number;
  selectedProvinceId: number;
  onMunVdcSelect: (munvdc: string) => void;
}) => {
  // selectedDistrictId is send because for particular district, the select option should be render
  // selectedProvinceId is send because for particular province, district is render and for particular district the mun-vdc is render
  // onMunVdcSelect is send because user can console log the selected Mun-Vdc from user side

  const [selectedMunVdc, setSelectedMunVdc] = useState<string>("");
  const [filteredMunVdc, setFilteredMunVdc] = useState<MunVdc[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (selectedDistrictId) {
      const filtered = munvdcs.filter(
        (munvdc) => munvdc.district_id === String(selectedDistrictId)
      );
      setFilteredMunVdc(filtered);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      setSelectedMunVdc("");
    }
  }, [selectedDistrictId]);

  useEffect(() => {
    if (selectedProvinceId != 0) {
      setIsDisabled(true);
      setSelectedMunVdc("");
    }
  }, [selectedProvinceId]);
  // This useEffect is used as to reset the value of Mun/Vdc when province value is changed

  const handleMunVdcChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMunVdcName = event.target.value;
    onMunVdcSelect(selectedMunVdcName);
    setSelectedMunVdc(selectedMunVdcName);
  };

  return (
    <div>
      <select
        disabled={isDisabled}
        value={selectedMunVdc}
        onChange={handleMunVdcChange}
      >
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
