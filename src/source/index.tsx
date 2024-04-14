"use client";
import React, { useState } from "react";
import Country from "../components/CountryList/CountryList";
import Province from "../components/ProvinceList/ProvinceList";
import District from "../components/DistrictList/DistrictList";
import MunVdc from "../components/MunVdcList/MunVdcList";
const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedProvinceId, setSelectedProvinceId] = useState<number>(0);
  const [selectedDistrictId, setSelectedDistrictId] = useState<number>(0);
  return (
    <>

      <Country onCountrySelect={setSelectedCountry} />

      <Province selectedCountry={selectedCountry} setSelectedProvinceId={setSelectedProvinceId} />

      <District selectedProvinceId={selectedProvinceId} setSelectedDistrictId={setSelectedDistrictId}/>

      <MunVdc selectedDistrictId={selectedDistrictId} selectedProvinceId={selectedProvinceId} />
      
    </>
  );
};

export default Home;