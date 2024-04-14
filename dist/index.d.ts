import React from 'react';

declare const CountryList: ({ onCountrySelect, }: {
    onCountrySelect: (country: string) => void;
}) => React.JSX.Element;

declare const ProvinceList: ({ selectedCountry, setSelectedProvinceId, onProvinceSelect, }: {
    selectedCountry: string;
    setSelectedProvinceId: (id: number) => void;
    onProvinceSelect: (province: string) => void;
}) => React.JSX.Element;

declare const DistrictList: ({ selectedProvinceId, setSelectedDistrictId, onDistrictSelect, }: {
    selectedProvinceId: number;
    setSelectedDistrictId: (id: any) => void;
    onDistrictSelect: (district: string) => void;
}) => React.JSX.Element;

declare const MunVdcList: ({ selectedDistrictId, selectedProvinceId, onMunVdcSelect, }: {
    selectedDistrictId: number;
    selectedProvinceId: number;
    onMunVdcSelect: (munvdc: string) => void;
}) => React.JSX.Element;

export { CountryList, DistrictList, MunVdcList, ProvinceList };
