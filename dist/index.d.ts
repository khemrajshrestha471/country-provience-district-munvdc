import React from 'react';

interface Props {
    onCountryChange: (isNepal: boolean) => void;
}
declare const CountryList: React.FC<Props>;

declare const ProvinceList: () => React.JSX.Element;

export { CountryList, ProvinceList as ProvienceList };
