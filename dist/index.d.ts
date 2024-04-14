import React from 'react';

declare const CountryList: () => React.JSX.Element;

declare const ProvinceList: ({ selectedCountry }: {
    selectedCountry: string;
}) => React.JSX.Element;

declare const DistrictList: ({ selectedProvinceId }: {
    selectedProvinceId: number;
}) => React.JSX.Element;

declare const MunVdcList: ({ selectedDistrictId, selectedProvinceId }: {
    selectedDistrictId: number;
    selectedProvinceId: number;
}) => React.JSX.Element;

export { CountryList, DistrictList, MunVdcList, ProvinceList };
