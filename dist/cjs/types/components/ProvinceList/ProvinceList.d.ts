import React from "react";
declare const ProvinceList: ({ selectedCountry, setSelectedProvinceId, onProvinceSelect, }: {
    selectedCountry: string;
    setSelectedProvinceId: (id: number) => void;
    onProvinceSelect: (province: string) => void;
}) => React.JSX.Element;
export default ProvinceList;
