import React from 'react';
declare const MunVdcList: ({ selectedDistrictId, selectedProvinceId, onMunVdcSelect }: {
    selectedDistrictId: number;
    selectedProvinceId: number;
    onMunVdcSelect: (munvdc: string) => void;
}) => React.JSX.Element;
export default MunVdcList;
