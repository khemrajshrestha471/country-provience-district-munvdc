# 𝐂𝐨𝐮𝐧𝐭𝐫𝐲-𝐏𝐫𝐨𝐯𝐢𝐧𝐜𝐞-𝐃𝐢𝐬𝐭𝐫𝐢𝐜𝐭-𝐌𝐮𝐧/𝐕𝐝𝐜

This NPM package *country-province-district-munvdc* provides a functionality to choose province based on country, choose district based on province and choose Mun/Vdc based on district selected. 

For more, visit [my blog](https://medium.com/@khemrajshrestha471/-23781ddde950).

**NOTE**: You must have to import country to use this package but other fields may differ as per your requirements.

## Installation

```sh
$ npm i country-province-district-munvdc
```

## Usage

Now you need to import the necessary components from this package.

```typescript
import {
  CountryList,
  ProvinceList,
  DistrictList,
  MunVdcList,
} from "country-province-district-munvdc";
```

Inside your main component, type these code snippets.

```typescript
const [selectedCountry, setSelectedCountry] = useState<string>("");
const [selectedProvince, setSelectedProvince] = useState<string>("");
const [selectedDistrict, setSelectedDistrict] = useState<string>("");
const [selectedMunVdc, setSelectedMunVdc] = useState<string>("");

const [selectedProvinceId, setSelectedProvinceId] = useState<number>(0);

const [selectedDistrictId, setSelectedDistrictId] = useState<number>(0);
```

After this, you have to create one function whose task is to console log the selected value.

```typescript
  const handleSubmit = (selectedCountry: string, selectedProvince:string, selectedDistrict:string, selectedMunVdc:string) => {
    console.log({ 
      country: selectedCountry,
      province: selectedProvince,
      district: selectedDistrict,
      munvdc: selectedMunVdc
     });
  };
```

After that, put these code snippets inside the return ( <> … </> ) section.

```javascript
<CountryList 
   onCountrySelect={setSelectedCountry} 
/>

<ProvinceList
   selectedCountry={selectedCountry}
   setSelectedProvinceId={setSelectedProvinceId}
   onProvinceSelect={setSelectedProvince}
/>

<DistrictList
   selectedProvinceId={selectedProvinceId}
   setSelectedDistrictId={setSelectedDistrictId}
   onDistrictSelect={setSelectedDistrict}
/>

<MunVdcList
   selectedDistrictId={selectedDistrictId}
   selectedProvinceId={selectedProvinceId}
   onMunVdcSelect={setSelectedMunVdc}
/>
```

Lastly, you need to create a button that is used to send the selected value in the backend (console in this case).

```html

<button type="submit" onClick={() => handleSubmit(selectedCountry, selectedProvince, selectedDistrict, selectedMunVdc)}>
  Submit
</button>

```

## Here’s complete code for implementing this feature.

```typescript

"use client";
import React, { useState } from "react";
import {
  CountryList,
  ProvinceList,
  DistrictList,
  MunVdcList,
} from "country-province-district-munvdc";

const ConditionalSelect= () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedMunVdc, setSelectedMunVdc] = useState<string>("");

  const [selectedProvinceId, setSelectedProvinceId] = useState<number>(0);

  const [selectedDistrictId, setSelectedDistrictId] = useState<number>(0);

  const handleSubmit = (selectedCountry: string, selectedProvince:string, selectedDistrict:string, selectedMunVdc:string) => {
    console.log({ 
      country: selectedCountry,
      province: selectedProvince,
      district: selectedDistrict,
      munvdc: selectedMunVdc
     });
  };

  return (
    <>
      <CountryList onCountrySelect={setSelectedCountry} />

      <ProvinceList
        selectedCountry={selectedCountry}
        setSelectedProvinceId={setSelectedProvinceId}
        onProvinceSelect={setSelectedProvince}
      />

      <DistrictList
        selectedProvinceId={selectedProvinceId}
        setSelectedDistrictId={setSelectedDistrictId}
        onDistrictSelect={setSelectedDistrict}
      />

      <MunVdcList
        selectedDistrictId={selectedDistrictId}
        selectedProvinceId={selectedProvinceId}
        onMunVdcSelect={setSelectedMunVdc}
      />

      <button type="submit" onClick={() => handleSubmit(selectedCountry, selectedProvince, selectedDistrict, selectedMunVdc)}>
        Submit
      </button>
    </>
  );
};

export default ConditionalSelect;

```

Let me also provide a bit more clarity on the feature for cases where you only want to implement country and province.

## Here’s the code snippets for this case.

```typescript

"use client";
import React, { useState } from "react";
import {
  CountryList,
  ProvinceList,
} from "country-province-district-munvdc";

const ConditionalSelect= () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedProvince, setSelectedProvince] = useState<string>("");

  const [selectedProvinceId, setSelectedProvinceId] = useState<number>(0);

  const handleSubmit = (selectedCountry: string, selectedProvince:string) => {
    console.log({ 
      country: selectedCountry,
      province: selectedProvince
     });
  };

  return (
    <>
      <CountryList onCountrySelect={setSelectedCountry} />

      <ProvinceList
        selectedCountry={selectedCountry}
        setSelectedProvinceId={setSelectedProvinceId}
        onProvinceSelect={setSelectedProvince}
      />

      <button type="submit" onClick={() => handleSubmit(selectedCountry, selectedProvince)}>
        Submit
      </button>
    </>
  );
};

export default ConditionalSelect;

```

## License

[MIT](LICENSE)
