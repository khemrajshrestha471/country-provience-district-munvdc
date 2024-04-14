import React from 'react';

declare const CountryList: () => React.JSX.Element;

declare const ProvinceList: ({ selectedCountry }: {
    selectedCountry: string;
}) => React.JSX.Element;

export { CountryList, ProvinceList as ProvienceList };
