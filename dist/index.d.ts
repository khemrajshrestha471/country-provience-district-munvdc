import React from 'react';

declare const CountryList: ({ onCountrySelect }: {
    onCountrySelect: (country: string) => void;
}) => React.JSX.Element;

declare const ProvinceList: ({ selectedCountry, setSelectedProvinceId }: {
    selectedCountry: string;
    setSelectedProvinceId: (id: number) => void;
}) => React.JSX.Element;

declare const DistrictList: ({ selectedProvinceId, setSelectedDistrictId }: {
    selectedProvinceId: number;
    setSelectedDistrictId: (id: any) => void;
}) => React.JSX.Element;

declare const MunVdcList: ({ selectedDistrictId, selectedProvinceId }: {
    selectedDistrictId: number;
    selectedProvinceId: number;
}) => React.JSX.Element;

export { CountryList, DistrictList, MunVdcList, ProvinceList };
