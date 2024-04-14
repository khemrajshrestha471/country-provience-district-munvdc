"use client";
import React, { useState, useEffect } from "react";
import provinces from "../../assets/province.json";

interface Province {
  id: number;
  province_name_en: string;
}

const ProvinceList = ({
  selectedCountry,
  setSelectedProvinceId,
  onProvinceSelect,
}: {
  selectedCountry: string;
  setSelectedProvinceId: (id: number) => void;
  onProvinceSelect: (province: string) => void;
}) => {
  // selectedCountry is send as for only Nepal the province field should be enable
  // setSelectedProvinceId is send because for particular province, the select option should be render
  // onProvinceSelect is send because user can console log the selected province from user side
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
  // useEffect is used here as it should re-render the code as soon as the value in country select field is changed

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedProvinceName = event.target.value;
    onProvinceSelect(selectedProvinceName);
    const foundProvince = provinces.find(
      (province) => province.province_name_en === selectedProvinceName
    );
    // conditionally render the Province field option for selected country i.e Nepal

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
      <select
        onChange={handleProvinceChange}
        disabled={isDisabled}
        value={selectedProvince}
      >
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
