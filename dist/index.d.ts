import React from 'react';

declare const CountryList: () => React.JSX.Element;

interface Props {
    countryName: string;
}
declare const ProvinceList: React.FC<Props>;

export { CountryList, ProvinceList as ProvienceList };
