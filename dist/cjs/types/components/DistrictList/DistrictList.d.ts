import React from "react";
declare const DistrictList: ({ selectedProvinceId, setSelectedDistrictId, onDistrictSelect, }: {
    selectedProvinceId: number;
    setSelectedDistrictId: (id: any) => void;
    onDistrictSelect: (district: string) => void;
}) => React.JSX.Element;
export default DistrictList;
