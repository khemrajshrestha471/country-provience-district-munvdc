// SelectedCountryStorage.ts
let selectedCountry: string = "";

export const setSelectedCountryStorage = (country: string) => {
    selectedCountry = country;
};

export const getSelectedCountry = () => {
    return selectedCountry;
};
