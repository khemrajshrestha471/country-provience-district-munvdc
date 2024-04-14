import React, { useState, useEffect } from 'react';

var countries = [
	{
		country_name: "Åland Islands",
		country_cca2: "AX",
		country_cca3: "ALA"
	},
	{
		country_name: "Afghanistan",
		country_cca2: "AF",
		country_cca3: "AFG"
	},
	{
		country_name: "Albania",
		country_cca2: "AL",
		country_cca3: "ALB"
	},
	{
		country_name: "Algeria",
		country_cca2: "DZ",
		country_cca3: "DZA"
	},
	{
		country_name: "American Samoa",
		country_cca2: "AS",
		country_cca3: "ASM"
	},
	{
		country_name: "Andorra",
		country_cca2: "AD",
		country_cca3: "AND"
	},
	{
		country_name: "Angola",
		country_cca2: "AO",
		country_cca3: "AGO"
	},
	{
		country_name: "Anguilla",
		country_cca2: "AI",
		country_cca3: "AIA"
	},
	{
		country_name: "Antarctica",
		country_cca2: "AQ",
		country_cca3: "ATA"
	},
	{
		country_name: "Antigua and Barbuda",
		country_cca2: "AG",
		country_cca3: "ATG"
	},
	{
		country_name: "Argentina",
		country_cca2: "AR",
		country_cca3: "ARG"
	},
	{
		country_name: "Armenia",
		country_cca2: "AM",
		country_cca3: "ARM"
	},
	{
		country_name: "Aruba",
		country_cca2: "AW",
		country_cca3: "ABW"
	},
	{
		country_name: "Australia",
		country_cca2: "AU",
		country_cca3: "AUS"
	},
	{
		country_name: "Austria",
		country_cca2: "AT",
		country_cca3: "AUT"
	},
	{
		country_name: "Azerbaijan",
		country_cca2: "AZ",
		country_cca3: "AZE"
	},
	{
		country_name: "Bahamas",
		country_cca2: "BS",
		country_cca3: "BHS"
	},
	{
		country_name: "Bahrain",
		country_cca2: "BH",
		country_cca3: "BHR"
	},
	{
		country_name: "Bangladesh",
		country_cca2: "BD",
		country_cca3: "BGD"
	},
	{
		country_name: "Barbados",
		country_cca2: "BB",
		country_cca3: "BRB"
	},
	{
		country_name: "Belarus",
		country_cca2: "BY",
		country_cca3: "BLR"
	},
	{
		country_name: "Belgium",
		country_cca2: "BE",
		country_cca3: "BEL"
	},
	{
		country_name: "Belize",
		country_cca2: "BZ",
		country_cca3: "BLZ"
	},
	{
		country_name: "Benin",
		country_cca2: "BJ",
		country_cca3: "BEN"
	},
	{
		country_name: "Bermuda",
		country_cca2: "BM",
		country_cca3: "BMU"
	},
	{
		country_name: "Bhutan",
		country_cca2: "BT",
		country_cca3: "BTN"
	},
	{
		country_name: "Bolivia",
		country_cca2: "BO",
		country_cca3: "BOL"
	},
	{
		country_name: "Bosnia and Herzegovina",
		country_cca2: "BA",
		country_cca3: "BIH"
	},
	{
		country_name: "Botswana",
		country_cca2: "BW",
		country_cca3: "BWA"
	},
	{
		country_name: "Bouvet Island",
		country_cca2: "BV",
		country_cca3: "BVT"
	},
	{
		country_name: "Brazil",
		country_cca2: "BR",
		country_cca3: "BRA"
	},
	{
		country_name: "British Indian Ocean Territory",
		country_cca2: "IO",
		country_cca3: "IOT"
	},
	{
		country_name: "British Virgin Islands",
		country_cca2: "VG",
		country_cca3: "VGB"
	},
	{
		country_name: "Brunei",
		country_cca2: "BN",
		country_cca3: "BRN"
	},
	{
		country_name: "Bulgaria",
		country_cca2: "BG",
		country_cca3: "BGR"
	},
	{
		country_name: "Burkina Faso",
		country_cca2: "BF",
		country_cca3: "BFA"
	},
	{
		country_name: "Burundi",
		country_cca2: "BI",
		country_cca3: "BDI"
	},
	{
		country_name: "Cambodia",
		country_cca2: "KH",
		country_cca3: "KHM"
	},
	{
		country_name: "Cameroon",
		country_cca2: "CM",
		country_cca3: "CMR"
	},
	{
		country_name: "Canada",
		country_cca2: "CA",
		country_cca3: "CAN"
	},
	{
		country_name: "Cape Verde",
		country_cca2: "CV",
		country_cca3: "CPV"
	},
	{
		country_name: "Caribbean Netherlands",
		country_cca2: "BQ",
		country_cca3: "BES"
	},
	{
		country_name: "Cayman Islands",
		country_cca2: "KY",
		country_cca3: "CYM"
	},
	{
		country_name: "Central African Republic",
		country_cca2: "CF",
		country_cca3: "CAF"
	},
	{
		country_name: "Chad",
		country_cca2: "TD",
		country_cca3: "TCD"
	},
	{
		country_name: "Chile",
		country_cca2: "CL",
		country_cca3: "CHL"
	},
	{
		country_name: "China",
		country_cca2: "CN",
		country_cca3: "CHN"
	},
	{
		country_name: "Christmas Island",
		country_cca2: "CX",
		country_cca3: "CXR"
	},
	{
		country_name: "Cocos (Keeling) Islands",
		country_cca2: "CC",
		country_cca3: "CCK"
	},
	{
		country_name: "Colombia",
		country_cca2: "CO",
		country_cca3: "COL"
	},
	{
		country_name: "Comoros",
		country_cca2: "KM",
		country_cca3: "COM"
	},
	{
		country_name: "Cook Islands",
		country_cca2: "CK",
		country_cca3: "COK"
	},
	{
		country_name: "Costa Rica",
		country_cca2: "CR",
		country_cca3: "CRI"
	},
	{
		country_name: "Croatia",
		country_cca2: "HR",
		country_cca3: "HRV"
	},
	{
		country_name: "Cuba",
		country_cca2: "CU",
		country_cca3: "CUB"
	},
	{
		country_name: "Curaçao",
		country_cca2: "CW",
		country_cca3: "CUW"
	},
	{
		country_name: "Cyprus",
		country_cca2: "CY",
		country_cca3: "CYP"
	},
	{
		country_name: "Czechia",
		country_cca2: "CZ",
		country_cca3: "CZE"
	},
	{
		country_name: "Denmark",
		country_cca2: "DK",
		country_cca3: "DNK"
	},
	{
		country_name: "Djibouti",
		country_cca2: "DJ",
		country_cca3: "DJI"
	},
	{
		country_name: "Dominica",
		country_cca2: "DM",
		country_cca3: "DMA"
	},
	{
		country_name: "Dominican Republic",
		country_cca2: "DO",
		country_cca3: "DOM"
	},
	{
		country_name: "DR Congo",
		country_cca2: "CD",
		country_cca3: "COD"
	},
	{
		country_name: "Ecuador",
		country_cca2: "EC",
		country_cca3: "ECU"
	},
	{
		country_name: "Egypt",
		country_cca2: "EG",
		country_cca3: "EGY"
	},
	{
		country_name: "El Salvador",
		country_cca2: "SV",
		country_cca3: "SLV"
	},
	{
		country_name: "Equatorial Guinea",
		country_cca2: "GQ",
		country_cca3: "GNQ"
	},
	{
		country_name: "Eritrea",
		country_cca2: "ER",
		country_cca3: "ERI"
	},
	{
		country_name: "Estonia",
		country_cca2: "EE",
		country_cca3: "EST"
	},
	{
		country_name: "Eswatini",
		country_cca2: "SZ",
		country_cca3: "SWZ"
	},
	{
		country_name: "Ethiopia",
		country_cca2: "ET",
		country_cca3: "ETH"
	},
	{
		country_name: "Falkland Islands",
		country_cca2: "FK",
		country_cca3: "FLK"
	},
	{
		country_name: "Faroe Islands",
		country_cca2: "FO",
		country_cca3: "FRO"
	},
	{
		country_name: "Fiji",
		country_cca2: "FJ",
		country_cca3: "FJI"
	},
	{
		country_name: "Finland",
		country_cca2: "FI",
		country_cca3: "FIN"
	},
	{
		country_name: "France",
		country_cca2: "FR",
		country_cca3: "FRA"
	},
	{
		country_name: "French Guiana",
		country_cca2: "GF",
		country_cca3: "GUF"
	},
	{
		country_name: "French Polynesia",
		country_cca2: "PF",
		country_cca3: "PYF"
	},
	{
		country_name: "French Southern and Antarctic Lands",
		country_cca2: "TF",
		country_cca3: "ATF"
	},
	{
		country_name: "Gabon",
		country_cca2: "GA",
		country_cca3: "GAB"
	},
	{
		country_name: "Gambia",
		country_cca2: "GM",
		country_cca3: "GMB"
	},
	{
		country_name: "Georgia",
		country_cca2: "GE",
		country_cca3: "GEO"
	},
	{
		country_name: "Germany",
		country_cca2: "DE",
		country_cca3: "DEU"
	},
	{
		country_name: "Ghana",
		country_cca2: "GH",
		country_cca3: "GHA"
	},
	{
		country_name: "Gibraltar",
		country_cca2: "GI",
		country_cca3: "GIB"
	},
	{
		country_name: "Greece",
		country_cca2: "GR",
		country_cca3: "GRC"
	},
	{
		country_name: "Greenland",
		country_cca2: "GL",
		country_cca3: "GRL"
	},
	{
		country_name: "Grenada",
		country_cca2: "GD",
		country_cca3: "GRD"
	},
	{
		country_name: "Guadeloupe",
		country_cca2: "GP",
		country_cca3: "GLP"
	},
	{
		country_name: "Guam",
		country_cca2: "GU",
		country_cca3: "GUM"
	},
	{
		country_name: "Guatemala",
		country_cca2: "GT",
		country_cca3: "GTM"
	},
	{
		country_name: "Guernsey",
		country_cca2: "GG",
		country_cca3: "GGY"
	},
	{
		country_name: "Guinea",
		country_cca2: "GN",
		country_cca3: "GIN"
	},
	{
		country_name: "Guinea-Bissau",
		country_cca2: "GW",
		country_cca3: "GNB"
	},
	{
		country_name: "Guyana",
		country_cca2: "GY",
		country_cca3: "GUY"
	},
	{
		country_name: "Haiti",
		country_cca2: "HT",
		country_cca3: "HTI"
	},
	{
		country_name: "Heard Island and McDonald Islands",
		country_cca2: "HM",
		country_cca3: "HMD"
	},
	{
		country_name: "Honduras",
		country_cca2: "HN",
		country_cca3: "HND"
	},
	{
		country_name: "Hong Kong",
		country_cca2: "HK",
		country_cca3: "HKG"
	},
	{
		country_name: "Hungary",
		country_cca2: "HU",
		country_cca3: "HUN"
	},
	{
		country_name: "Iceland",
		country_cca2: "IS",
		country_cca3: "ISL"
	},
	{
		country_name: "India",
		country_cca2: "IN",
		country_cca3: "IND"
	},
	{
		country_name: "Indonesia",
		country_cca2: "ID",
		country_cca3: "IDN"
	},
	{
		country_name: "Iran",
		country_cca2: "IR",
		country_cca3: "IRN"
	},
	{
		country_name: "Iraq",
		country_cca2: "IQ",
		country_cca3: "IRQ"
	},
	{
		country_name: "Ireland",
		country_cca2: "IE",
		country_cca3: "IRL"
	},
	{
		country_name: "Isle of Man",
		country_cca2: "IM",
		country_cca3: "IMN"
	},
	{
		country_name: "Israel",
		country_cca2: "IL",
		country_cca3: "ISR"
	},
	{
		country_name: "Italy",
		country_cca2: "IT",
		country_cca3: "ITA"
	},
	{
		country_name: "Ivory Coast",
		country_cca2: "CI",
		country_cca3: "CIV"
	},
	{
		country_name: "Jamaica",
		country_cca2: "JM",
		country_cca3: "JAM"
	},
	{
		country_name: "Japan",
		country_cca2: "JP",
		country_cca3: "JPN"
	},
	{
		country_name: "Jersey",
		country_cca2: "JE",
		country_cca3: "JEY"
	},
	{
		country_name: "Jordan",
		country_cca2: "JO",
		country_cca3: "JOR"
	},
	{
		country_name: "Kazakhstan",
		country_cca2: "KZ",
		country_cca3: "KAZ"
	},
	{
		country_name: "Kenya",
		country_cca2: "KE",
		country_cca3: "KEN"
	},
	{
		country_name: "Kiribati",
		country_cca2: "KI",
		country_cca3: "KIR"
	},
	{
		country_name: "Kosovo",
		country_cca2: "XK",
		country_cca3: "UNK"
	},
	{
		country_name: "Kuwait",
		country_cca2: "KW",
		country_cca3: "KWT"
	},
	{
		country_name: "Kyrgyzstan",
		country_cca2: "KG",
		country_cca3: "KGZ"
	},
	{
		country_name: "Laos",
		country_cca2: "LA",
		country_cca3: "LAO"
	},
	{
		country_name: "Latvia",
		country_cca2: "LV",
		country_cca3: "LVA"
	},
	{
		country_name: "Lebanon",
		country_cca2: "LB",
		country_cca3: "LBN"
	},
	{
		country_name: "Lesotho",
		country_cca2: "LS",
		country_cca3: "LSO"
	},
	{
		country_name: "Liberia",
		country_cca2: "LR",
		country_cca3: "LBR"
	},
	{
		country_name: "Libya",
		country_cca2: "LY",
		country_cca3: "LBY"
	},
	{
		country_name: "Liechtenstein",
		country_cca2: "LI",
		country_cca3: "LIE"
	},
	{
		country_name: "Lithuania",
		country_cca2: "LT",
		country_cca3: "LTU"
	},
	{
		country_name: "Luxembourg",
		country_cca2: "LU",
		country_cca3: "LUX"
	},
	{
		country_name: "Macau",
		country_cca2: "MO",
		country_cca3: "MAC"
	},
	{
		country_name: "Madagascar",
		country_cca2: "MG",
		country_cca3: "MDG"
	},
	{
		country_name: "Malawi",
		country_cca2: "MW",
		country_cca3: "MWI"
	},
	{
		country_name: "Malaysia",
		country_cca2: "MY",
		country_cca3: "MYS"
	},
	{
		country_name: "Maldives",
		country_cca2: "MV",
		country_cca3: "MDV"
	},
	{
		country_name: "Mali",
		country_cca2: "ML",
		country_cca3: "MLI"
	},
	{
		country_name: "Malta",
		country_cca2: "MT",
		country_cca3: "MLT"
	},
	{
		country_name: "Marshall Islands",
		country_cca2: "MH",
		country_cca3: "MHL"
	},
	{
		country_name: "Martinique",
		country_cca2: "MQ",
		country_cca3: "MTQ"
	},
	{
		country_name: "Mauritania",
		country_cca2: "MR",
		country_cca3: "MRT"
	},
	{
		country_name: "Mauritius",
		country_cca2: "MU",
		country_cca3: "MUS"
	},
	{
		country_name: "Mayotte",
		country_cca2: "YT",
		country_cca3: "MYT"
	},
	{
		country_name: "Mexico",
		country_cca2: "MX",
		country_cca3: "MEX"
	},
	{
		country_name: "Micronesia",
		country_cca2: "FM",
		country_cca3: "FSM"
	},
	{
		country_name: "Moldova",
		country_cca2: "MD",
		country_cca3: "MDA"
	},
	{
		country_name: "Monaco",
		country_cca2: "MC",
		country_cca3: "MCO"
	},
	{
		country_name: "Mongolia",
		country_cca2: "MN",
		country_cca3: "MNG"
	},
	{
		country_name: "Montenegro",
		country_cca2: "ME",
		country_cca3: "MNE"
	},
	{
		country_name: "Montserrat",
		country_cca2: "MS",
		country_cca3: "MSR"
	},
	{
		country_name: "Morocco",
		country_cca2: "MA",
		country_cca3: "MAR"
	},
	{
		country_name: "Mozambique",
		country_cca2: "MZ",
		country_cca3: "MOZ"
	},
	{
		country_name: "Myanmar",
		country_cca2: "MM",
		country_cca3: "MMR"
	},
	{
		country_name: "Namibia",
		country_cca2: "NA",
		country_cca3: "NAM"
	},
	{
		country_name: "Nauru",
		country_cca2: "NR",
		country_cca3: "NRU"
	},
	{
		country_name: "Nepal",
		country_cca2: "NP",
		country_cca3: "NPL"
	},
	{
		country_name: "Netherlands",
		country_cca2: "NL",
		country_cca3: "NLD"
	},
	{
		country_name: "New Caledonia",
		country_cca2: "NC",
		country_cca3: "NCL"
	},
	{
		country_name: "New Zealand",
		country_cca2: "NZ",
		country_cca3: "NZL"
	},
	{
		country_name: "Nicaragua",
		country_cca2: "NI",
		country_cca3: "NIC"
	},
	{
		country_name: "Niger",
		country_cca2: "NE",
		country_cca3: "NER"
	},
	{
		country_name: "Nigeria",
		country_cca2: "NG",
		country_cca3: "NGA"
	},
	{
		country_name: "Niue",
		country_cca2: "NU",
		country_cca3: "NIU"
	},
	{
		country_name: "Norfolk Island",
		country_cca2: "NF",
		country_cca3: "NFK"
	},
	{
		country_name: "North Korea",
		country_cca2: "KP",
		country_cca3: "PRK"
	},
	{
		country_name: "North Macedonia",
		country_cca2: "MK",
		country_cca3: "MKD"
	},
	{
		country_name: "Northern Mariana Islands",
		country_cca2: "MP",
		country_cca3: "MNP"
	},
	{
		country_name: "Norway",
		country_cca2: "NO",
		country_cca3: "NOR"
	},
	{
		country_name: "Oman",
		country_cca2: "OM",
		country_cca3: "OMN"
	},
	{
		country_name: "Pakistan",
		country_cca2: "PK",
		country_cca3: "PAK"
	},
	{
		country_name: "Palau",
		country_cca2: "PW",
		country_cca3: "PLW"
	},
	{
		country_name: "Palestine",
		country_cca2: "PS",
		country_cca3: "PSE"
	},
	{
		country_name: "Panama",
		country_cca2: "PA",
		country_cca3: "PAN"
	},
	{
		country_name: "Papua New Guinea",
		country_cca2: "PG",
		country_cca3: "PNG"
	},
	{
		country_name: "Paraguay",
		country_cca2: "PY",
		country_cca3: "PRY"
	},
	{
		country_name: "Peru",
		country_cca2: "PE",
		country_cca3: "PER"
	},
	{
		country_name: "Philippines",
		country_cca2: "PH",
		country_cca3: "PHL"
	},
	{
		country_name: "Pitcairn Islands",
		country_cca2: "PN",
		country_cca3: "PCN"
	},
	{
		country_name: "Poland",
		country_cca2: "PL",
		country_cca3: "POL"
	},
	{
		country_name: "Portugal",
		country_cca2: "PT",
		country_cca3: "PRT"
	},
	{
		country_name: "Puerto Rico",
		country_cca2: "PR",
		country_cca3: "PRI"
	},
	{
		country_name: "Qatar",
		country_cca2: "QA",
		country_cca3: "QAT"
	},
	{
		country_name: "Republic of the Congo",
		country_cca2: "CG",
		country_cca3: "COG"
	},
	{
		country_name: "Romania",
		country_cca2: "RO",
		country_cca3: "ROU"
	},
	{
		country_name: "Russia",
		country_cca2: "RU",
		country_cca3: "RUS"
	},
	{
		country_name: "Rwanda",
		country_cca2: "RW",
		country_cca3: "RWA"
	},
	{
		country_name: "Réunion",
		country_cca2: "RE",
		country_cca3: "REU"
	},
	{
		country_name: "Saint Barthélemy",
		country_cca2: "BL",
		country_cca3: "BLM"
	},
	{
		country_name: "Saint Helena, Ascension and Tristan da Cunha",
		country_cca2: "SH",
		country_cca3: "SHN"
	},
	{
		country_name: "Saint Kitts and Nevis",
		country_cca2: "KN",
		country_cca3: "KNA"
	},
	{
		country_name: "Saint Lucia",
		country_cca2: "LC",
		country_cca3: "LCA"
	},
	{
		country_name: "Saint Martin",
		country_cca2: "MF",
		country_cca3: "MAF"
	},
	{
		country_name: "Saint Pierre and Miquelon",
		country_cca2: "PM",
		country_cca3: "SPM"
	},
	{
		country_name: "Saint Vincent and the Grenadines",
		country_cca2: "VC",
		country_cca3: "VCT"
	},
	{
		country_name: "Samoa",
		country_cca2: "WS",
		country_cca3: "WSM"
	},
	{
		country_name: "San Marino",
		country_cca2: "SM",
		country_cca3: "SMR"
	},
	{
		country_name: "Saudi Arabia",
		country_cca2: "SA",
		country_cca3: "SAU"
	},
	{
		country_name: "Senegal",
		country_cca2: "SN",
		country_cca3: "SEN"
	},
	{
		country_name: "Serbia",
		country_cca2: "RS",
		country_cca3: "SRB"
	},
	{
		country_name: "Seychelles",
		country_cca2: "SC",
		country_cca3: "SYC"
	},
	{
		country_name: "Sierra Leone",
		country_cca2: "SL",
		country_cca3: "SLE"
	},
	{
		country_name: "Singapore",
		country_cca2: "SG",
		country_cca3: "SGP"
	},
	{
		country_name: "Sint Maarten",
		country_cca2: "SX",
		country_cca3: "SXM"
	},
	{
		country_name: "Slovakia",
		country_cca2: "SK",
		country_cca3: "SVK"
	},
	{
		country_name: "Slovenia",
		country_cca2: "SI",
		country_cca3: "SVN"
	},
	{
		country_name: "Solomon Islands",
		country_cca2: "SB",
		country_cca3: "SLB"
	},
	{
		country_name: "Somalia",
		country_cca2: "SO",
		country_cca3: "SOM"
	},
	{
		country_name: "South Africa",
		country_cca2: "ZA",
		country_cca3: "ZAF"
	},
	{
		country_name: "South Georgia",
		country_cca2: "GS",
		country_cca3: "SGS"
	},
	{
		country_name: "South Korea",
		country_cca2: "KR",
		country_cca3: "KOR"
	},
	{
		country_name: "South Sudan",
		country_cca2: "SS",
		country_cca3: "SSD"
	},
	{
		country_name: "Spain",
		country_cca2: "ES",
		country_cca3: "ESP"
	},
	{
		country_name: "Sri Lanka",
		country_cca2: "LK",
		country_cca3: "LKA"
	},
	{
		country_name: "Sudan",
		country_cca2: "SD",
		country_cca3: "SDN"
	},
	{
		country_name: "Suriname",
		country_cca2: "SR",
		country_cca3: "SUR"
	},
	{
		country_name: "Svalbard and Jan Mayen",
		country_cca2: "SJ",
		country_cca3: "SJM"
	},
	{
		country_name: "Sweden",
		country_cca2: "SE",
		country_cca3: "SWE"
	},
	{
		country_name: "Switzerland",
		country_cca2: "CH",
		country_cca3: "CHE"
	},
	{
		country_name: "Syria",
		country_cca2: "SY",
		country_cca3: "SYR"
	},
	{
		country_name: "São Tomé and Príncipe",
		country_cca2: "ST",
		country_cca3: "STP"
	},
	{
		country_name: "Taiwan",
		country_cca2: "TW",
		country_cca3: "TWN"
	},
	{
		country_name: "Tajikistan",
		country_cca2: "TJ",
		country_cca3: "TJK"
	},
	{
		country_name: "Tanzania",
		country_cca2: "TZ",
		country_cca3: "TZA"
	},
	{
		country_name: "Thailand",
		country_cca2: "TH",
		country_cca3: "THA"
	},
	{
		country_name: "Timor-Leste",
		country_cca2: "TL",
		country_cca3: "TLS"
	},
	{
		country_name: "Togo",
		country_cca2: "TG",
		country_cca3: "TGO"
	},
	{
		country_name: "Tokelau",
		country_cca2: "TK",
		country_cca3: "TKL"
	},
	{
		country_name: "Tonga",
		country_cca2: "TO",
		country_cca3: "TON"
	},
	{
		country_name: "Trinidad and Tobago",
		country_cca2: "TT",
		country_cca3: "TTO"
	},
	{
		country_name: "Tunisia",
		country_cca2: "TN",
		country_cca3: "TUN"
	},
	{
		country_name: "Turkey",
		country_cca2: "TR",
		country_cca3: "TUR"
	},
	{
		country_name: "Turkmenistan",
		country_cca2: "TM",
		country_cca3: "TKM"
	},
	{
		country_name: "Turks and Caicos Islands",
		country_cca2: "TC",
		country_cca3: "TCA"
	},
	{
		country_name: "Tuvalu",
		country_cca2: "TV",
		country_cca3: "TUV"
	},
	{
		country_name: "Uganda",
		country_cca2: "UG",
		country_cca3: "UGA"
	},
	{
		country_name: "Ukraine",
		country_cca2: "UA",
		country_cca3: "UKR"
	},
	{
		country_name: "United Arab Emirates",
		country_cca2: "AE",
		country_cca3: "ARE"
	},
	{
		country_name: "United Kingdom",
		country_cca2: "GB",
		country_cca3: "GBR"
	},
	{
		country_name: "United States",
		country_cca2: "US",
		country_cca3: "USA"
	},
	{
		country_name: "United States Minor Outlying Islands",
		country_cca2: "UM",
		country_cca3: "UMI"
	},
	{
		country_name: "United States Virgin Islands",
		country_cca2: "VI",
		country_cca3: "VIR"
	},
	{
		country_name: "Uruguay",
		country_cca2: "UY",
		country_cca3: "URY"
	},
	{
		country_name: "Uzbekistan",
		country_cca2: "UZ",
		country_cca3: "UZB"
	},
	{
		country_name: "Vanuatu",
		country_cca2: "VU",
		country_cca3: "VUT"
	},
	{
		country_name: "Vatican City",
		country_cca2: "VA",
		country_cca3: "VAT"
	},
	{
		country_name: "Venezuela",
		country_cca2: "VE",
		country_cca3: "VEN"
	},
	{
		country_name: "Vietnam",
		country_cca2: "VN",
		country_cca3: "VNM"
	},
	{
		country_name: "Wallis and Futuna",
		country_cca2: "WF",
		country_cca3: "WLF"
	},
	{
		country_name: "Western Sahara",
		country_cca2: "EH",
		country_cca3: "ESH"
	},
	{
		country_name: "Yemen",
		country_cca2: "YE",
		country_cca3: "YEM"
	},
	{
		country_name: "Zambia",
		country_cca2: "ZM",
		country_cca3: "ZMB"
	},
	{
		country_name: "Zimbabwe",
		country_cca2: "ZW",
		country_cca3: "ZWE"
	}
];

const CountryList = ({ onCountrySelect }) => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const handleCountryChange = (event) => {
        const selectedCountryValue = event.target.value;
        setSelectedCountry(selectedCountryValue);
        onCountrySelect(selectedCountryValue);
    };
    return (React.createElement("div", null,
        React.createElement("select", { onChange: handleCountryChange, value: selectedCountry },
            React.createElement("option", { value: "" }, "Country"),
            countries.map((country) => (React.createElement("option", { key: country.country_name, value: country.country_name }, country.country_name))))));
};

var provinces = [
	{
		id: 1,
		province_name_en: "State No. 1",
		province_name_np: "प्रदेश नं. १"
	},
	{
		id: 2,
		province_name_en: "Madhesh",
		province_name_np: "मधेश"
	},
	{
		id: 3,
		province_name_en: "Bagmati",
		province_name_np: "बागमती"
	},
	{
		id: 4,
		province_name_en: "Gandaki",
		province_name_np: "गण्डकी"
	},
	{
		id: 5,
		province_name_en: "Lumbini",
		province_name_np: "लुम्बिनी"
	},
	{
		id: 6,
		province_name_en: "Karnali",
		province_name_np: "कर्णाली"
	},
	{
		id: 7,
		province_name_en: "Sudurpashchim",
		province_name_np: "सुदूरपश्चिम"
	}
];

const ProvinceList = ({ selectedCountry, setSelectedProvinceId }) => {
    const [selectedProvince, setSelectedProvince] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (selectedCountry !== "Nepal") {
            setIsDisabled(true);
            setSelectedProvince("");
            setSelectedProvinceId(0);
        }
        else {
            setIsDisabled(false);
        }
    }, [selectedCountry]);
    const handleProvinceChange = (event) => {
        const selectedProvinceName = event.target.value;
        const foundProvince = provinces.find(province => province.province_name_en === selectedProvinceName);
        if (foundProvince) {
            setSelectedProvinceId(foundProvince.id);
            setSelectedProvince(selectedProvinceName);
        }
        else {
            setSelectedProvinceId(0);
            setSelectedProvince("");
        }
    };
    return (React.createElement("div", null,
        React.createElement("select", { onChange: handleProvinceChange, disabled: isDisabled, value: selectedProvince },
            React.createElement("option", { value: "" }, "Province"),
            provinces.map((province) => (React.createElement("option", { key: province.id, value: province.province_name_en }, province.province_name_en))))));
};

var districts = [
	{
		district_id: "1",
		province_id: "1",
		district_name_en: "Taplejung",
		district_name_np: "ताप्लेजुङ"
	},
	{
		district_id: "2",
		province_id: "1",
		district_name_en: "Panchthar",
		district_name_np: "पाँचथर"
	},
	{
		district_id: "3",
		province_id: "1",
		district_name_en: "Ilam",
		district_name_np: "इलाम"
	},
	{
		district_id: "4",
		province_id: "1",
		district_name_en: "Sankhuwasabha",
		district_name_np: "संखुवासभा"
	},
	{
		district_id: "5",
		province_id: "1",
		district_name_en: "Tehrathum",
		district_name_np: "तेह्रथुम"
	},
	{
		district_id: "6",
		province_id: "1",
		district_name_en: "Dhankuta",
		district_name_np: "धनकुटा"
	},
	{
		district_id: "7",
		province_id: "1",
		district_name_en: "Bhojpur",
		district_name_np: "भोजपुर"
	},
	{
		district_id: "8",
		province_id: "1",
		district_name_en: "Khotang",
		district_name_np: "खोटाङ"
	},
	{
		district_id: "9",
		province_id: "1",
		district_name_en: "Solukhumbu",
		district_name_np: "सोलुखुम्बु"
	},
	{
		district_id: "10",
		province_id: "1",
		district_name_en: "Okhaldhunga",
		district_name_np: "ओखलढुङ्गा"
	},
	{
		district_id: "11",
		province_id: "1",
		district_name_en: "Udayapur",
		district_name_np: "उदयपुर"
	},
	{
		district_id: "12",
		province_id: "1",
		district_name_en: "Jhapa",
		district_name_np: "झापा"
	},
	{
		district_id: "13",
		province_id: "1",
		district_name_en: "Morang",
		district_name_np: "मोरङ"
	},
	{
		district_id: "14",
		province_id: "1",
		district_name_en: "Sunsari",
		district_name_np: "सुनसरी"
	},
	{
		district_id: "15",
		province_id: "2",
		district_name_en: "Saptari",
		district_name_np: "सप्तरी"
	},
	{
		district_id: "16",
		province_id: "2",
		district_name_en: "Siraha",
		district_name_np: "सिराहा"
	},
	{
		district_id: "17",
		province_id: "2",
		district_name_en: "Dhanusha",
		district_name_np: "धनुषा"
	},
	{
		district_id: "18",
		province_id: "2",
		district_name_en: "Mahottari",
		district_name_np: "महोत्तरी"
	},
	{
		district_id: "19",
		province_id: "2",
		district_name_en: "Sarlahi",
		district_name_np: "सर्लाही"
	},
	{
		district_id: "20",
		province_id: "2",
		district_name_en: "Rautahat",
		district_name_np: "रौतहट"
	},
	{
		district_id: "21",
		province_id: "2",
		district_name_en: "Bara",
		district_name_np: "बारा"
	},
	{
		district_id: "22",
		province_id: "2",
		district_name_en: "Parsa",
		district_name_np: "पर्सा"
	},
	{
		district_id: "23",
		province_id: "3",
		district_name_en: "Dolakha",
		district_name_np: "दोलखा"
	},
	{
		district_id: "24",
		province_id: "3",
		district_name_en: "Ramechhap",
		district_name_np: "रामेछाप"
	},
	{
		district_id: "25",
		province_id: "3",
		district_name_en: "Sindhuli",
		district_name_np: "सिन्धुली"
	},
	{
		district_id: "26",
		province_id: "3",
		district_name_en: "Kavrepalanchock",
		district_name_np: "काभ्रेपलाञ्चोक"
	},
	{
		district_id: "27",
		province_id: "3",
		district_name_en: "Sindhupalchowk",
		district_name_np: "सिन्धुपाल्चोक"
	},
	{
		district_id: "28",
		province_id: "3",
		district_name_en: "Rasuwa",
		district_name_np: "रसुवा"
	},
	{
		district_id: "29",
		province_id: "3",
		district_name_en: "Nuwakot",
		district_name_np: "नुवाकोट"
	},
	{
		district_id: "30",
		province_id: "3",
		district_name_en: "Dhading",
		district_name_np: "धादिङ"
	},
	{
		district_id: "31",
		province_id: "3",
		district_name_en: "Chitwan",
		district_name_np: "चितवन"
	},
	{
		district_id: "32",
		province_id: "3",
		district_name_en: "Makawanpur",
		district_name_np: "मकवानपुर"
	},
	{
		district_id: "33",
		province_id: "3",
		district_name_en: "Bhaktapur",
		district_name_np: "भक्तपुर"
	},
	{
		district_id: "34",
		province_id: "3",
		district_name_en: "Lalitpur",
		district_name_np: "ललितपुर"
	},
	{
		district_id: "35",
		province_id: "3",
		district_name_en: "Kathmandu",
		district_name_np: "काठमाडौं"
	},
	{
		district_id: "36",
		province_id: "4",
		district_name_en: "Gorkha",
		district_name_np: "गोरखा"
	},
	{
		district_id: "37",
		province_id: "4",
		district_name_en: "Lamjung",
		district_name_np: "लमजुङ"
	},
	{
		district_id: "38",
		province_id: "4",
		district_name_en: "Tanahun",
		district_name_np: "तनहुँ"
	},
	{
		district_id: "39",
		province_id: "4",
		district_name_en: "Kaski",
		district_name_np: "कास्की"
	},
	{
		district_id: "40",
		province_id: "4",
		district_name_en: "Manang",
		district_name_np: "मनाङ"
	},
	{
		district_id: "41",
		province_id: "4",
		district_name_en: "Mustang",
		district_name_np: "मुस्ताङ"
	},
	{
		district_id: "42",
		province_id: "4",
		district_name_en: "Parbat",
		district_name_np: "पर्वत"
	},
	{
		district_id: "43",
		province_id: "4",
		district_name_en: "Syangja",
		district_name_np: "स्याङ्जा"
	},
	{
		district_id: "44",
		province_id: "4",
		district_name_en: "Myagdi",
		district_name_np: "म्याग्दी"
	},
	{
		district_id: "45",
		province_id: "4",
		district_name_en: "Baglung",
		district_name_np: "बागलुङ"
	},
	{
		district_id: "46",
		province_id: "4",
		district_name_en: "Nawalparasi (East of Bardaghat Susta)",
		district_name_np: "नवलपरासी (बर्दघाट सुस्ता पूर्व)"
	},
	{
		district_id: "47",
		province_id: "5",
		district_name_en: "Nawalparasi (West of Bardaghat Susta)",
		district_name_np: " नवलपरासी (बर्दघाट सुस्ता पश्चिम)"
	},
	{
		district_id: "48",
		province_id: "5",
		district_name_en: "Rupandehi",
		district_name_np: "रुपन्देही"
	},
	{
		district_id: "49",
		province_id: "5",
		district_name_en: "Kapilvastu",
		district_name_np: "कपिलवस्तु"
	},
	{
		district_id: "50",
		province_id: "5",
		district_name_en: "Palpa",
		district_name_np: "पाल्पा"
	},
	{
		district_id: "51",
		province_id: "5",
		district_name_en: "Arghakhanchi",
		district_name_np: "अर्घाखाँची"
	},
	{
		district_id: "52",
		province_id: "5",
		district_name_en: "Gulmi",
		district_name_np: "गुल्मी"
	},
	{
		district_id: "53",
		province_id: "5",
		district_name_en: "Rukum (Eastern Part)",
		district_name_np: " रुकुम (पूर्वी भाग)"
	},
	{
		district_id: "54",
		province_id: "5",
		district_name_en: "Rolpa",
		district_name_np: "रोल्पा"
	},
	{
		district_id: "55",
		province_id: "5",
		district_name_en: "Pyuthan",
		district_name_np: "प्युठान"
	},
	{
		district_id: "56",
		province_id: "5",
		district_name_en: "Dang",
		district_name_np: "दाङ"
	},
	{
		district_id: "57",
		province_id: "5",
		district_name_en: "Banke",
		district_name_np: "बाँके"
	},
	{
		district_id: "58",
		province_id: "5",
		district_name_en: "Bardiya",
		district_name_np: "बर्दिया"
	},
	{
		district_id: "59",
		province_id: "6",
		district_name_en: "Rukum (Western Part)",
		district_name_np: "रुकुम (पश्चिम भाग)"
	},
	{
		district_id: "60",
		province_id: "6",
		district_name_en: "Salyan",
		district_name_np: "सल्यान"
	},
	{
		district_id: "61",
		province_id: "6",
		district_name_en: "Dolpa",
		district_name_np: "डोल्पा"
	},
	{
		district_id: "62",
		province_id: "6",
		district_name_en: "Jumla",
		district_name_np: "जुम्ला"
	},
	{
		district_id: "63",
		province_id: "6",
		district_name_en: "Mugu",
		district_name_np: "मुगु"
	},
	{
		district_id: "64",
		province_id: "6",
		district_name_en: "Humla",
		district_name_np: "हुम्ला"
	},
	{
		district_id: "65",
		province_id: "6",
		district_name_en: "Kalikot",
		district_name_np: "कालिकोट"
	},
	{
		district_id: "66",
		province_id: "6",
		district_name_en: "Jajarkot",
		district_name_np: "जाजरकोट"
	},
	{
		district_id: "67",
		province_id: "6",
		district_name_en: "Dailekh",
		district_name_np: "दैलेख"
	},
	{
		district_id: "68",
		province_id: "6",
		district_name_en: "Surkhet",
		district_name_np: "सुर्खेत"
	},
	{
		district_id: "69",
		province_id: "7",
		district_name_en: "Bajura",
		district_name_np: "बाजुरा"
	},
	{
		district_id: "70",
		province_id: "7",
		district_name_en: "Bajhang",
		district_name_np: "बझाङ"
	},
	{
		district_id: "71",
		province_id: "7",
		district_name_en: "Doti",
		district_name_np: "डोटी"
	},
	{
		district_id: "72",
		province_id: "7",
		district_name_en: "Achham",
		district_name_np: "अछाम"
	},
	{
		district_id: "73",
		province_id: "7",
		district_name_en: "Darchula",
		district_name_np: "दार्चुला"
	},
	{
		district_id: "74",
		province_id: "7",
		district_name_en: "Baitadi",
		district_name_np: "बैतडी"
	},
	{
		district_id: "75",
		province_id: "7",
		district_name_en: "Dadeldhura",
		district_name_np: "डडेल्धुरा"
	},
	{
		district_id: "76",
		province_id: "7",
		district_name_en: "Kanchanpur",
		district_name_np: "कञ्चनपुर"
	},
	{
		district_id: "77",
		province_id: "7",
		district_name_en: "Kailali",
		district_name_np: "कैलाली"
	}
];

const DistrictList = ({ selectedProvinceId, setSelectedDistrictId }) => {
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [filteredDistricts, setFilteredDistricts] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (selectedProvinceId) {
            const filtered = districts.filter(district => district.province_id === String(selectedProvinceId));
            setFilteredDistricts(filtered);
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
            setSelectedDistrict("");
            setSelectedDistrictId(0);
        }
    }, [selectedProvinceId]);
    const handleDistrictChange = (event) => {
        const selectedDistrictName = event.target.value;
        const foundDistrict = districts.find(district => district.district_name_en === selectedDistrictName);
        if (foundDistrict) {
            setSelectedDistrictId(foundDistrict.district_id);
            setSelectedDistrict(selectedDistrictName);
        }
        else {
            setSelectedDistrictId(0);
            setSelectedDistrict("");
        }
    };
    return (React.createElement("div", null,
        React.createElement("select", { disabled: isDisabled, value: selectedDistrict, onChange: handleDistrictChange },
            React.createElement("option", { value: "" }, "District"),
            filteredDistricts.map((district) => (React.createElement("option", { key: district.district_id, value: district.district_name_en }, district.district_name_en))))));
};

var munvdcs = [
	{
		district_id: "1",
		local_body_id: "1",
		local_body_name_en: "Phungling Municipality",
		local_body_name_np: "फुङलिङ नगरपालिका"
	},
	{
		district_id: "1",
		local_body_id: "2",
		local_body_name_en: "Aathrai Tribeni Rural Municipality",
		local_body_name_np: "आठराई त्रिवेणी गाउँपालिका"
	},
	{
		district_id: "1",
		local_body_id: "3",
		local_body_name_en: "Sidingba Rural Municipality",
		local_body_name_np: "सिदिङ्‌वा गाउँपालिका"
	},
	{
		district_id: "1",
		local_body_id: "4",
		local_body_name_en: "Phaktanglung Rural Municipality",
		local_body_name_np: "फक्ताङलुङ गाउँपालिका"
	},
	{
		district_id: "1",
		local_body_id: "5",
		local_body_name_en: "Mikwakhola Rural Municipality",
		local_body_name_np: "मिक्वाखोला गाउँपालिका"
	},
	{
		district_id: "1",
		local_body_id: "6",
		local_body_name_en: "Meringden Rural Municipality",
		local_body_name_np: "मेरिङदेन गाउँपालिका"
	},
	{
		district_id: "1",
		local_body_id: "7",
		local_body_name_en: "Maiwakhola Rural Municipality",
		local_body_name_np: "मैवाखोला गाउँपालिका"
	},
	{
		district_id: "1",
		local_body_id: "8",
		local_body_name_en: "Pathibhara Yangwarak Rural Municipality",
		local_body_name_np: "पाथीभारा याङवरक गाउँपालिका"
	},
	{
		district_id: "1",
		local_body_id: "9",
		local_body_name_en: "Sirijangha Rural Municipality",
		local_body_name_np: "सिरिजङ्घा गाउँपालिका"
	},
	{
		district_id: "2",
		local_body_id: "10",
		local_body_name_en: "Phidim Municipality",
		local_body_name_np: "फिदिम नगरपालिका"
	},
	{
		district_id: "2",
		local_body_id: "11",
		local_body_name_en: "Phalelung Rural Municipality",
		local_body_name_np: "फालेलुङ गाउँपालिका"
	},
	{
		district_id: "2",
		local_body_id: "12",
		local_body_name_en: "Phalgunanda Rural Municipality",
		local_body_name_np: "फाल्गुनन्द गाउँपालिका"
	},
	{
		district_id: "2",
		local_body_id: "13",
		local_body_name_en: "Hilihang Rural Municipality",
		local_body_name_np: "हिलिहाङ गाउँपालिका"
	},
	{
		district_id: "2",
		local_body_id: "14",
		local_body_name_en: "Kummayak Rural Municipality",
		local_body_name_np: "कुम्मायक गाउँपालिका"
	},
	{
		district_id: "2",
		local_body_id: "15",
		local_body_name_en: "Miklajung Rural Municipality",
		local_body_name_np: "मिक्लाजुङ गाउँपालिका"
	},
	{
		district_id: "2",
		local_body_id: "16",
		local_body_name_en: "Tumweewa Rural Municipality",
		local_body_name_np: "तुम्वेवा गाउँपालिका"
	},
	{
		district_id: "2",
		local_body_id: "17",
		local_body_name_en: "Yangwarak Rural Municipality",
		local_body_name_np: "याङवरक गाउँपालिका"
	},
	{
		district_id: "3",
		local_body_id: "18",
		local_body_name_en: "Ilam Municipality",
		local_body_name_np: "इलाम नगरपालिका"
	},
	{
		district_id: "3",
		local_body_id: "19",
		local_body_name_en: "Deumai Municipality",
		local_body_name_np: "देउमाई नगरपालिका"
	},
	{
		district_id: "3",
		local_body_id: "20",
		local_body_name_en: "Mai Municipality",
		local_body_name_np: "माई नगरपालिका"
	},
	{
		district_id: "3",
		local_body_id: "21",
		local_body_name_en: "Suryodaya Municipality",
		local_body_name_np: "सूर्योदय नगरपालिका"
	},
	{
		district_id: "3",
		local_body_id: "22",
		local_body_name_en: "Phakphokthum Rural Municipality",
		local_body_name_np: "फाकफोकथुम गाउँपालिका "
	},
	{
		district_id: "3",
		local_body_id: "23",
		local_body_name_en: "Chulachuli Rural Municipality",
		local_body_name_np: "चुलाचुली गाउँपालिका"
	},
	{
		district_id: "3",
		local_body_id: "24",
		local_body_name_en: "Maijogmai Rural Municipality",
		local_body_name_np: "माईजोगमाई गाउँपालिका"
	},
	{
		district_id: "3",
		local_body_id: "25",
		local_body_name_en: "Mangsebung Rural Municipality",
		local_body_name_np: "माङसेबुङ गाउँपालिका"
	},
	{
		district_id: "3",
		local_body_id: "26",
		local_body_name_en: "Rong Rural Municipality",
		local_body_name_np: "रोङ गाउँपालिका"
	},
	{
		district_id: "3",
		local_body_id: "27",
		local_body_name_en: "Sandakpur Rural Municipality",
		local_body_name_np: "सन्दकपुर गाउँपालिका"
	},
	{
		district_id: "4",
		local_body_id: "28",
		local_body_name_en: "Chainpur  Municipality",
		local_body_name_np: "चैनपुर नगरपालिका"
	},
	{
		district_id: "4",
		local_body_id: "29",
		local_body_name_en: "Dharmadevi Municipality",
		local_body_name_np: "धर्मदेवी नगरपालिका"
	},
	{
		district_id: "4",
		local_body_id: "30",
		local_body_name_en: "Khandbari Municipality",
		local_body_name_np: "खाँदबारी नगरपालिका"
	},
	{
		district_id: "4",
		local_body_id: "31",
		local_body_name_en: "Madi Municipality",
		local_body_name_np: "मादी नगरपालिका"
	},
	{
		district_id: "4",
		local_body_id: "32",
		local_body_name_en: "Panchkhapan Municipality",
		local_body_name_np: "पाँचखपन नगरपालिका"
	},
	{
		district_id: "4",
		local_body_id: "33",
		local_body_name_en: "Bhotkhola Rural Municipality",
		local_body_name_np: "भोटखोला गाउँपालिका"
	},
	{
		district_id: "4",
		local_body_id: "34",
		local_body_name_en: "Chichila Rural Municipality",
		local_body_name_np: "चिचिला गाउँपालिका"
	},
	{
		district_id: "4",
		local_body_id: "35",
		local_body_name_en: "Makalu Rural Municipality",
		local_body_name_np: "मकालु गाउँपालिका"
	},
	{
		district_id: "4",
		local_body_id: "36",
		local_body_name_en: "Savapokhari Rural Municipality",
		local_body_name_np: "सभापोखरी गाउँपालिका"
	},
	{
		district_id: "4",
		local_body_id: "37",
		local_body_name_en: "Silichong Rural Municipality",
		local_body_name_np: "सिलिचोङ गाउँपालिका"
	},
	{
		district_id: "5",
		local_body_id: "38",
		local_body_name_en: "Myanglung Municipality",
		local_body_name_np: "म्याङ्लुङ नगरपालिका"
	},
	{
		district_id: "5",
		local_body_id: "39",
		local_body_name_en: "Laligurans Municipality",
		local_body_name_np: "लालीगुराँस नगरपालिका"
	},
	{
		district_id: "5",
		local_body_id: "40",
		local_body_name_en: "Aathrai Rural Municipality",
		local_body_name_np: "आठराई गाउँपालिका"
	},
	{
		district_id: "5",
		local_body_id: "41",
		local_body_name_en: "Chhathar Rural Municipality",
		local_body_name_np: "छथर गाउँपालिका"
	},
	{
		district_id: "5",
		local_body_id: "42",
		local_body_name_en: "Phedap Rural Municipality",
		local_body_name_np: "फेदाप गाउँपालिका"
	},
	{
		district_id: "5",
		local_body_id: "43",
		local_body_name_en: "Menchhayayem Rural Municipality",
		local_body_name_np: "मेन्छयायेम गाउँपालिका"
	},
	{
		district_id: "6",
		local_body_id: "44",
		local_body_name_en: "Pakhribas Municipality",
		local_body_name_np: "पाख्रीबास नगरपालिका"
	},
	{
		district_id: "6",
		local_body_id: "45",
		local_body_name_en: "Dhankuta Municipality",
		local_body_name_np: "धनकुटा नगरपालिका"
	},
	{
		district_id: "6",
		local_body_id: "46",
		local_body_name_en: "Mahalaxmi Municipality",
		local_body_name_np: "महालक्ष्मी नगरपालिका"
	},
	{
		district_id: "6",
		local_body_id: "47",
		local_body_name_en: "Sangurigadhi Rural Municipality",
		local_body_name_np: "साँगुरीगढी गाउँपालिका"
	},
	{
		district_id: "6",
		local_body_id: "48",
		local_body_name_en: "Shahidbhumi Rural Municipality",
		local_body_name_np: "सहिदभूमि गाउँपालिका"
	},
	{
		district_id: "6",
		local_body_id: "49",
		local_body_name_en: "Chhathar Jorpati Rural Municipality",
		local_body_name_np: "छथर जोरपाटी गाउँपालिका"
	},
	{
		district_id: "6",
		local_body_id: "50",
		local_body_name_en: "Choubise Rural Municipality",
		local_body_name_np: "चौबिसे गाउँपालिका"
	},
	{
		district_id: "7",
		local_body_id: "51",
		local_body_name_en: "Bhojpur Municipality",
		local_body_name_np: "भोजपुर नगरपालिका"
	},
	{
		district_id: "7",
		local_body_id: "52",
		local_body_name_en: "Shadananda Municipality",
		local_body_name_np: "षडानन्द नगरपालिका"
	},
	{
		district_id: "7",
		local_body_id: "53",
		local_body_name_en: "Tyamkemaiyung Rural Municipality",
		local_body_name_np: "टेम्केमैयुङ गाउँपालिका"
	},
	{
		district_id: "7",
		local_body_id: "54",
		local_body_name_en: "Ramprasadrai Rural Municipality",
		local_body_name_np: "रामप्रसादराई गाउँपालिका"
	},
	{
		district_id: "7",
		local_body_id: "55",
		local_body_name_en: "Arun Rural Municipality",
		local_body_name_np: "अरुण गाउँपालिका"
	},
	{
		district_id: "7",
		local_body_id: "56",
		local_body_name_en: "Pauwadungma Rural Municipality",
		local_body_name_np: "पौवादुङमा गाउँपालिका"
	},
	{
		district_id: "7",
		local_body_id: "57",
		local_body_name_en: "Salpasilichho Rural Municipality",
		local_body_name_np: "साल्पासिलिछो गाउँपालिका"
	},
	{
		district_id: "7",
		local_body_id: "58",
		local_body_name_en: "Aamchowk Rural Municipality",
		local_body_name_np: "आमचोक गाउँपालिका"
	},
	{
		district_id: "7",
		local_body_id: "59",
		local_body_name_en: "Hatuwagadhi Rural Municipality",
		local_body_name_np: "हतुवागढी गाउँपालिका"
	},
	{
		district_id: "8",
		local_body_id: "60",
		local_body_name_en: "Halesi Tuwachung Municipality",
		local_body_name_np: "हलेसी तुवाचुङ नगरपालिका"
	},
	{
		district_id: "8",
		local_body_id: "61",
		local_body_name_en: "Diktel Rupakot Majhuwagadhi Municipality",
		local_body_name_np: "दिक्तेल रुपाकोट मझुवागढी नगरपालिका"
	},
	{
		district_id: "8",
		local_body_id: "62",
		local_body_name_en: "Aiselukharka Rural Municipality",
		local_body_name_np: "ऐसेलुखर्क गाउँपालिका"
	},
	{
		district_id: "8",
		local_body_id: "63",
		local_body_name_en: "Rawa Besi Rural Municipality",
		local_body_name_np: "रावा बेसी गाउँपालिका"
	},
	{
		district_id: "8",
		local_body_id: "64",
		local_body_name_en: "Jantedhunga Rural Municipality",
		local_body_name_np: "जन्तेढुङ्गा गाउँपालिका"
	},
	{
		district_id: "8",
		local_body_id: "65",
		local_body_name_en: "Khotehang Rural Municipality",
		local_body_name_np: "खोटेहाङ गाउँपालिका"
	},
	{
		district_id: "8",
		local_body_id: "66",
		local_body_name_en: "Kepilasgadhi Rural Municipality",
		local_body_name_np: "केपिलासगढी गाउँपालिका"
	},
	{
		district_id: "8",
		local_body_id: "67",
		local_body_name_en: "Diprung Chuichumma Rural Municipality",
		local_body_name_np: "दिप्रुङ चुइचुम्मा गाउँपालिका"
	},
	{
		district_id: "8",
		local_body_id: "68",
		local_body_name_en: "Sakela Rural Municipality",
		local_body_name_np: "साकेला गाउँपालिका"
	},
	{
		district_id: "8",
		local_body_id: "69",
		local_body_name_en: "Barahapokhari Rural Municipality",
		local_body_name_np: "बराहपोखरी गाउँपालिका"
	},
	{
		district_id: "9",
		local_body_id: "70",
		local_body_name_en: "Solududhakunda Municipality",
		local_body_name_np: "सोलुदुधकुण्ड नगरपालिका"
	},
	{
		district_id: "9",
		local_body_id: "71",
		local_body_name_en: "Mapya Dudhkoshi Rural Municipality",
		local_body_name_np: "माप्य दुधकोशी गाउँपालिका"
	},
	{
		district_id: "9",
		local_body_id: "72",
		local_body_name_en: "Khumbu Pasanglhamu Rural Municipality",
		local_body_name_np: "खुम्बु पासाङल्हामु गाउँपालिका"
	},
	{
		district_id: "9",
		local_body_id: "73",
		local_body_name_en: "Thulung Dudhkoshi Rural Municipality",
		local_body_name_np: "थुलुङ दुधकोशी गाउँपालिका"
	},
	{
		district_id: "9",
		local_body_id: "74",
		local_body_name_en: "Nechasalyan Rural Municipality",
		local_body_name_np: "नेचासल्यान गाउँपालिका"
	},
	{
		district_id: "9",
		local_body_id: "75",
		local_body_name_en: "Mahakulung Rural Municipality",
		local_body_name_np: "महाकुलुङ गाउँपालिका"
	},
	{
		district_id: "9",
		local_body_id: "76",
		local_body_name_en: "Likhu Pike Rural Municipality",
		local_body_name_np: "लिखु पिके गाउँपालिका"
	},
	{
		district_id: "9",
		local_body_id: "77",
		local_body_name_en: "Sotang Rural Municipality",
		local_body_name_np: "सोताङ गाउँपालिका"
	},
	{
		district_id: "10",
		local_body_id: "78",
		local_body_name_en: "Sidhicharan Municipality",
		local_body_name_np: "सिद्धिचरण नगरपालिका"
	},
	{
		district_id: "10",
		local_body_id: "79",
		local_body_name_en: "Khijidemba Rural Municipality",
		local_body_name_np: "खिजिदेम्बा गाउँपालिका"
	},
	{
		district_id: "10",
		local_body_id: "80",
		local_body_name_en: "Champadevi Rural Municipality",
		local_body_name_np: "चम्पादेवी गाउँपालिका"
	},
	{
		district_id: "10",
		local_body_id: "81",
		local_body_name_en: "Chishankhugadhi Rural Municipality",
		local_body_name_np: "चिशंखुगढी गाउँपालिका"
	},
	{
		district_id: "10",
		local_body_id: "82",
		local_body_name_en: "Manebhanjyang Rural Municipality",
		local_body_name_np: "मानेभञ्‍ज्याङ गाउँपालिका"
	},
	{
		district_id: "10",
		local_body_id: "83",
		local_body_name_en: "Molung Rural Municipality",
		local_body_name_np: "मोलुङ गाउँपालिका"
	},
	{
		district_id: "10",
		local_body_id: "84",
		local_body_name_en: "Likhu Rural Municipality",
		local_body_name_np: "लिखु गाउँपालिका"
	},
	{
		district_id: "10",
		local_body_id: "85",
		local_body_name_en: "Sunkoshi Rural Municipality",
		local_body_name_np: "सुनकोशी गाउँपालिका"
	},
	{
		district_id: "11",
		local_body_id: "86",
		local_body_name_en: "Katari Municipality",
		local_body_name_np: "कटारी नगरपालिका"
	},
	{
		district_id: "11",
		local_body_id: "87",
		local_body_name_en: "Chaudandigadhi Municipality",
		local_body_name_np: "चौदण्डीगढी नगरपालिका"
	},
	{
		district_id: "11",
		local_body_id: "88",
		local_body_name_en: "Triyuga Municipality",
		local_body_name_np: "त्रियुगा नगरपालिका"
	},
	{
		district_id: "11",
		local_body_id: "89",
		local_body_name_en: "Belaka Municipality",
		local_body_name_np: "बेलका नगरपालिका"
	},
	{
		district_id: "11",
		local_body_id: "90",
		local_body_name_en: "Udayapurgadhi Rural Municipality",
		local_body_name_np: "उदयपुरगढी गाउँपालिका"
	},
	{
		district_id: "11",
		local_body_id: "91",
		local_body_name_en: "Tapli Rural Municipality",
		local_body_name_np: "ताप्ली गाउँपालिका"
	},
	{
		district_id: "11",
		local_body_id: "92",
		local_body_name_en: "Rautamai Rural Municipality",
		local_body_name_np: "रौतामाई गाउँपालिका"
	},
	{
		district_id: "11",
		local_body_id: "93",
		local_body_name_en: "Limchunbung Rural Municipality",
		local_body_name_np: "लिम्चुङ्बुङ गाउँपालिका"
	},
	{
		district_id: "12",
		local_body_id: "94",
		local_body_name_en: "Mechinagar Municipality",
		local_body_name_np: "मेचीनगर नगरपालिका"
	},
	{
		district_id: "12",
		local_body_id: "95",
		local_body_name_en: "Damak Municipality",
		local_body_name_np: "दमक नगरपालिका"
	},
	{
		district_id: "12",
		local_body_id: "96",
		local_body_name_en: "Kanakai Municipality",
		local_body_name_np: "कनकाई नगरपालिका"
	},
	{
		district_id: "12",
		local_body_id: "97",
		local_body_name_en: "Bhadrapur Municipality",
		local_body_name_np: "भद्रपुर नगरपालिका"
	},
	{
		district_id: "12",
		local_body_id: "98",
		local_body_name_en: "Arjundhara Municipality",
		local_body_name_np: "अर्जुनधारा नगरपालिका"
	},
	{
		district_id: "12",
		local_body_id: "99",
		local_body_name_en: "Shivasatakshi Municipality",
		local_body_name_np: "शिवसताक्षी नगरपालिका "
	},
	{
		district_id: "12",
		local_body_id: "100",
		local_body_name_en: "Gauradhaha Municipality",
		local_body_name_np: "गौरादह नगरपालिका"
	},
	{
		district_id: "12",
		local_body_id: "101",
		local_body_name_en: "Birtamod Municipality",
		local_body_name_np: "विर्तामोड नगरपालिका"
	},
	{
		district_id: "12",
		local_body_id: "102",
		local_body_name_en: "Kamal Rural Municipality",
		local_body_name_np: "कमल गाउँपालिका"
	},
	{
		district_id: "12",
		local_body_id: "103",
		local_body_name_en: "Gaurigunj Rural Municipality",
		local_body_name_np: "गौरीगंज गाउँपालिका"
	},
	{
		district_id: "12",
		local_body_id: "104",
		local_body_name_en: "Barhadashi Rural Municipality",
		local_body_name_np: "बाह्रदशी गाउँपालिका"
	},
	{
		district_id: "12",
		local_body_id: "105",
		local_body_name_en: "Jhapa Rural Municipality",
		local_body_name_np: "झापा गाउँपालिका"
	},
	{
		district_id: "12",
		local_body_id: "106",
		local_body_name_en: "Buddhashanti Rural Municipality",
		local_body_name_np: "बुद्धशान्ति गाउँपालिका"
	},
	{
		district_id: "12",
		local_body_id: "107",
		local_body_name_en: "Haldibari Rural Municipality",
		local_body_name_np: "हल्दीबारी गाउँपालिका"
	},
	{
		district_id: "12",
		local_body_id: "108",
		local_body_name_en: "Kachankawal Rural Municipality",
		local_body_name_np: "कचनकवल गाउँपालिका"
	},
	{
		district_id: "13",
		local_body_id: "109",
		local_body_name_en: "Biratnagar Metropolitan City",
		local_body_name_np: "विराटनगर महानगरपालिका"
	},
	{
		district_id: "13",
		local_body_id: "110",
		local_body_name_en: "Belbari Municipality",
		local_body_name_np: "बेलबारी नगरपालिका"
	},
	{
		district_id: "13",
		local_body_id: "111",
		local_body_name_en: "Letang Municipality",
		local_body_name_np: "लेटाङ नगरपालिका"
	},
	{
		district_id: "13",
		local_body_id: "112",
		local_body_name_en: "Pathari Sanishchare Municipality",
		local_body_name_np: "पथरी शनिश्‍चरे नगरपालिका"
	},
	{
		district_id: "13",
		local_body_id: "113",
		local_body_name_en: "Rangeli Municipality",
		local_body_name_np: "रंगेली नगरपालिका"
	},
	{
		district_id: "13",
		local_body_id: "114",
		local_body_name_en: "Ratuwamai Municipality",
		local_body_name_np: "रतुवामाई नगरपालिका"
	},
	{
		district_id: "13",
		local_body_id: "115",
		local_body_name_en: "Sunwarshi Municipality",
		local_body_name_np: "सुनवर्षी नगरपालिका"
	},
	{
		district_id: "13",
		local_body_id: "116",
		local_body_name_en: "Uralabari Municipality",
		local_body_name_np: "उर्लाबारी नगरपालिका"
	},
	{
		district_id: "13",
		local_body_id: "117",
		local_body_name_en: "Sundarharaincha Municipality",
		local_body_name_np: "सुन्दरहरैंचा नगरपालिका"
	},
	{
		district_id: "13",
		local_body_id: "118",
		local_body_name_en: "Budhiganga Rural Municipality",
		local_body_name_np: "बुढीगंगा गाउँपालिका"
	},
	{
		district_id: "13",
		local_body_id: "119",
		local_body_name_en: "Dhanapalthan Rural Municipality",
		local_body_name_np: "धनपालथान गाउँपालिका"
	},
	{
		district_id: "13",
		local_body_id: "120",
		local_body_name_en: "Gramthan Rural Municipality",
		local_body_name_np: "ग्रामथान गाउँपालिका"
	},
	{
		district_id: "13",
		local_body_id: "121",
		local_body_name_en: "Jahada Rural Municipality",
		local_body_name_np: "जहदा गाउँपालिका"
	},
	{
		district_id: "13",
		local_body_id: "122",
		local_body_name_en: "Kanepokhari Rural Municipality",
		local_body_name_np: "कानेपोखरी गाउँपालिका"
	},
	{
		district_id: "13",
		local_body_id: "123",
		local_body_name_en: "Katahari Rural Municipality",
		local_body_name_np: "कटहरी गाउँपालिका"
	},
	{
		district_id: "13",
		local_body_id: "124",
		local_body_name_en: "Kerabari Rural Municipality",
		local_body_name_np: "केराबारी गाउँपालिका"
	},
	{
		district_id: "13",
		local_body_id: "125",
		local_body_name_en: "Miklajung Rural Municipality",
		local_body_name_np: "मिक्लाजुङ गाउँपालिका"
	},
	{
		district_id: "14",
		local_body_id: "126",
		local_body_name_en: "Itahari Sub Metropolitan City",
		local_body_name_np: "ईटहरी उपमहानगरपालिका"
	},
	{
		district_id: "14",
		local_body_id: "127",
		local_body_name_en: "Dharan Sub Metropolitan City",
		local_body_name_np: "धरान उपमहानगरपालिका"
	},
	{
		district_id: "14",
		local_body_id: "128",
		local_body_name_en: "Inaruwa Municipality",
		local_body_name_np: "इनरूवा नगरपालिका"
	},
	{
		district_id: "14",
		local_body_id: "129",
		local_body_name_en: "Duhabi Municipality",
		local_body_name_np: "दुहवी नगरपालिका"
	},
	{
		district_id: "14",
		local_body_id: "130",
		local_body_name_en: "Ramdhuni Municipality",
		local_body_name_np: "रामधुनी नगरपालिका"
	},
	{
		district_id: "14",
		local_body_id: "131",
		local_body_name_en: "Barahakshetra Municipality",
		local_body_name_np: "बराहक्षेत्र नगरपालिका"
	},
	{
		district_id: "14",
		local_body_id: "132",
		local_body_name_en: "Dewanganj Rural Municipality",
		local_body_name_np: "देवानगञ्‍ज गाउँपालिका"
	},
	{
		district_id: "14",
		local_body_id: "133",
		local_body_name_en: "Koshi Rural Municipality",
		local_body_name_np: "कोशी गाउँपालिका"
	},
	{
		district_id: "14",
		local_body_id: "134",
		local_body_name_en: "Gadhi Rural Municipality",
		local_body_name_np: "गढी गाउँपालिका"
	},
	{
		district_id: "14",
		local_body_id: "135",
		local_body_name_en: "Barju Rural Municipality",
		local_body_name_np: "बर्जु गाउँपालिका"
	},
	{
		district_id: "14",
		local_body_id: "136",
		local_body_name_en: "Bhokraha Narsingh Rural Municipality",
		local_body_name_np: "भोक्राहा नरसिंह गाउँपालिका"
	},
	{
		district_id: "14",
		local_body_id: "137",
		local_body_name_en: "Harinagar Rural Municipality",
		local_body_name_np: "हरिनगर गाउँपालिका"
	},
	{
		district_id: "15",
		local_body_id: "138",
		local_body_name_en: "Rajbiraj Municipality",
		local_body_name_np: "राजविराज नगरपालिका"
	},
	{
		district_id: "15",
		local_body_id: "139",
		local_body_name_en: "Kanchanrup Municipality",
		local_body_name_np: "कञ्‍चनरूप नगरपालिका"
	},
	{
		district_id: "15",
		local_body_id: "140",
		local_body_name_en: "Dakneshwori Municipality",
		local_body_name_np: "डाक्नेश्‍वरी नगरपालिका"
	},
	{
		district_id: "15",
		local_body_id: "141",
		local_body_name_en: "Bode Barsain Municipality",
		local_body_name_np: "बोदे बरसाईन नगरपालिका"
	},
	{
		district_id: "15",
		local_body_id: "142",
		local_body_name_en: "Khadak Municipality",
		local_body_name_np: "खडक नगरपालिका"
	},
	{
		district_id: "15",
		local_body_id: "143",
		local_body_name_en: "Shambhunath Municipality",
		local_body_name_np: "शम्भुनाथ नगरपालिका"
	},
	{
		district_id: "15",
		local_body_id: "144",
		local_body_name_en: "Surunga Municipality",
		local_body_name_np: "सुरुङ्गा नगरपालिका"
	},
	{
		district_id: "15",
		local_body_id: "145",
		local_body_name_en: "Hanumannagar Kankalini Municipality",
		local_body_name_np: "हनुमाननगर कंकालिनी नगरपालिका"
	},
	{
		district_id: "15",
		local_body_id: "146",
		local_body_name_en: "Saptakoshi Municipality",
		local_body_name_np: "सप्‍तकोशी नगरपालिका"
	},
	{
		district_id: "15",
		local_body_id: "147",
		local_body_name_en: "Agnisair Krishnasawaran Rural Municipality",
		local_body_name_np: "अग्निसाइर कृष्णासवरन गाउँपालिका"
	},
	{
		district_id: "15",
		local_body_id: "148",
		local_body_name_en: "Chhinnamasta Rural Municipality",
		local_body_name_np: "छिन्‍नमस्ता गाउँपालिका"
	},
	{
		district_id: "15",
		local_body_id: "149",
		local_body_name_en: "Mahadeva Rural Municipality",
		local_body_name_np: "महादेवा गाउँपालिका"
	},
	{
		district_id: "15",
		local_body_id: "150",
		local_body_name_en: "Tirahut Rural Municipality",
		local_body_name_np: "तिरहुत गाउँपालिका"
	},
	{
		district_id: "15",
		local_body_id: "151",
		local_body_name_en: "Tilathi Koiladi Rural Municipality",
		local_body_name_np: "तिलाठी कोईल�डी गाउँपालिका"
	},
	{
		district_id: "15",
		local_body_id: "152",
		local_body_name_en: "Rupani Rural Municipality",
		local_body_name_np: "रुपनी गाउँपालिका"
	},
	{
		district_id: "15",
		local_body_id: "153",
		local_body_name_en: "Rajgadh Rural Municipality",
		local_body_name_np: "राजगढ गाउँपालिका"
	},
	{
		district_id: "15",
		local_body_id: "154",
		local_body_name_en: "Bishnupur Rural Municipality",
		local_body_name_np: "विष्णुपुर गाउँपालिका"
	},
	{
		district_id: "15",
		local_body_id: "155",
		local_body_name_en: "Balan-Bihul Rural Municipality",
		local_body_name_np: "बलान-विहुल गाउँपालिका"
	},
	{
		district_id: "16",
		local_body_id: "156",
		local_body_name_en: "Lahan Municipality",
		local_body_name_np: "लहान नगरपालिका"
	},
	{
		district_id: "16",
		local_body_id: "157",
		local_body_name_en: "Dhangadhimai Municipality",
		local_body_name_np: "धनगढीमाई नगरपालिका"
	},
	{
		district_id: "16",
		local_body_id: "158",
		local_body_name_en: "Siraha Municipality",
		local_body_name_np: "सिरहा नगरपालिका"
	},
	{
		district_id: "16",
		local_body_id: "159",
		local_body_name_en: "Golbazar Municipality",
		local_body_name_np: "गोलबजार नगरपालिका"
	},
	{
		district_id: "16",
		local_body_id: "160",
		local_body_name_en: "Mirchaiya Municipality",
		local_body_name_np: "मिर्चैया नगरपालिका"
	},
	{
		district_id: "16",
		local_body_id: "161",
		local_body_name_en: "Kalyanpur Municipality",
		local_body_name_np: "कल्याणपुर नगरपालिका"
	},
	{
		district_id: "16",
		local_body_id: "162",
		local_body_name_en: "Karjanha Municipality",
		local_body_name_np: "कर्जन्हा नगरपालिका"
	},
	{
		district_id: "16",
		local_body_id: "163",
		local_body_name_en: "Sukhipur Municipality",
		local_body_name_np: "सुखीपुर नगरपालिका"
	},
	{
		district_id: "16",
		local_body_id: "164",
		local_body_name_en: "Bhagawanpur Rural Municipality",
		local_body_name_np: "भगवानपुर गाउँपालिका"
	},
	{
		district_id: "16",
		local_body_id: "165",
		local_body_name_en: "Aurahi Rural Municipality",
		local_body_name_np: "औरही गाउँपालिका"
	},
	{
		district_id: "16",
		local_body_id: "166",
		local_body_name_en: "Bishnupur Rural Municipality",
		local_body_name_np: "विष्णुपुर गाउँपालिका"
	},
	{
		district_id: "16",
		local_body_id: "167",
		local_body_name_en: "Bariyarpatti Rural Municipality",
		local_body_name_np: "बरियारपट्टी गाउँपालिका"
	},
	{
		district_id: "16",
		local_body_id: "168",
		local_body_name_en: "Laxmipur Patari Rural Municipality",
		local_body_name_np: "लक्ष्मीपुर पतारी गाउँपालिका"
	},
	{
		district_id: "16",
		local_body_id: "169",
		local_body_name_en: "Naraha Rural Municipality",
		local_body_name_np: "नरहा गाउँपालिका"
	},
	{
		district_id: "16",
		local_body_id: "170",
		local_body_name_en: "Sakhuwanankarkatti Rural Municipality",
		local_body_name_np: "सखुवानन्कारकट्टी गाउँपालिका"
	},
	{
		district_id: "16",
		local_body_id: "171",
		local_body_name_en: "Arnama Rural Municipality",
		local_body_name_np: "अर्नमा गाउँपालिका"
	},
	{
		district_id: "16",
		local_body_id: "172",
		local_body_name_en: "Nawarajpur Rural Municipality",
		local_body_name_np: "नवराजपुर गाउँपालिका"
	},
	{
		district_id: "17",
		local_body_id: "173",
		local_body_name_en: "Janakpurdham Sub Metropolitan City",
		local_body_name_np: "जनकपुरधाम उपमहानगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "174",
		local_body_name_en: "Kshireshwornath Municipality",
		local_body_name_np: "क्षिरेश्‍वरनाथ नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "175",
		local_body_name_en: "Ganeshman Charnath Municipality",
		local_body_name_np: "गणेशमान चारनाथ नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "176",
		local_body_name_en: "Dhanushadham Municipality",
		local_body_name_np: "धनुषाधाम नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "177",
		local_body_name_en: "Kamala  Municipality",
		local_body_name_np: "कमला नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "178",
		local_body_name_en: "Nagrain Municipality",
		local_body_name_np: "नगराइन नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "179",
		local_body_name_en: "Bideha Municipality",
		local_body_name_np: "विदेह नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "180",
		local_body_name_en: "Mithila Municipality",
		local_body_name_np: "मिथिला नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "181",
		local_body_name_en: "Mithila Bihari Municipality",
		local_body_name_np: "मिथिला बिहारी नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "182",
		local_body_name_en: "Shahidnagar Municipality",
		local_body_name_np: "शहीदनगर नगरपालिका "
	},
	{
		district_id: "17",
		local_body_id: "183",
		local_body_name_en: "Sabaila Municipality",
		local_body_name_np: "सबैला नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "184",
		local_body_name_en: "Hansapur Municipality",
		local_body_name_np: "हंसपुर नगरपालिका"
	},
	{
		district_id: "17",
		local_body_id: "185",
		local_body_name_en: "Aurahi Rural Municipality",
		local_body_name_np: "औरही गाउँपालिका"
	},
	{
		district_id: "17",
		local_body_id: "186",
		local_body_name_en: "Janaknandini Rural Municipality",
		local_body_name_np: "जनकनन्दिनी गाउँपालिका"
	},
	{
		district_id: "17",
		local_body_id: "187",
		local_body_name_en: "Bateshwor Rural Municipality",
		local_body_name_np: "बटेश्‍वर गाउँपालिका"
	},
	{
		district_id: "17",
		local_body_id: "188",
		local_body_name_en: "Mukhiyapatti Musaharniya Rural Municipality",
		local_body_name_np: "मुखियापट्टी मुसहरनिया गाउँपालिका"
	},
	{
		district_id: "17",
		local_body_id: "189",
		local_body_name_en: "Laxminiya Rural Municipality",
		local_body_name_np: "लक्ष्मीनिया गाउँपालिका"
	},
	{
		district_id: "17",
		local_body_id: "190",
		local_body_name_en: "Dhanauji Rural Municipality",
		local_body_name_np: "धनौजी गाउँपालिका"
	},
	{
		district_id: "18",
		local_body_id: "191",
		local_body_name_en: "Jaleshwor Municipality",
		local_body_name_np: "जलेश्‍वर नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "192",
		local_body_name_en: "Bardibas Municipality",
		local_body_name_np: "बर्दिबास नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "193",
		local_body_name_en: "Gaushala Municipality",
		local_body_name_np: "गौशाला नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "194",
		local_body_name_en: "Balwa Municipality",
		local_body_name_np: "बलवा नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "195",
		local_body_name_en: "Loharpatti Municipality",
		local_body_name_np: "लोहरपट्टी नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "196",
		local_body_name_en: "Manra Shiswa Municipality",
		local_body_name_np: "मनरा शिसवा नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "197",
		local_body_name_en: "Ramgopalpur Municipality",
		local_body_name_np: "रामगोपालपुर नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "198",
		local_body_name_en: "Aurahi Municipality",
		local_body_name_np: "औरही नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "199",
		local_body_name_en: "Bhangaha Municipality",
		local_body_name_np: "भँगाहा नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "200",
		local_body_name_en: "Matihani Municipality",
		local_body_name_np: "मटिहानी नगरपालिका"
	},
	{
		district_id: "18",
		local_body_id: "201",
		local_body_name_en: "Sonma Rural Municipality",
		local_body_name_np: "सोनमा गाउँपालिका"
	},
	{
		district_id: "18",
		local_body_id: "202",
		local_body_name_en: "Samsi Rural Municipality",
		local_body_name_np: "सम्सी गाउँपालिका"
	},
	{
		district_id: "18",
		local_body_id: "203",
		local_body_name_en: "Mahottari Rural Municipality",
		local_body_name_np: "महोत्तरी गाउँपालिका"
	},
	{
		district_id: "18",
		local_body_id: "204",
		local_body_name_en: "Pipra Rural Municipality",
		local_body_name_np: "पिपरा गाउँपालिका"
	},
	{
		district_id: "18",
		local_body_id: "205",
		local_body_name_en: "Ekdara Rural Municipality",
		local_body_name_np: "एकडारा गाउँपालिका"
	},
	{
		district_id: "19",
		local_body_id: "206",
		local_body_name_en: "Ishworpur Municipality",
		local_body_name_np: "ईश्‍वरपुर नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "207",
		local_body_name_en: "Malangwa Municipality",
		local_body_name_np: "मलंगवा नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "208",
		local_body_name_en: "Lalbandi Municipality",
		local_body_name_np: "लालबन्दी नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "209",
		local_body_name_en: "Haripur Municipality",
		local_body_name_np: "हरिपुर नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "210",
		local_body_name_en: "Haripurwa Municipality",
		local_body_name_np: "हरिपुर्वा नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "211",
		local_body_name_en: "Hariwan Municipality",
		local_body_name_np: "हरिवन नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "212",
		local_body_name_en: "Barhathawa Municipality",
		local_body_name_np: "बरहथवा नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "213",
		local_body_name_en: "Balara Municipality",
		local_body_name_np: "बलरा नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "214",
		local_body_name_en: "Godaita Municipality",
		local_body_name_np: "गोडैटा नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "215",
		local_body_name_en: "Bagmati Municipality",
		local_body_name_np: "बागमती नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "216",
		local_body_name_en: "Kabilasi Municipality",
		local_body_name_np: "कविलासी नगरपालिका"
	},
	{
		district_id: "19",
		local_body_id: "217",
		local_body_name_en: "Chakraghatta Rural Municipality",
		local_body_name_np: "चक्रघट्टा गाउँपालिका"
	},
	{
		district_id: "19",
		local_body_id: "218",
		local_body_name_en: "Chandranagar Rural Municipality",
		local_body_name_np: "चन्द्रनगर गाउँपालिका"
	},
	{
		district_id: "19",
		local_body_id: "219",
		local_body_name_en: "Dhankaul Rural Municipality",
		local_body_name_np: "धनकौल गाउँपालिका"
	},
	{
		district_id: "19",
		local_body_id: "220",
		local_body_name_en: "Brahampuri Rural Municipality",
		local_body_name_np: "ब्रहम्पुरी गाउँपालिका"
	},
	{
		district_id: "19",
		local_body_id: "221",
		local_body_name_en: "Ramnagar Rural Municipality",
		local_body_name_np: "रामनगर गाउँपालिका"
	},
	{
		district_id: "19",
		local_body_id: "222",
		local_body_name_en: "Bishnu Rural Municipality",
		local_body_name_np: "विष्णु गाउँपालिका"
	},
	{
		district_id: "19",
		local_body_id: "223",
		local_body_name_en: "Basbariya Rural Municipality",
		local_body_name_np: "बसबरीया गाउँपालिका"
	},
	{
		district_id: "19",
		local_body_id: "224",
		local_body_name_en: "Kaudena Rural Municipality",
		local_body_name_np: "कौडेना गाउँपालिका"
	},
	{
		district_id: "19",
		local_body_id: "225",
		local_body_name_en: "Parsa Rural Municipality",
		local_body_name_np: "पर्सा गाउँपालिका"
	},
	{
		district_id: "20",
		local_body_id: "226",
		local_body_name_en: "Chandrapur Municipality",
		local_body_name_np: "चन्द्रपुर नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "227",
		local_body_name_en: "Garuda Municipality",
		local_body_name_np: "गरुडा नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "228",
		local_body_name_en: "Gaur Municipality",
		local_body_name_np: "गौर नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "229",
		local_body_name_en: "Baudhimai Municipality",
		local_body_name_np: "बौधीमाई नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "230",
		local_body_name_en: "Brindawan Municipality",
		local_body_name_np: "वृन्दावन नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "231",
		local_body_name_en: "Dewahigonahi Municipality",
		local_body_name_np: "देवाहीगोनाही नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "232",
		local_body_name_en: "Gadhimai Municipality",
		local_body_name_np: "गढीमाई नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "233",
		local_body_name_en: "Gujara Municipality",
		local_body_name_np: "गुजरा नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "234",
		local_body_name_en: "Katahariya Municipality",
		local_body_name_np: "कटहरिया नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "235",
		local_body_name_en: "Madhav Narayan Municipality",
		local_body_name_np: "माधव नारायण नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "236",
		local_body_name_en: "Maulapur Municipality",
		local_body_name_np: "मौलापुर नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "237",
		local_body_name_en: "Phatuwa Bijaypur Municipality",
		local_body_name_np: "फतुवा बिजयपुर नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "238",
		local_body_name_en: "Ishnath Municipality",
		local_body_name_np: "ईशनाथ नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "239",
		local_body_name_en: "Paroha Municipality",
		local_body_name_np: "परोहा नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "240",
		local_body_name_en: "Rajpur Municipality",
		local_body_name_np: "राजपुर नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "241",
		local_body_name_en: "Rajdevi Municipality",
		local_body_name_np: "राजदेवी नगरपालिका"
	},
	{
		district_id: "20",
		local_body_id: "242",
		local_body_name_en: "Yamunamai Rural Municipality",
		local_body_name_np: "यमुनामाई गाउँपालिका"
	},
	{
		district_id: "20",
		local_body_id: "243",
		local_body_name_en: "Durgabhagawati  Rural Municipality",
		local_body_name_np: "दुर्गाभगवती गाउँपालिका"
	},
	{
		district_id: "21",
		local_body_id: "244",
		local_body_name_en: "Kalaiya Sub Metropolitan City",
		local_body_name_np: "कलैया उपमहानगरपालिका"
	},
	{
		district_id: "21",
		local_body_id: "245",
		local_body_name_en: "Jeetpur Simara Sub Metropolitan City",
		local_body_name_np: "जितपुर सिमरा उपमहानगरपालिका"
	},
	{
		district_id: "21",
		local_body_id: "246",
		local_body_name_en: "Kolhawi Municipality",
		local_body_name_np: "कोल्हवी नगरपालिका"
	},
	{
		district_id: "21",
		local_body_id: "247",
		local_body_name_en: "Nijgadh Municipality",
		local_body_name_np: "निजगढ नगरपालिका"
	},
	{
		district_id: "21",
		local_body_id: "248",
		local_body_name_en: "Mahagadhimai Municipality",
		local_body_name_np: "महागढीमाई नगरपालिका"
	},
	{
		district_id: "21",
		local_body_id: "249",
		local_body_name_en: "Simraungadh Municipality",
		local_body_name_np: "सिम्रौनगढ नगरपालिका"
	},
	{
		district_id: "21",
		local_body_id: "250",
		local_body_name_en: "Pachrauta Municipality",
		local_body_name_np: "पचरौता नगरपालिका"
	},
	{
		district_id: "21",
		local_body_id: "251",
		local_body_name_en: "Parwanipur Rural Municipality",
		local_body_name_np: "परवानीपुर गाउँपालिका"
	},
	{
		district_id: "21",
		local_body_id: "252",
		local_body_name_en: "Prasauni Rural Municipality",
		local_body_name_np: "प्रसौनी गाउँपालिका"
	},
	{
		district_id: "21",
		local_body_id: "253",
		local_body_name_en: "Pheta Rural Municipality",
		local_body_name_np: "फेटा गाउँपालिका"
	},
	{
		district_id: "21",
		local_body_id: "254",
		local_body_name_en: "Aadarsha Kotwal Rural Municipality",
		local_body_name_np: "आदर्श कोटवाल गाउँपालिका"
	},
	{
		district_id: "21",
		local_body_id: "255",
		local_body_name_en: "Karaiyamai Rural Municipality",
		local_body_name_np: "करैयामाई गाउँपालिका"
	},
	{
		district_id: "21",
		local_body_id: "256",
		local_body_name_en: "Devtal Rural Municipality",
		local_body_name_np: "देवताल गाउँपालिका"
	},
	{
		district_id: "21",
		local_body_id: "257",
		local_body_name_en: "Baragadhi Rural Municipality",
		local_body_name_np: "बारागढी गाउँपालिका"
	},
	{
		district_id: "21",
		local_body_id: "258",
		local_body_name_en: "Suwarna Rural Municipality",
		local_body_name_np: "सुवर्ण गाउँपालिका"
	},
	{
		district_id: "21",
		local_body_id: "259",
		local_body_name_en: "Bishrampur Rural Municipality",
		local_body_name_np: "विश्रामपुर गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "260",
		local_body_name_en: "Birgunj Metropolitan City",
		local_body_name_np: "विरगंज महानगरपालिका"
	},
	{
		district_id: "22",
		local_body_id: "261",
		local_body_name_en: "Pokhariya Municipality",
		local_body_name_np: "पोखरीया नगरपालिका"
	},
	{
		district_id: "22",
		local_body_id: "262",
		local_body_name_en: "Bahudaramai Municipality",
		local_body_name_np: "बहुदरमाई नगरपालिका"
	},
	{
		district_id: "22",
		local_body_id: "263",
		local_body_name_en: "Parsagadhi Municipality",
		local_body_name_np: "पर्सागढी नगरपालिका"
	},
	{
		district_id: "22",
		local_body_id: "264",
		local_body_name_en: "Thori Rural Municipality",
		local_body_name_np: "ठोरी गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "265",
		local_body_name_en: "Jagarnathpur Rural Municipality",
		local_body_name_np: "जगरनाथपुर गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "266",
		local_body_name_en: "Dhobini Rural Municipality",
		local_body_name_np: "धोबीनी गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "267",
		local_body_name_en: "Chhipaharmai Rural Municipality",
		local_body_name_np: "छिपहरमाई गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "268",
		local_body_name_en: "Pakaha Mainpur Rural Municipality",
		local_body_name_np: "पकाहा मैनपुर गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "269",
		local_body_name_en: "Bindabasini Rural Municipality",
		local_body_name_np: "बिन्दबासिनी गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "270",
		local_body_name_en: "Sakhuwa Prasauni Rural Municipality",
		local_body_name_np: "सखुवा प्रसौनी गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "271",
		local_body_name_en: "Paterwa Sugauli Rural Municipality",
		local_body_name_np: "पटेर्वा सुगौली गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "272",
		local_body_name_en: "Kalikamai Rural Municipality",
		local_body_name_np: "कालिकामाई गाउँपालिका"
	},
	{
		district_id: "22",
		local_body_id: "273",
		local_body_name_en: "Jirabhawani Rural Municipality",
		local_body_name_np: "जिराभवानी गाउँपालिका"
	},
	{
		district_id: "23",
		local_body_id: "274",
		local_body_name_en: "Jiri  Municipality",
		local_body_name_np: "जिरी नगरपालिका"
	},
	{
		district_id: "23",
		local_body_id: "275",
		local_body_name_en: "Bhimeshwor Municipality",
		local_body_name_np: "भीमेश्‍वर नगरपालिका"
	},
	{
		district_id: "23",
		local_body_id: "276",
		local_body_name_en: "Kalinchok Rural Municipality",
		local_body_name_np: "कालिन्चोक गाउँपालिका"
	},
	{
		district_id: "23",
		local_body_id: "277",
		local_body_name_en: "Gaurishankar Rural Municipality",
		local_body_name_np: "गौरीशंकर गाउँपालिका"
	},
	{
		district_id: "23",
		local_body_id: "278",
		local_body_name_en: "Tamakoshi Rural Municipality",
		local_body_name_np: "तामाकोशी गाउँपालिका"
	},
	{
		district_id: "23",
		local_body_id: "279",
		local_body_name_en: "Melung Rural Municipality",
		local_body_name_np: "मेलुङ गाउँपालिका"
	},
	{
		district_id: "23",
		local_body_id: "280",
		local_body_name_en: "Bigu Rural Municipality",
		local_body_name_np: "विगु गाउँपालिका"
	},
	{
		district_id: "23",
		local_body_id: "281",
		local_body_name_en: "Baiteshwor Rural Municipality",
		local_body_name_np: "वैतेश्‍वर गाउँपालिका"
	},
	{
		district_id: "23",
		local_body_id: "282",
		local_body_name_en: "Shailung Rural Municipality",
		local_body_name_np: "शैलुङ गाउँपालिका"
	},
	{
		district_id: "24",
		local_body_id: "283",
		local_body_name_en: "Manthali Municipality",
		local_body_name_np: "मन्थली नगरपालिका"
	},
	{
		district_id: "24",
		local_body_id: "284",
		local_body_name_en: "Ramechhap Municipality",
		local_body_name_np: "रामेछाप नगरपालिका"
	},
	{
		district_id: "24",
		local_body_id: "285",
		local_body_name_en: "Umakunda Rural Municipality",
		local_body_name_np: "उमाकुण्ड गाउँपालिका"
	},
	{
		district_id: "24",
		local_body_id: "286",
		local_body_name_en: "Khandadevi Rural Municipality",
		local_body_name_np: "खाँडादेवी गाउँपालिका"
	},
	{
		district_id: "24",
		local_body_id: "287",
		local_body_name_en: "Gokulganga Rural Municipality",
		local_body_name_np: "गोकुलगंगा गाउँपालिका"
	},
	{
		district_id: "24",
		local_body_id: "288",
		local_body_name_en: "Doramba Rural Municipality",
		local_body_name_np: "दोरम्बा गाउँपालिका"
	},
	{
		district_id: "24",
		local_body_id: "289",
		local_body_name_en: "Likhu Tamakoshi Rural Municipality",
		local_body_name_np: "लिखु तामाकोशी गाउँपालिका"
	},
	{
		district_id: "24",
		local_body_id: "290",
		local_body_name_en: "Sunapati Rural Municipality",
		local_body_name_np: "सुनापति गाउँपालिका"
	},
	{
		district_id: "25",
		local_body_id: "291",
		local_body_name_en: "Kamalamai Municipality",
		local_body_name_np: "कमलामाई नगरपालिका"
	},
	{
		district_id: "25",
		local_body_id: "292",
		local_body_name_en: "Dudhauli Municipality",
		local_body_name_np: "दुधौली नगरपालिका"
	},
	{
		district_id: "25",
		local_body_id: "293",
		local_body_name_en: "Golanjor Rural Municipality",
		local_body_name_np: "गोलन्जोर गाउँपालिका"
	},
	{
		district_id: "25",
		local_body_id: "294",
		local_body_name_en: "Ghyanglekh Rural Municipality",
		local_body_name_np: "घ्याङलेख गाउँपालिका"
	},
	{
		district_id: "25",
		local_body_id: "295",
		local_body_name_en: "Tinpatan Rural Municipality",
		local_body_name_np: "तीनपाटन गाउँपालिका"
	},
	{
		district_id: "25",
		local_body_id: "296",
		local_body_name_en: "Phikkal Rural Municipality",
		local_body_name_np: "फिक्‍कल गाउँपालिका"
	},
	{
		district_id: "25",
		local_body_id: "297",
		local_body_name_en: "Marin Rural Municipality",
		local_body_name_np: "मरिण गाउँपालिका"
	},
	{
		district_id: "25",
		local_body_id: "298",
		local_body_name_en: "Sunkoshi Rural Municipality",
		local_body_name_np: "सुनकोशी गाउँपालिका"
	},
	{
		district_id: "25",
		local_body_id: "299",
		local_body_name_en: "Hariharpurgadhi Rural Municipality",
		local_body_name_np: "हरिहरपुरगढी गाउँपालिका"
	},
	{
		district_id: "26",
		local_body_id: "300",
		local_body_name_en: "Dhulikhel Municipality",
		local_body_name_np: "धुलिखेल नगरपालिका"
	},
	{
		district_id: "26",
		local_body_id: "301",
		local_body_name_en: "Banepa Municipality",
		local_body_name_np: "बनेपा नगरपालिका"
	},
	{
		district_id: "26",
		local_body_id: "302",
		local_body_name_en: "Panauti Municipality",
		local_body_name_np: "पनौती नगरपालिका"
	},
	{
		district_id: "26",
		local_body_id: "303",
		local_body_name_en: "Panchkhal Municipality",
		local_body_name_np: "पाँचखाल नगरपालिका"
	},
	{
		district_id: "26",
		local_body_id: "304",
		local_body_name_en: "Namobuddha Municipality",
		local_body_name_np: "नमोबुद्ध नगरपालिका"
	},
	{
		district_id: "26",
		local_body_id: "305",
		local_body_name_en: "Khanikhola Rural Municipality",
		local_body_name_np: "खानीखोला गाउँपालिका"
	},
	{
		district_id: "26",
		local_body_id: "306",
		local_body_name_en: "Chaurideurali Rural Municipality",
		local_body_name_np: "चौंरीदेउराली गाउँपालिका"
	},
	{
		district_id: "26",
		local_body_id: "307",
		local_body_name_en: "Temal Rural Municipality",
		local_body_name_np: "तेमाल गाउँपालिका"
	},
	{
		district_id: "26",
		local_body_id: "308",
		local_body_name_en: "Bethanchok Rural Municipality",
		local_body_name_np: "बेथानचोक गाउँपालिका"
	},
	{
		district_id: "26",
		local_body_id: "309",
		local_body_name_en: "Bhumlu Rural Municipality",
		local_body_name_np: "भुम्लु गाउँपालिका"
	},
	{
		district_id: "26",
		local_body_id: "310",
		local_body_name_en: "Mandandeupur Municipality",
		local_body_name_np: "मण्डनदेउपुर नगरपालिका"
	},
	{
		district_id: "26",
		local_body_id: "311",
		local_body_name_en: "Mahabharat Rural Municipality",
		local_body_name_np: "महाभारत गाउँपालिका"
	},
	{
		district_id: "26",
		local_body_id: "312",
		local_body_name_en: "Roshi Rural Municipality",
		local_body_name_np: "रोशी गाउँपालिका"
	},
	{
		district_id: "27",
		local_body_id: "313",
		local_body_name_en: "Chautara Sangachokgadhi Municipality",
		local_body_name_np: "चौतारा साँगाचोकगढी नगरपालिका"
	},
	{
		district_id: "27",
		local_body_id: "314",
		local_body_name_en: "Barhabise Municipality",
		local_body_name_np: "बाह्रविसे नगरपालिका"
	},
	{
		district_id: "27",
		local_body_id: "315",
		local_body_name_en: "Melamchi Municipality",
		local_body_name_np: "मेलम्ची नगरपालिका"
	},
	{
		district_id: "27",
		local_body_id: "316",
		local_body_name_en: "Indrawati Rural Municipality",
		local_body_name_np: "ईन्द्रावती गाउँपालिका"
	},
	{
		district_id: "27",
		local_body_id: "317",
		local_body_name_en: "Jugal Rural Municipality",
		local_body_name_np: "जुगल गाउँपालिका"
	},
	{
		district_id: "27",
		local_body_id: "318",
		local_body_name_en: "Panchpokhari Thangpal Rural Municipality",
		local_body_name_np: "पाँचपोखरी थाङपाल गाउँपालिका"
	},
	{
		district_id: "27",
		local_body_id: "319",
		local_body_name_en: "Balephi Rural Municipality",
		local_body_name_np: "बलेफी गाउँपालिका"
	},
	{
		district_id: "27",
		local_body_id: "320",
		local_body_name_en: "Bhotekoshi Rural Municipality",
		local_body_name_np: "भोटेकोशी गाउँपालिका"
	},
	{
		district_id: "27",
		local_body_id: "321",
		local_body_name_en: "Lisankhu Pakhar Rural Municipality",
		local_body_name_np: "लिसंखु पाखर गाउँपालिका"
	},
	{
		district_id: "27",
		local_body_id: "322",
		local_body_name_en: "Sunkoshi Rural Municipality",
		local_body_name_np: "सुनकोशी गाउँपालिका"
	},
	{
		district_id: "27",
		local_body_id: "323",
		local_body_name_en: "Helambu Rural Municipality",
		local_body_name_np: "हेलम्बु गाउँपालिका"
	},
	{
		district_id: "27",
		local_body_id: "324",
		local_body_name_en: "Tripurasundari Rural Municipality",
		local_body_name_np: "त्रिपुरासुन्दरी गाउँपालिका"
	},
	{
		district_id: "28",
		local_body_id: "325",
		local_body_name_en: "Uttargaya Rural Municipality",
		local_body_name_np: "उत्तरगया गाउँपालिका"
	},
	{
		district_id: "28",
		local_body_id: "326",
		local_body_name_en: "Kalika Rural Municipality",
		local_body_name_np: "कालिका गाउँपालिका"
	},
	{
		district_id: "28",
		local_body_id: "327",
		local_body_name_en: "Gosaikunda Rural Municipality",
		local_body_name_np: "गोसाईंकुण्ड गाउँपालिका"
	},
	{
		district_id: "28",
		local_body_id: "328",
		local_body_name_en: "Naukunda Rural Municipality",
		local_body_name_np: "नौकुण्ड गाउँपालिका"
	},
	{
		district_id: "28",
		local_body_id: "329",
		local_body_name_en: "Aamachhodingmo Rural Municipality",
		local_body_name_np: "आमाछोदिङमो गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "330",
		local_body_name_en: "Bidur Municipality",
		local_body_name_np: "विदुर नगरपालिका"
	},
	{
		district_id: "29",
		local_body_id: "331",
		local_body_name_en: "Belkotgadhi Municipality",
		local_body_name_np: "बेलकोटगढी नगरपालिका"
	},
	{
		district_id: "29",
		local_body_id: "332",
		local_body_name_en: "Kakani Rural Municipality",
		local_body_name_np: "ककनी गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "333",
		local_body_name_en: "Kispang Rural Municipality",
		local_body_name_np: "किस्पाङ गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "334",
		local_body_name_en: "Tadi Rural Municipality",
		local_body_name_np: "तादी गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "335",
		local_body_name_en: "Tarkeshwor Rural Municipality",
		local_body_name_np: "तारकेश्‍वर गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "336",
		local_body_name_en: "Dupcheshwor Rural Municipality",
		local_body_name_np: "दुप्चेश्‍वर गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "337",
		local_body_name_en: "Panchakanya Rural Municipality",
		local_body_name_np: "पञ्‍चकन्या गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "338",
		local_body_name_en: "Likhu Rural Municipality",
		local_body_name_np: "लिखु गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "339",
		local_body_name_en: "Myagang Rural Municipality",
		local_body_name_np: "म्यागङ गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "340",
		local_body_name_en: "Shivapuri Rural Municipality",
		local_body_name_np: "शिवपुरी गाउँपालिका"
	},
	{
		district_id: "29",
		local_body_id: "341",
		local_body_name_en: "Suryagadhi Rural Municipality",
		local_body_name_np: "सूर्यगढी गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "342",
		local_body_name_en: "Dhunibeshi Municipality",
		local_body_name_np: "धुनीबेशी नगरपालिका"
	},
	{
		district_id: "30",
		local_body_id: "343",
		local_body_name_en: "Neelakantha Municipality",
		local_body_name_np: "निलकण्ठ नगरपालिका"
	},
	{
		district_id: "30",
		local_body_id: "344",
		local_body_name_en: "Khaniyabas Rural Municipality",
		local_body_name_np: "खनीयाबास गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "345",
		local_body_name_en: "Gajuri Rural Municipality",
		local_body_name_np: "गजुरी गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "346",
		local_body_name_en: "Galchhi Rural Municipality",
		local_body_name_np: "गल्छी गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "347",
		local_body_name_en: "Gangajamuna Rural Municipality",
		local_body_name_np: "गंगाजमुना गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "348",
		local_body_name_en: "Jwalamukhi Rural Municipality",
		local_body_name_np: "ज्वालामूखी गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "349",
		local_body_name_en: "Thakre Rural Municipality",
		local_body_name_np: "थाक्रे गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "350",
		local_body_name_en: "Netrawati Dabjong Rural Municipality",
		local_body_name_np: "नेत्रावती डबजोङ गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "351",
		local_body_name_en: "Benighat Rorang Rural Municipality",
		local_body_name_np: "वेनीघाट रोराङ गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "352",
		local_body_name_en: "Rubi Valley Rural Municipality",
		local_body_name_np: "रुवी भ्याली गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "353",
		local_body_name_en: "Siddhalek Rural Municipality",
		local_body_name_np: "सिद्धलेक गाउँपालिका"
	},
	{
		district_id: "30",
		local_body_id: "354",
		local_body_name_en: "Tripurasundari Rural Municipality",
		local_body_name_np: "त्रिपुरासुन्दरी गाउँपालिका"
	},
	{
		district_id: "31",
		local_body_id: "355",
		local_body_name_en: "Bharatpur Metropolitan City",
		local_body_name_np: "भरतपुर महानगरपालिका"
	},
	{
		district_id: "31",
		local_body_id: "356",
		local_body_name_en: "Kalika Municipality",
		local_body_name_np: "कालिका नगरपालिका"
	},
	{
		district_id: "31",
		local_body_id: "357",
		local_body_name_en: "Khairahani Municipality",
		local_body_name_np: "खैरहनी नगरपालिका"
	},
	{
		district_id: "31",
		local_body_id: "358",
		local_body_name_en: "Madi Municipality",
		local_body_name_np: "माडी नगरपालिका"
	},
	{
		district_id: "31",
		local_body_id: "359",
		local_body_name_en: "Ratnanagar Municipality",
		local_body_name_np: "रत्‍ननगर नगरपालिका"
	},
	{
		district_id: "31",
		local_body_id: "360",
		local_body_name_en: "Rapti Municipality",
		local_body_name_np: "राप्‍ती नगरपालिका"
	},
	{
		district_id: "31",
		local_body_id: "361",
		local_body_name_en: "Ichchhakamana Rural Municipality",
		local_body_name_np: "इच्छाकामना गाउँपालिका"
	},
	{
		district_id: "32",
		local_body_id: "362",
		local_body_name_en: "Hetauda Sub Metropolitan City",
		local_body_name_np: "हेटौंडा उपमहानगरपालिका"
	},
	{
		district_id: "32",
		local_body_id: "363",
		local_body_name_en: "Thaha Municipality",
		local_body_name_np: "थाहा नगरपालिका"
	},
	{
		district_id: "32",
		local_body_id: "364",
		local_body_name_en: "Indrasarowar Rural Municipality",
		local_body_name_np: "ईन्द्रसरोवर गाउँपालिका"
	},
	{
		district_id: "32",
		local_body_id: "365",
		local_body_name_en: "Kailash Rural Municipality",
		local_body_name_np: "कैलाश गाउँपालिका"
	},
	{
		district_id: "32",
		local_body_id: "366",
		local_body_name_en: "Bakaiya Rural Municipality",
		local_body_name_np: "बकैया गाउँपालिका"
	},
	{
		district_id: "32",
		local_body_id: "367",
		local_body_name_en: "Bagmati Rural Municipality",
		local_body_name_np: "बागमती गाउँपालिका"
	},
	{
		district_id: "32",
		local_body_id: "368",
		local_body_name_en: "Bhimphedi Rural Municipality",
		local_body_name_np: "भिमफेदी गाउँपालिका"
	},
	{
		district_id: "32",
		local_body_id: "369",
		local_body_name_en: "Makawanpurgadhi Rural Municipality",
		local_body_name_np: "मकवानपुरगढी गाउँपालिका"
	},
	{
		district_id: "32",
		local_body_id: "370",
		local_body_name_en: "Manahari Rural Municipality",
		local_body_name_np: "मनहरी गाउँपालिका"
	},
	{
		district_id: "32",
		local_body_id: "371",
		local_body_name_en: "Raksirang Rural Municipality",
		local_body_name_np: "राक्सिराङ्ग गाउँपालिका"
	},
	{
		district_id: "33",
		local_body_id: "372",
		local_body_name_en: "Changunarayan Municipality",
		local_body_name_np: "चाँगुनारायण नगरपालिका"
	},
	{
		district_id: "33",
		local_body_id: "373",
		local_body_name_en: "Bhaktapur Municipality",
		local_body_name_np: "भक्तपुर नगरपालिका"
	},
	{
		district_id: "33",
		local_body_id: "374",
		local_body_name_en: "Madhyapur Thimi Municipality",
		local_body_name_np: "मध्यपुर थिमी नगरपालिका"
	},
	{
		district_id: "33",
		local_body_id: "375",
		local_body_name_en: "Suryabinayak Municipality",
		local_body_name_np: "सूर्यविनायक नगरपालिका"
	},
	{
		district_id: "34",
		local_body_id: "376",
		local_body_name_en: "Lalitpur Metropolitan City",
		local_body_name_np: "ललितपुर महानगरपालिका"
	},
	{
		district_id: "34",
		local_body_id: "377",
		local_body_name_en: "Godawari Municipality",
		local_body_name_np: "गोदावरी नगरपालिका"
	},
	{
		district_id: "34",
		local_body_id: "378",
		local_body_name_en: "Mahalaxmi Municipality",
		local_body_name_np: "महालक्ष्मी नगरपालिका"
	},
	{
		district_id: "34",
		local_body_id: "379",
		local_body_name_en: "Konjyosom Rural Municipality",
		local_body_name_np: "कोन्ज्योसोम गाउँपालिका"
	},
	{
		district_id: "34",
		local_body_id: "380",
		local_body_name_en: "Bagmati Rural Municipality",
		local_body_name_np: "बागमती गाउँपालिका"
	},
	{
		district_id: "34",
		local_body_id: "381",
		local_body_name_en: "Mahankal Rural Municipality",
		local_body_name_np: "महाङ्काल गाउँपालिका"
	},
	{
		district_id: "35",
		local_body_id: "382",
		local_body_name_en: "Kathmandu Metropolitan City",
		local_body_name_np: "काठमाण्डौं महानगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "383",
		local_body_name_en: "Kageshwori Manohora Municipality",
		local_body_name_np: "कागेश्‍वरी मनोहरा नगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "384",
		local_body_name_en: "Kirtipur Municipality",
		local_body_name_np: "कीर्तिपुर नगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "385",
		local_body_name_en: "Gokarneshwor Municipality",
		local_body_name_np: "गोकर्णेश्‍वर नगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "386",
		local_body_name_en: "Chandragiri Municipality",
		local_body_name_np: "चन्द्रागिरी नगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "387",
		local_body_name_en: "Tokha Municipality",
		local_body_name_np: "टोखा नगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "388",
		local_body_name_en: "Tarkeshwor Municipality",
		local_body_name_np: "तारकेश्‍वर नगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "389",
		local_body_name_en: "Dakshinkali Municipality",
		local_body_name_np: "दक्षिणकाली नगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "390",
		local_body_name_en: "Nagarjun Municipality",
		local_body_name_np: "नागार्जुन नगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "391",
		local_body_name_en: "Budhanilkantha Municipality",
		local_body_name_np: "बूढानिलकण्ठ नगरपालिका"
	},
	{
		district_id: "35",
		local_body_id: "392",
		local_body_name_en: "Shankharapur Municipality",
		local_body_name_np: "शंखरापुर नगरपालिका"
	},
	{
		district_id: "36",
		local_body_id: "393",
		local_body_name_en: "Gorkha Municipality",
		local_body_name_np: "गोरखा नगरपालिका"
	},
	{
		district_id: "36",
		local_body_id: "394",
		local_body_name_en: "Palungtar Municipality",
		local_body_name_np: "पालुङटार नगरपालिका"
	},
	{
		district_id: "36",
		local_body_id: "395",
		local_body_name_en: "Barpak Sulikot Rural Municipality",
		local_body_name_np: "बारपाक सुलीकोट गाउँपालिका"
	},
	{
		district_id: "36",
		local_body_id: "396",
		local_body_name_en: "Siranchowk Rural Municipality",
		local_body_name_np: "सिरानचोक गाउँपालिका"
	},
	{
		district_id: "36",
		local_body_id: "397",
		local_body_name_en: "Ajirkot Rural Municipality",
		local_body_name_np: "अजिरकोट गाउँपालिका"
	},
	{
		district_id: "36",
		local_body_id: "398",
		local_body_name_en: "Aarughat Rural Municipality",
		local_body_name_np: "आरूघाट गाउँपालिका"
	},
	{
		district_id: "36",
		local_body_id: "399",
		local_body_name_en: "Gandaki Rural Municipality",
		local_body_name_np: "गण्डकी गाउँपालिका"
	},
	{
		district_id: "36",
		local_body_id: "400",
		local_body_name_en: "Chumnubri Rural Municipality",
		local_body_name_np: "चुमनुब्री गाउँपालिका"
	},
	{
		district_id: "36",
		local_body_id: "401",
		local_body_name_en: "Dharche Rural Municipality",
		local_body_name_np: "धार्चे गाउँपालिका"
	},
	{
		district_id: "36",
		local_body_id: "402",
		local_body_name_en: "Bhimsen Thapa Rural Municipality",
		local_body_name_np: "भिमसेन थापा गाउँपालिका"
	},
	{
		district_id: "36",
		local_body_id: "403",
		local_body_name_en: "Shahid Lakhan Rural Municipality",
		local_body_name_np: "शहिद लखन गाउँपालिका"
	},
	{
		district_id: "37",
		local_body_id: "404",
		local_body_name_en: "Beshisahar Municipality",
		local_body_name_np: "बेसीशहर नगरपालिका"
	},
	{
		district_id: "37",
		local_body_id: "405",
		local_body_name_en: "Madhyanepal Municipality",
		local_body_name_np: "मध्यनेपाल नगरपालिका"
	},
	{
		district_id: "37",
		local_body_id: "406",
		local_body_name_en: "Rainas Municipality",
		local_body_name_np: "राईनास नगरपालिका"
	},
	{
		district_id: "37",
		local_body_id: "407",
		local_body_name_en: "Sundarbazar Municipality",
		local_body_name_np: "सुन्दरबजार नगरपालिका"
	},
	{
		district_id: "37",
		local_body_id: "408",
		local_body_name_en: "Kwholasothar Rural Municipality",
		local_body_name_np: "क्व्होलासोथार गाउँपालिका"
	},
	{
		district_id: "37",
		local_body_id: "409",
		local_body_name_en: "Doodhpokhari Rural Municipality",
		local_body_name_np: "दूधपोखरी गाउँपालिका"
	},
	{
		district_id: "37",
		local_body_id: "410",
		local_body_name_en: "Dordi Rural Municipality",
		local_body_name_np: "दोर्दी गाउँपालिका"
	},
	{
		district_id: "37",
		local_body_id: "411",
		local_body_name_en: "Marsyangdi Rural Municipality",
		local_body_name_np: "मर्स्याङदी गाउँपालिका"
	},
	{
		district_id: "38",
		local_body_id: "412",
		local_body_name_en: "Bhanu Municipality",
		local_body_name_np: "भानु नगरपालिका"
	},
	{
		district_id: "38",
		local_body_id: "413",
		local_body_name_en: "Bhimad Municipality",
		local_body_name_np: "भिमाद नगरपालिका"
	},
	{
		district_id: "38",
		local_body_id: "414",
		local_body_name_en: "Vyas Municipality",
		local_body_name_np: "व्यास नगरपालिका"
	},
	{
		district_id: "38",
		local_body_id: "415",
		local_body_name_en: "Shuklagandaki Municipality",
		local_body_name_np: "शुक्लागण्डकी नगरपालिका"
	},
	{
		district_id: "38",
		local_body_id: "416",
		local_body_name_en: "Aanbookhaireni Rural Municipality",
		local_body_name_np: "आँबुखैरेनी गाउँपालिका"
	},
	{
		district_id: "38",
		local_body_id: "417",
		local_body_name_en: "Rishing Rural Municipality",
		local_body_name_np: "ऋषिङ्ग गाउँपालिका"
	},
	{
		district_id: "38",
		local_body_id: "418",
		local_body_name_en: "Ghiring Rural Municipality",
		local_body_name_np: "घिरिङ गाउँपालिका"
	},
	{
		district_id: "38",
		local_body_id: "419",
		local_body_name_en: "Devghat Rural Municipality",
		local_body_name_np: "देवघाट गाउँपालिका"
	},
	{
		district_id: "38",
		local_body_id: "420",
		local_body_name_en: "Myagde Rural Municipality",
		local_body_name_np: "म्याग्दे गाउँपालिका"
	},
	{
		district_id: "38",
		local_body_id: "421",
		local_body_name_en: "Bandipur Rural Municipality",
		local_body_name_np: "बन्दिपुर गाउँपालिका"
	},
	{
		district_id: "39",
		local_body_id: "422",
		local_body_name_en: "Pokhara  Metropolitan City",
		local_body_name_np: "पोखरा महानगरपालिका"
	},
	{
		district_id: "39",
		local_body_id: "423",
		local_body_name_en: "Annapurna Rural Municipality",
		local_body_name_np: "अन्‍नपूर्ण गाउँपालिका"
	},
	{
		district_id: "39",
		local_body_id: "424",
		local_body_name_en: "Machhapuchhre Rural Municipality",
		local_body_name_np: "माछापुच्छ्रे गाउँपालिका"
	},
	{
		district_id: "39",
		local_body_id: "425",
		local_body_name_en: "Madi Rural Municipality",
		local_body_name_np: "मादी गाउँपालिका"
	},
	{
		district_id: "39",
		local_body_id: "426",
		local_body_name_en: "Rupa Rural Municipality",
		local_body_name_np: "रूपा गाउँपालिका"
	},
	{
		district_id: "40",
		local_body_id: "427",
		local_body_name_en: "Chame Rural Municipality",
		local_body_name_np: "चामे गाउँपालिका"
	},
	{
		district_id: "40",
		local_body_id: "428",
		local_body_name_en: "Narpa Bhumi Rural Municipality",
		local_body_name_np: "नार्पा भुमि गाउँपालिका"
	},
	{
		district_id: "40",
		local_body_id: "429",
		local_body_name_en: "Nason Rural Municipality",
		local_body_name_np: "नासोँ गाउँपालिका"
	},
	{
		district_id: "40",
		local_body_id: "430",
		local_body_name_en: "Manang Ngisyang Rural Municipality",
		local_body_name_np: "मनाङ ङिस्याङ गाउँपालिका"
	},
	{
		district_id: "41",
		local_body_id: "431",
		local_body_name_en: "Gharapjhong Rural Municipality",
		local_body_name_np: "घरपझोङ गाउँपालिका"
	},
	{
		district_id: "41",
		local_body_id: "432",
		local_body_name_en: "Thasang Rural Municipality",
		local_body_name_np: "थासाङ गाउँपालिका"
	},
	{
		district_id: "41",
		local_body_id: "433",
		local_body_name_en: "Lo-Ghekar Damodarkunda Rural Municipality",
		local_body_name_np: "लो-घेकर दामोदरकुण्ड गाउँपालिका"
	},
	{
		district_id: "41",
		local_body_id: "434",
		local_body_name_en: "Lomanthang Rural Municipality",
		local_body_name_np: "लोमन्थाङ गाउँपालिका"
	},
	{
		district_id: "41",
		local_body_id: "435",
		local_body_name_en: "Varagung Muktichhetra Rural Municipality",
		local_body_name_np: "वारागुङ मुक्तिक्षेत्र गाउँपालिका"
	},
	{
		district_id: "42",
		local_body_id: "436",
		local_body_name_en: "Kushma Municipality",
		local_body_name_np: "कुश्मा नगरपालिका"
	},
	{
		district_id: "42",
		local_body_id: "437",
		local_body_name_en: "Phalewas Municipality",
		local_body_name_np: "फलेवास नगरपालिका"
	},
	{
		district_id: "42",
		local_body_id: "438",
		local_body_name_en: "Jaljala Rural Municipality",
		local_body_name_np: "जलजला गाउँपालिका"
	},
	{
		district_id: "42",
		local_body_id: "439",
		local_body_name_en: "Paiyun Rural Municipality",
		local_body_name_np: "पैयुं गाउँपालिका"
	},
	{
		district_id: "42",
		local_body_id: "440",
		local_body_name_en: "Mahashila Rural Municipality",
		local_body_name_np: "महाशिला गाउँपालिका"
	},
	{
		district_id: "42",
		local_body_id: "441",
		local_body_name_en: "Modi Rural Municipality",
		local_body_name_np: "मोदी गाउँपालिका"
	},
	{
		district_id: "42",
		local_body_id: "442",
		local_body_name_en: "Bihadi Rural Municipality",
		local_body_name_np: "बिहादी गाउँपालिका"
	},
	{
		district_id: "43",
		local_body_id: "443",
		local_body_name_en: "Galyang Municipality",
		local_body_name_np: "गल्याङ  नगरपालिका"
	},
	{
		district_id: "43",
		local_body_id: "444",
		local_body_name_en: "Chapakot Municipality",
		local_body_name_np: "चापाकोट नगरपालिका"
	},
	{
		district_id: "43",
		local_body_id: "445",
		local_body_name_en: "Putalibazar Municipality",
		local_body_name_np: "पुतलीबजार नगरपालिका"
	},
	{
		district_id: "43",
		local_body_id: "446",
		local_body_name_en: "Bheerkot Municipality",
		local_body_name_np: "भीरकोट नगरपालिका"
	},
	{
		district_id: "43",
		local_body_id: "447",
		local_body_name_en: "Waling Municipality",
		local_body_name_np: "वालिङ नगरपालिका"
	},
	{
		district_id: "43",
		local_body_id: "448",
		local_body_name_en: "Arjunchaupari Rural Municipality",
		local_body_name_np: "अर्जुनचौपारी गाउँपालिका"
	},
	{
		district_id: "43",
		local_body_id: "449",
		local_body_name_en: "Aandhikhola Rural Municipality",
		local_body_name_np: "आँधिखोला गाउँपालिका"
	},
	{
		district_id: "43",
		local_body_id: "450",
		local_body_name_en: "Kaligandaki Rural Municipality",
		local_body_name_np: "कालीगण्डकी गाउँपालिका"
	},
	{
		district_id: "43",
		local_body_id: "451",
		local_body_name_en: "Phedikhola Rural Municipality",
		local_body_name_np: "फेदीखोला गाउँपालिका"
	},
	{
		district_id: "43",
		local_body_id: "452",
		local_body_name_en: "Biruwa Rural Municipality",
		local_body_name_np: "विरुवा गाउँपालिका"
	},
	{
		district_id: "43",
		local_body_id: "453",
		local_body_name_en: "Harinas Rural Municipality",
		local_body_name_np: "हरिनास गाउँपालिका"
	},
	{
		district_id: "44",
		local_body_id: "454",
		local_body_name_en: "Beni Municipality",
		local_body_name_np: "बेनी नगरपालिका"
	},
	{
		district_id: "44",
		local_body_id: "455",
		local_body_name_en: "Annapurna Rural Municipality",
		local_body_name_np: "अन्‍नपूर्ण गाउँपालिका"
	},
	{
		district_id: "44",
		local_body_id: "456",
		local_body_name_en: "Dhawalagiri Rural Municipality",
		local_body_name_np: "धवलागिरी गाउँपालिका"
	},
	{
		district_id: "44",
		local_body_id: "457",
		local_body_name_en: "Mangala Rural Municipality",
		local_body_name_np: "मंगला गाउँपालिका"
	},
	{
		district_id: "44",
		local_body_id: "458",
		local_body_name_en: "Malika Rural Municipality",
		local_body_name_np: "मालिका गाउँपालिका"
	},
	{
		district_id: "44",
		local_body_id: "459",
		local_body_name_en: "Raghuganga Rural Municipality",
		local_body_name_np: "रघुगंगा गाउँपालिका"
	},
	{
		district_id: "45",
		local_body_id: "460",
		local_body_name_en: "Baglung Municipality",
		local_body_name_np: "बागलुङ नगरपालिका"
	},
	{
		district_id: "45",
		local_body_id: "461",
		local_body_name_en: "Galkot Municipality",
		local_body_name_np: "गल्कोट नगरपालिका"
	},
	{
		district_id: "45",
		local_body_id: "462",
		local_body_name_en: "Jaimini Municipality",
		local_body_name_np: "जैमिनी नगरपालिका"
	},
	{
		district_id: "45",
		local_body_id: "463",
		local_body_name_en: "Dhorpatan Municipality",
		local_body_name_np: "ढोरपाटन नगरपालिका"
	},
	{
		district_id: "45",
		local_body_id: "464",
		local_body_name_en: "Bareng Rural Municipality",
		local_body_name_np: "वरेङ गाउँपालिका"
	},
	{
		district_id: "45",
		local_body_id: "465",
		local_body_name_en: "Kathekhola Rural Municipality",
		local_body_name_np: "काठेखोला गाउँपालिका"
	},
	{
		district_id: "45",
		local_body_id: "466",
		local_body_name_en: "Tamankhola Rural Municipality",
		local_body_name_np: "तमानखोला गाउँपालिका"
	},
	{
		district_id: "45",
		local_body_id: "467",
		local_body_name_en: "Tarakhola Rural Municipality",
		local_body_name_np: "ताराखोला गाउँपालिका"
	},
	{
		district_id: "45",
		local_body_id: "468",
		local_body_name_en: "Nisikhola Rural Municipality",
		local_body_name_np: "निसीखोला गाउँपालिका"
	},
	{
		district_id: "45",
		local_body_id: "469",
		local_body_name_en: "Badhigad Rural Municipality",
		local_body_name_np: "वडिगाड गाउँपालिका"
	},
	{
		district_id: "46",
		local_body_id: "470",
		local_body_name_en: "Kawasoti Municipality",
		local_body_name_np: "कावासोती नगरपालिका"
	},
	{
		district_id: "46",
		local_body_id: "471",
		local_body_name_en: "Gaidakot Municipality",
		local_body_name_np: "गैंडाकोट नगरपालिका"
	},
	{
		district_id: "46",
		local_body_id: "472",
		local_body_name_en: "Devchuli Municipality",
		local_body_name_np: "देवचुली नगरपालिका"
	},
	{
		district_id: "46",
		local_body_id: "473",
		local_body_name_en: "Madhyabindu Municipality",
		local_body_name_np: "मध्यविन्दु नगरपालिका"
	},
	{
		district_id: "46",
		local_body_id: "474",
		local_body_name_en: "Baudikali Rural Municipality",
		local_body_name_np: "बौदीकाली गाउँपालिका"
	},
	{
		district_id: "46",
		local_body_id: "475",
		local_body_name_en: "Bulingtar Rural Municipality",
		local_body_name_np: "बुलिङ्टार गाउँपालिका"
	},
	{
		district_id: "46",
		local_body_id: "476",
		local_body_name_en: "Binayi-Tribeni Rural Municipality",
		local_body_name_np: "विनयी-त्रिवेणी गाउँपालिका"
	},
	{
		district_id: "46",
		local_body_id: "477",
		local_body_name_en: "Hupsekot Rural Municipality",
		local_body_name_np: "हुप्सेकोट गाउँपालिका"
	},
	{
		district_id: "47",
		local_body_id: "478",
		local_body_name_en: "Bardaghat Municipality",
		local_body_name_np: "बर्दघाट नगरपालिका"
	},
	{
		district_id: "47",
		local_body_id: "479",
		local_body_name_en: "Ramgram Municipality",
		local_body_name_np: "रामग्राम नगरपालिका"
	},
	{
		district_id: "47",
		local_body_id: "480",
		local_body_name_en: "Sunwal Municipality",
		local_body_name_np: "सुनवल नगरपालिका"
	},
	{
		district_id: "47",
		local_body_id: "481",
		local_body_name_en: "Susta Rural Municipality",
		local_body_name_np: "सुस्ता गाउँपालिका"
	},
	{
		district_id: "47",
		local_body_id: "482",
		local_body_name_en: "Palhinandan Rural Municipality",
		local_body_name_np: "पाल्हीनन्दन गाउँपालिका"
	},
	{
		district_id: "47",
		local_body_id: "483",
		local_body_name_en: "Pratappur Rural Municipality",
		local_body_name_np: "प्रतापपुर गाउँपालिका"
	},
	{
		district_id: "47",
		local_body_id: "484",
		local_body_name_en: "Sarawal Rural Municipality",
		local_body_name_np: "सरावल गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "485",
		local_body_name_en: "Butwal Sub Metropolitan City",
		local_body_name_np: "बुटवल उपमहानगरपालिका"
	},
	{
		district_id: "48",
		local_body_id: "486",
		local_body_name_en: "Devdaha Municipality",
		local_body_name_np: "देवदह नगरपालिका"
	},
	{
		district_id: "48",
		local_body_id: "487",
		local_body_name_en: "Lumbini Sanskritik Municipality",
		local_body_name_np: "लुम्बिनी साँस्कृतिक नगरपालिका"
	},
	{
		district_id: "48",
		local_body_id: "488",
		local_body_name_en: "Sainamaina Municipality",
		local_body_name_np: "सैनामैना नगरपालिका"
	},
	{
		district_id: "48",
		local_body_id: "489",
		local_body_name_en: "Siddharthanagar Municipality",
		local_body_name_np: "सिद्धार्थनगर नगरपालिका"
	},
	{
		district_id: "48",
		local_body_id: "490",
		local_body_name_en: "Tilottama Municipality",
		local_body_name_np: "तिलोत्तमा नगरपालिका"
	},
	{
		district_id: "48",
		local_body_id: "491",
		local_body_name_en: "Gaidahawa  Rural Municipality",
		local_body_name_np: "गैडहवा गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "492",
		local_body_name_en: "Kanchan Rural Municipality",
		local_body_name_np: "कन्चन गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "493",
		local_body_name_en: "Kotahimai Rural Municipality",
		local_body_name_np: "कोटहीमाई गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "494",
		local_body_name_en: "Marchawari Rural Municipality",
		local_body_name_np: "मर्चवारी गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "495",
		local_body_name_en: "Mayadevi Rural Municipality",
		local_body_name_np: "मायादेवी गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "496",
		local_body_name_en: "Omsatiya Rural Municipality",
		local_body_name_np: "ओमसतिया गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "497",
		local_body_name_en: "Rohini Rural Municipality",
		local_body_name_np: "रोहिणी गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "498",
		local_body_name_en: "Sammarimai Rural Municipality",
		local_body_name_np: "सम्मरीमाई गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "499",
		local_body_name_en: "Siyari Rural Municipality",
		local_body_name_np: "सियारी गाउँपालिका"
	},
	{
		district_id: "48",
		local_body_id: "500",
		local_body_name_en: "Sudhdodan Rural Municipality",
		local_body_name_np: "सुद्धोदन गाउँपालिका"
	},
	{
		district_id: "49",
		local_body_id: "501",
		local_body_name_en: "Kapilvastu Municipality",
		local_body_name_np: "कपिलवस्तु नगरपालिका"
	},
	{
		district_id: "49",
		local_body_id: "502",
		local_body_name_en: "Buddhabhumi  Municipality",
		local_body_name_np: "बुद्धभुमि नगरपालिका"
	},
	{
		district_id: "49",
		local_body_id: "503",
		local_body_name_en: "Shivraj Municipality",
		local_body_name_np: "शिवराज नगरपालिका"
	},
	{
		district_id: "49",
		local_body_id: "504",
		local_body_name_en: "Maharajgunj Municipality",
		local_body_name_np: "महाराजगंज नगरपालिका"
	},
	{
		district_id: "49",
		local_body_id: "505",
		local_body_name_en: "Krishnanagar Municipality",
		local_body_name_np: "कृष्णनगर नगरपालिका"
	},
	{
		district_id: "49",
		local_body_id: "506",
		local_body_name_en: "Banganga Municipality",
		local_body_name_np: "बाणगंगा नगरपालिका"
	},
	{
		district_id: "49",
		local_body_id: "507",
		local_body_name_en: "Mayadevi Rural Municipality",
		local_body_name_np: "मायादेवी गाउँपालिका"
	},
	{
		district_id: "49",
		local_body_id: "508",
		local_body_name_en: "Yashodhara Rural Municipality",
		local_body_name_np: "यशोधरा गाउँपालिका"
	},
	{
		district_id: "49",
		local_body_id: "509",
		local_body_name_en: "Shudhdodan Rural Municipality",
		local_body_name_np: "शुद्धोदन गाउँपालिका"
	},
	{
		district_id: "49",
		local_body_id: "510",
		local_body_name_en: "Bijaynagar Rural Municipality",
		local_body_name_np: "विजयनगर गाउँपालिका"
	},
	{
		district_id: "50",
		local_body_id: "511",
		local_body_name_en: "Rampur Municipality",
		local_body_name_np: "रामपुर नगरपालिका"
	},
	{
		district_id: "50",
		local_body_id: "512",
		local_body_name_en: "Tansen Municipality",
		local_body_name_np: "तानसेन नगरपालिका"
	},
	{
		district_id: "50",
		local_body_id: "513",
		local_body_name_en: "Nisdi Rural Municipality",
		local_body_name_np: "निस्दी गाउँपालिका"
	},
	{
		district_id: "50",
		local_body_id: "514",
		local_body_name_en: "Purbakhola Rural Municipality",
		local_body_name_np: "पुर्वखोला गाउँपालिका"
	},
	{
		district_id: "50",
		local_body_id: "515",
		local_body_name_en: "Rambha Rural Municipality",
		local_body_name_np: "रम्भा गाउँपालिका"
	},
	{
		district_id: "50",
		local_body_id: "516",
		local_body_name_en: "Mathagadhi Rural Municipality",
		local_body_name_np: "माथागढी गाउँपालिका"
	},
	{
		district_id: "50",
		local_body_id: "517",
		local_body_name_en: "Tinau Rural Municipality",
		local_body_name_np: "तिनाउ गाउँपालिका"
	},
	{
		district_id: "50",
		local_body_id: "518",
		local_body_name_en: "Baganaskali Rural Municipality",
		local_body_name_np: "बगनासकाली गाउँपालिका"
	},
	{
		district_id: "50",
		local_body_id: "519",
		local_body_name_en: "Ribdikot Rural Municipality",
		local_body_name_np: "रिब्दीकोट गाउँपालिका"
	},
	{
		district_id: "50",
		local_body_id: "520",
		local_body_name_en: "Rainadevi Chhahara Rural Municipality",
		local_body_name_np: "रैनादेवी छहरा गाउँपालिका"
	},
	{
		district_id: "51",
		local_body_id: "521",
		local_body_name_en: "Sandhikharka Municipality",
		local_body_name_np: "सन्धिखर्क नगरपालिका"
	},
	{
		district_id: "51",
		local_body_id: "522",
		local_body_name_en: "Shitaganga Municipality",
		local_body_name_np: "शितगंगा नगरपालिका"
	},
	{
		district_id: "51",
		local_body_id: "523",
		local_body_name_en: "Bhumikasthan Municipality",
		local_body_name_np: "भूमिकास्थान नगरपालिका"
	},
	{
		district_id: "51",
		local_body_id: "524",
		local_body_name_en: "Chhatradev Rural Municipality",
		local_body_name_np: "छत्रदेव गाउँपालिका"
	},
	{
		district_id: "51",
		local_body_id: "525",
		local_body_name_en: "Panini Rural Municipality",
		local_body_name_np: "पाणिनी गाउँपालिका"
	},
	{
		district_id: "51",
		local_body_id: "526",
		local_body_name_en: "Malarani Rural Municipality",
		local_body_name_np: "मालारानी गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "527",
		local_body_name_en: "Musikot Municipality",
		local_body_name_np: "मुसिकोट नगरपालिका"
	},
	{
		district_id: "52",
		local_body_id: "528",
		local_body_name_en: "Resunga Municipality",
		local_body_name_np: "रेसुङ्गा नगरपालिका"
	},
	{
		district_id: "52",
		local_body_id: "529",
		local_body_name_en: "Isma Rural Municipality",
		local_body_name_np: "इस्मा गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "530",
		local_body_name_en: "Kaligandaki Rural Municipality",
		local_body_name_np: "कालीगण्डकी गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "531",
		local_body_name_en: "Gulmidarbar Rural Municipality",
		local_body_name_np: "गुल्मीदरबार गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "532",
		local_body_name_en: "Satyawati Rural Municipality",
		local_body_name_np: "सत्यवती गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "533",
		local_body_name_en: "Chandrakot Rural Municipality",
		local_body_name_np: "चन्द्रकोट गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "534",
		local_body_name_en: "Ruruchhetra Rural Municipality",
		local_body_name_np: "रुरुक्षेत्र गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "535",
		local_body_name_en: "Chhatrakot Rural Municipality",
		local_body_name_np: "छत्रकोट गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "536",
		local_body_name_en: "Dhurkot Rural Municipality",
		local_body_name_np: "धुर्कोट गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "537",
		local_body_name_en: "Madane Rural Municipality",
		local_body_name_np: "मदाने गाउँपालिका"
	},
	{
		district_id: "52",
		local_body_id: "538",
		local_body_name_en: "Malika Rural Municipality",
		local_body_name_np: "मालिका गाउँपालिका"
	},
	{
		district_id: "53",
		local_body_id: "539",
		local_body_name_en: "Putha uttarganga Rural Municipality",
		local_body_name_np: "पुथा उत्तरगंगा गाउँपालिका"
	},
	{
		district_id: "53",
		local_body_id: "540",
		local_body_name_en: "Bhume Rural Municipality",
		local_body_name_np: "भूमे गाउँपालिका"
	},
	{
		district_id: "53",
		local_body_id: "541",
		local_body_name_en: "Sisne Rural Municipality",
		local_body_name_np: "सिस्ने गाउँपालिका"
	},
	{
		district_id: "54",
		local_body_id: "542",
		local_body_name_en: "Rolpa Municipality",
		local_body_name_np: "रोल्पा नगरपालिका"
	},
	{
		district_id: "54",
		local_body_id: "543",
		local_body_name_en: "Triveni Rural Municipality",
		local_body_name_np: "त्रिवेणी गाउँपालिका"
	},
	{
		district_id: "54",
		local_body_id: "544",
		local_body_name_en: "Paribartan Rural Municipality",
		local_body_name_np: "परिर्वतन गाउँपालिका"
	},
	{
		district_id: "54",
		local_body_id: "545",
		local_body_name_en: "Madi Rural Municipality",
		local_body_name_np: "माडि गाउँपालिका"
	},
	{
		district_id: "54",
		local_body_id: "546",
		local_body_name_en: "Runtigadhi Rural Municipality",
		local_body_name_np: "रुन्टीगढी गाउँपालिका"
	},
	{
		district_id: "54",
		local_body_id: "547",
		local_body_name_en: "Lungri Rural Municipality",
		local_body_name_np: "लुङ्ग्री गाउँपालिका"
	},
	{
		district_id: "54",
		local_body_id: "548",
		local_body_name_en: "Gangadev Rural Municipality",
		local_body_name_np: "गंगादेव गाउँपालिका"
	},
	{
		district_id: "54",
		local_body_id: "549",
		local_body_name_en: "Sunchhahari Rural Municipality",
		local_body_name_np: "सुनछहरी गाउँपालिका"
	},
	{
		district_id: "54",
		local_body_id: "550",
		local_body_name_en: "Sunilsmriti Rural Municipality",
		local_body_name_np: "सुनिलस्मृति गाउँपालिका"
	},
	{
		district_id: "54",
		local_body_id: "551",
		local_body_name_en: "Thabang Rural Municipality",
		local_body_name_np: "थबाङ गाउँपालिका"
	},
	{
		district_id: "55",
		local_body_id: "552",
		local_body_name_en: "Pyuthan Municipality",
		local_body_name_np: "प्युठान नगरपालिका "
	},
	{
		district_id: "55",
		local_body_id: "553",
		local_body_name_en: "Swargadwari Municipality",
		local_body_name_np: "स्वर्गद्वारी नगरपालिका"
	},
	{
		district_id: "55",
		local_body_id: "554",
		local_body_name_en: "Gaumukhi Rural Municipality",
		local_body_name_np: "गौमुखी गाउँपालिका"
	},
	{
		district_id: "55",
		local_body_id: "555",
		local_body_name_en: "Mandavi Rural Municipality",
		local_body_name_np: "माण्डवी गाउँपालिका"
	},
	{
		district_id: "55",
		local_body_id: "556",
		local_body_name_en: "Sarumarani Rural Municipality",
		local_body_name_np: "सरुमारानी गाउँपालिका"
	},
	{
		district_id: "55",
		local_body_id: "557",
		local_body_name_en: "Mallarani Rural Municipality",
		local_body_name_np: "मल्लरानी गाउँपालिका"
	},
	{
		district_id: "55",
		local_body_id: "558",
		local_body_name_en: "Naubahini Rural Municipality",
		local_body_name_np: "नौबहिनी गाउँपालिका"
	},
	{
		district_id: "55",
		local_body_id: "559",
		local_body_name_en: "Jhimruk Rural Municipality",
		local_body_name_np: "झिमरुक गाउँपालिका"
	},
	{
		district_id: "55",
		local_body_id: "560",
		local_body_name_en: "Airawati Rural Municipality",
		local_body_name_np: "ऐरावती गाउँपालिका"
	},
	{
		district_id: "56",
		local_body_id: "561",
		local_body_name_en: "Tulsipur Sub Metropolitan City",
		local_body_name_np: "तुल्सीपुर उपमहानगरपालिका"
	},
	{
		district_id: "56",
		local_body_id: "562",
		local_body_name_en: "Ghorahi Sub Metropolitan City",
		local_body_name_np: "घोराही उपमहानगरपालिका"
	},
	{
		district_id: "56",
		local_body_id: "563",
		local_body_name_en: "Lamahi Municipality",
		local_body_name_np: "लमही नगरपालिका"
	},
	{
		district_id: "56",
		local_body_id: "564",
		local_body_name_en: "Bangalachuli Rural Municipality",
		local_body_name_np: "बंगलाचुली गाउँपालिका"
	},
	{
		district_id: "56",
		local_body_id: "565",
		local_body_name_en: "Dangisharan Rural Municipality",
		local_body_name_np: "दंगीशरण गाउँपालिका"
	},
	{
		district_id: "56",
		local_body_id: "566",
		local_body_name_en: "Gadhawa Rural Municipality",
		local_body_name_np: "गढवा गाउँपालिका"
	},
	{
		district_id: "56",
		local_body_id: "567",
		local_body_name_en: "Rajpur Rural Municipality",
		local_body_name_np: "राजपुर गाउँपालिका"
	},
	{
		district_id: "56",
		local_body_id: "568",
		local_body_name_en: "Rapti Rural Municipality",
		local_body_name_np: "राप्‍ती गाउँपालिका"
	},
	{
		district_id: "56",
		local_body_id: "569",
		local_body_name_en: "Shantinagar Rural Municipality",
		local_body_name_np: "शान्तिनगर गाउँपालिका"
	},
	{
		district_id: "56",
		local_body_id: "570",
		local_body_name_en: "Babai Rural Municipality",
		local_body_name_np: "बबई गाउँपालिका"
	},
	{
		district_id: "57",
		local_body_id: "571",
		local_body_name_en: "Nepalgunj Sub Metropolitan City",
		local_body_name_np: "नेपालगंज उपमहानगरपालिका"
	},
	{
		district_id: "57",
		local_body_id: "572",
		local_body_name_en: "Kohalpur Municipality",
		local_body_name_np: "कोहलपुर नगरपालिका"
	},
	{
		district_id: "57",
		local_body_id: "573",
		local_body_name_en: "Narainapur Rural Municipality",
		local_body_name_np: "नरैनापुर गाउँपालिका"
	},
	{
		district_id: "57",
		local_body_id: "574",
		local_body_name_en: "Raptisonari Rural Municipality",
		local_body_name_np: "राप्‍तीसोनारी गाउँपालिका"
	},
	{
		district_id: "57",
		local_body_id: "575",
		local_body_name_en: "Baijanath Rural Municipality",
		local_body_name_np: "बैजनाथ गाउँपालिका"
	},
	{
		district_id: "57",
		local_body_id: "576",
		local_body_name_en: "Khajura Rural Municipality",
		local_body_name_np: "खजुरा गाउँपालिका"
	},
	{
		district_id: "57",
		local_body_id: "577",
		local_body_name_en: "Duduwa Rural Municipality",
		local_body_name_np: "डुडुवा गाउँपालिका"
	},
	{
		district_id: "57",
		local_body_id: "578",
		local_body_name_en: "Janaki Rural Municipality",
		local_body_name_np: "जानकी गाउँपालिका"
	},
	{
		district_id: "58",
		local_body_id: "579",
		local_body_name_en: "Gulariya Municipality",
		local_body_name_np: "गुलरिया नगरपालिका"
	},
	{
		district_id: "58",
		local_body_id: "580",
		local_body_name_en: "Madhuwan Municipality",
		local_body_name_np: "मधुवन नगरपालिका"
	},
	{
		district_id: "58",
		local_body_id: "581",
		local_body_name_en: "Rajapur Municipality",
		local_body_name_np: "राजापुर नगरपालिका"
	},
	{
		district_id: "58",
		local_body_id: "582",
		local_body_name_en: "Thakurbaba Municipality",
		local_body_name_np: "ठाकुरबाबा नगरपालिका"
	},
	{
		district_id: "58",
		local_body_id: "583",
		local_body_name_en: "Bansgadhi Municipality",
		local_body_name_np: "बाँसगढी नगरपालिका"
	},
	{
		district_id: "58",
		local_body_id: "584",
		local_body_name_en: "Barbardiya Municipality",
		local_body_name_np: "बारबर्दिया नगरपालिका"
	},
	{
		district_id: "58",
		local_body_id: "585",
		local_body_name_en: "Badhaiyatal Rural Municipality",
		local_body_name_np: "बढैयाताल गाउँपालिका"
	},
	{
		district_id: "58",
		local_body_id: "586",
		local_body_name_en: "Geruwa Rural Municipality",
		local_body_name_np: "गेरुवा गाउँपालिका"
	},
	{
		district_id: "59",
		local_body_id: "587",
		local_body_name_en: "Musikot Municipality",
		local_body_name_np: "मुसिकोट नगरपालिका"
	},
	{
		district_id: "59",
		local_body_id: "588",
		local_body_name_en: "Chaurjahari Municipality",
		local_body_name_np: "चौरजहारी नगरपालिका"
	},
	{
		district_id: "59",
		local_body_id: "589",
		local_body_name_en: "Aathbiskot Municipality",
		local_body_name_np: "आठबिसकोट नगरपालिका"
	},
	{
		district_id: "59",
		local_body_id: "590",
		local_body_name_en: "Banphikot Rural Municipality",
		local_body_name_np: "बाँफिकोट गाउँपालिका"
	},
	{
		district_id: "59",
		local_body_id: "591",
		local_body_name_en: "Triveni Rural Municipality",
		local_body_name_np: "त्रिवेणी गाउँपालिका"
	},
	{
		district_id: "59",
		local_body_id: "592",
		local_body_name_en: "Sanibheri Rural Municipality",
		local_body_name_np: "सानीभेरी गाउँपालिका"
	},
	{
		district_id: "60",
		local_body_id: "593",
		local_body_name_en: "Sharada Municipality",
		local_body_name_np: "शारदा नगरपालिका"
	},
	{
		district_id: "60",
		local_body_id: "594",
		local_body_name_en: "Bagchaur Municipality",
		local_body_name_np: "बागचौर नगरपालिका"
	},
	{
		district_id: "60",
		local_body_id: "595",
		local_body_name_en: "Bangad Kupinde Municipality",
		local_body_name_np: "बनगाड कुपिण्डे नगरपालिका"
	},
	{
		district_id: "60",
		local_body_id: "596",
		local_body_name_en: "Kalimati Rural Municipality",
		local_body_name_np: "कालीमाटी गाउँपालिका"
	},
	{
		district_id: "60",
		local_body_id: "597",
		local_body_name_en: "Triveni Rural Municipality",
		local_body_name_np: "त्रिवेणी गाउँपालिका"
	},
	{
		district_id: "60",
		local_body_id: "598",
		local_body_name_en: "Kapurkot Rural Municipality",
		local_body_name_np: "कपुरकोट गाउँपालिका"
	},
	{
		district_id: "60",
		local_body_id: "599",
		local_body_name_en: "Chhatreshwori Rural Municipality",
		local_body_name_np: "छत्रेश्‍वरी गाउँपालिका"
	},
	{
		district_id: "60",
		local_body_id: "600",
		local_body_name_en: "Siddha Kumakh Rural Municipality",
		local_body_name_np: "सिद्ध कुमाख गाउँपालिका"
	},
	{
		district_id: "60",
		local_body_id: "601",
		local_body_name_en: "Kumakh Rural Municipality",
		local_body_name_np: "कुमाख  गाउँपालिका"
	},
	{
		district_id: "60",
		local_body_id: "602",
		local_body_name_en: "Darma Rural Municipality",
		local_body_name_np: "दार्मा गाउँपालिका"
	},
	{
		district_id: "61",
		local_body_id: "603",
		local_body_name_en: "Thuli Bheri Municipality",
		local_body_name_np: "ठूली भेरी नगरपालिका"
	},
	{
		district_id: "61",
		local_body_id: "604",
		local_body_name_en: "Tripurasundari Municipality",
		local_body_name_np: "त्रिपुरासुन्दरी नगरपालिका"
	},
	{
		district_id: "61",
		local_body_id: "605",
		local_body_name_en: "Dolpo Buddha Rural Municipality",
		local_body_name_np: "डोल्पो बुद्ध गाउँपालिका"
	},
	{
		district_id: "61",
		local_body_id: "606",
		local_body_name_en: "She-Phoksundo Rural Municipality",
		local_body_name_np: "शे-फोक्सुण्डो गाउँपालिका"
	},
	{
		district_id: "61",
		local_body_id: "607",
		local_body_name_en: "Jagadulla Rural Municipality",
		local_body_name_np: "जगदुल्ला गाउँपालिका"
	},
	{
		district_id: "61",
		local_body_id: "608",
		local_body_name_en: "Mudkechula Rural Municipality",
		local_body_name_np: "मुड्केचुला गाउँपालिका"
	},
	{
		district_id: "61",
		local_body_id: "609",
		local_body_name_en: "Kaike Rural Municipality",
		local_body_name_np: "काईके गाउँपालिका"
	},
	{
		district_id: "61",
		local_body_id: "610",
		local_body_name_en: "Chharka Tangsong Rural Municipality",
		local_body_name_np: "छार्का ताङ्सोङ गाउँपालिका"
	},
	{
		district_id: "62",
		local_body_id: "611",
		local_body_name_en: "Chandannath Municipality",
		local_body_name_np: "चन्दननाथ नगरपालिका"
	},
	{
		district_id: "62",
		local_body_id: "612",
		local_body_name_en: "Kanakasundari Rural Municipality",
		local_body_name_np: "कनकासुन्दरी गाउँपालिका"
	},
	{
		district_id: "62",
		local_body_id: "613",
		local_body_name_en: "Sinja Rural Municipality",
		local_body_name_np: "सिंजा गाउँपालिका"
	},
	{
		district_id: "62",
		local_body_id: "614",
		local_body_name_en: "Hima Rural Municipality",
		local_body_name_np: "हिमा गाउँपालिका"
	},
	{
		district_id: "62",
		local_body_id: "615",
		local_body_name_en: "Tila Rural Municipality",
		local_body_name_np: "तिला गाउँपालिका"
	},
	{
		district_id: "62",
		local_body_id: "616",
		local_body_name_en: "Guthichaur Rural Municipality",
		local_body_name_np: "गुठीचौर गाउँपालिका"
	},
	{
		district_id: "62",
		local_body_id: "617",
		local_body_name_en: "Tatopani Rural Municipality",
		local_body_name_np: "तातोपानी गाउँपालिका"
	},
	{
		district_id: "62",
		local_body_id: "618",
		local_body_name_en: "Patarasi Rural Municipality",
		local_body_name_np: "पातारासी गाउँपालिका"
	},
	{
		district_id: "63",
		local_body_id: "619",
		local_body_name_en: "Chhayanath Rara Municipality",
		local_body_name_np: "छायाँनाथ रारा नगरपालिका"
	},
	{
		district_id: "63",
		local_body_id: "620",
		local_body_name_en: "Mugumkarmarong Rural Municipality",
		local_body_name_np: "मुगुमकार्मारोंग गाउँपालिका"
	},
	{
		district_id: "63",
		local_body_id: "621",
		local_body_name_en: "Soru Rural Municipality",
		local_body_name_np: "सोरु गाउँपालिका"
	},
	{
		district_id: "63",
		local_body_id: "622",
		local_body_name_en: "Khatyad Rural Municipality",
		local_body_name_np: "खत्याड गाउँपालिका"
	},
	{
		district_id: "64",
		local_body_id: "623",
		local_body_name_en: "Simkot Rural Municipality",
		local_body_name_np: "सिमकोट गाउँपालिका"
	},
	{
		district_id: "64",
		local_body_id: "624",
		local_body_name_en: "Namkha Rural Municipality",
		local_body_name_np: "नाम्खा गाउँपालिका"
	},
	{
		district_id: "64",
		local_body_id: "625",
		local_body_name_en: "Kharpunath Rural Municipality",
		local_body_name_np: "खार्पुनाथ गाउँपालिका"
	},
	{
		district_id: "64",
		local_body_id: "626",
		local_body_name_en: "Sarkegad Rural Municipality",
		local_body_name_np: "सर्केगाड गाउँपालिका"
	},
	{
		district_id: "64",
		local_body_id: "627",
		local_body_name_en: "Chankheli Rural Municipality",
		local_body_name_np: "चंखेली गाउँपालिका"
	},
	{
		district_id: "64",
		local_body_id: "628",
		local_body_name_en: "Adanchuli Rural Municipality",
		local_body_name_np: "अदानचुली गाउँपालिका"
	},
	{
		district_id: "64",
		local_body_id: "629",
		local_body_name_en: "Tanjakot Rural Municipality",
		local_body_name_np: "ताँजाकोट गाउँपालिका"
	},
	{
		district_id: "65",
		local_body_id: "630",
		local_body_name_en: "Khandachakra Municipality",
		local_body_name_np: "खाँडाचक्र नगरपालिका"
	},
	{
		district_id: "65",
		local_body_id: "631",
		local_body_name_en: "Raskot Municipality",
		local_body_name_np: "रास्कोट नगरपालिका"
	},
	{
		district_id: "65",
		local_body_id: "632",
		local_body_name_en: "Tilagupha Municipality",
		local_body_name_np: "तिलागुफा नगरपालिका"
	},
	{
		district_id: "65",
		local_body_id: "633",
		local_body_name_en: "Pachaljharana Rural Municipality",
		local_body_name_np: "पचालझरना गाउँपालिका"
	},
	{
		district_id: "65",
		local_body_id: "634",
		local_body_name_en: "Sanni Triveni Rural Municipality",
		local_body_name_np: "सान्‍नी त्रिवेणी गाउँपालिका"
	},
	{
		district_id: "65",
		local_body_id: "635",
		local_body_name_en: "Naraharinath Rural Municipality",
		local_body_name_np: "नरहरिनाथ गाउँपालिका"
	},
	{
		district_id: "65",
		local_body_id: "636",
		local_body_name_en: "Shubha Kalika Rural Municipality",
		local_body_name_np: "शुभ कालीका गाउँपालिका"
	},
	{
		district_id: "65",
		local_body_id: "637",
		local_body_name_en: "Mahawai Rural Municipality",
		local_body_name_np: "महावै गाउँपालिका"
	},
	{
		district_id: "65",
		local_body_id: "638",
		local_body_name_en: "Palata Rural Municipality",
		local_body_name_np: "पलाता गाउँपालिका"
	},
	{
		district_id: "66",
		local_body_id: "639",
		local_body_name_en: "Bheri Municipality",
		local_body_name_np: "भेरी नगरपालिका"
	},
	{
		district_id: "66",
		local_body_id: "640",
		local_body_name_en: "Chhedagad Municipality",
		local_body_name_np: "छेडागाड नगरपालिका"
	},
	{
		district_id: "66",
		local_body_id: "641",
		local_body_name_en: "Nalgaad Municipality",
		local_body_name_np: "नलगाड नगरपालिका"
	},
	{
		district_id: "66",
		local_body_id: "642",
		local_body_name_en: "Kushe Rural Municipality",
		local_body_name_np: "कुशे गाउँपालिका"
	},
	{
		district_id: "66",
		local_body_id: "643",
		local_body_name_en: "Junichaande Rural Municipality",
		local_body_name_np: "जुनीचाँदे गाउँपालिका"
	},
	{
		district_id: "66",
		local_body_id: "644",
		local_body_name_en: "Barekot Rural Municipality",
		local_body_name_np: "बारेकोट गाउँपालिका"
	},
	{
		district_id: "66",
		local_body_id: "645",
		local_body_name_en: "Shivalaya Rural Municipality",
		local_body_name_np: "शिवालय गाउँपालिका"
	},
	{
		district_id: "67",
		local_body_id: "646",
		local_body_name_en: "Narayan Municipality",
		local_body_name_np: "नारायण नगरपालिका"
	},
	{
		district_id: "67",
		local_body_id: "647",
		local_body_name_en: "Dullu Municipality",
		local_body_name_np: "दुल्लु नगरपालिका"
	},
	{
		district_id: "67",
		local_body_id: "648",
		local_body_name_en: "Chamunda Bindrasaini Municipality",
		local_body_name_np: "चामुण्डा बिन्द्रासैनी नगरपालिका"
	},
	{
		district_id: "67",
		local_body_id: "649",
		local_body_name_en: "Aathabis Municipality",
		local_body_name_np: "आठबीस नगरपालिका"
	},
	{
		district_id: "67",
		local_body_id: "650",
		local_body_name_en: "Bhagawatimai Rural Municipality",
		local_body_name_np: "भगवतीमाई गाउँपालिका"
	},
	{
		district_id: "67",
		local_body_id: "651",
		local_body_name_en: "Gurans Rural Municipality",
		local_body_name_np: "गुराँस गाउँपालिका"
	},
	{
		district_id: "67",
		local_body_id: "652",
		local_body_name_en: "Dungeshwor Rural Municipality",
		local_body_name_np: "डुङ्‌गेश्‍वरी गाउँपालिका"
	},
	{
		district_id: "67",
		local_body_id: "653",
		local_body_name_en: "Naumule Rural Municipality",
		local_body_name_np: "नौमुले गाउँपालिका"
	},
	{
		district_id: "67",
		local_body_id: "654",
		local_body_name_en: "Mahabu Rural Municipality",
		local_body_name_np: "महाबु गाउँपालिका"
	},
	{
		district_id: "67",
		local_body_id: "655",
		local_body_name_en: "Bhairabi Rural Municipality",
		local_body_name_np: "भैरबी गाउँपालिका"
	},
	{
		district_id: "67",
		local_body_id: "656",
		local_body_name_en: "Thatikandh Rural Municipality",
		local_body_name_np: "ठाटीकाँध गाउँपालिका"
	},
	{
		district_id: "68",
		local_body_id: "657",
		local_body_name_en: "Birendranagar Municipality",
		local_body_name_np: "बीरेन्द्रनगर नगरपालिका"
	},
	{
		district_id: "68",
		local_body_id: "658",
		local_body_name_en: "Bheriganga Municipality",
		local_body_name_np: "भेरीगंगा नगरपालिका"
	},
	{
		district_id: "68",
		local_body_id: "659",
		local_body_name_en: "Gurbhakot Municipality",
		local_body_name_np: "गुर्भाकोट नगरपालिका"
	},
	{
		district_id: "68",
		local_body_id: "660",
		local_body_name_en: "Panchapuri Municipality",
		local_body_name_np: "पञ्‍चपुरी नगरपालिका"
	},
	{
		district_id: "68",
		local_body_id: "661",
		local_body_name_en: "Lekbeshi Municipality",
		local_body_name_np: "लेकबेशी नगरपालिका"
	},
	{
		district_id: "68",
		local_body_id: "662",
		local_body_name_en: "Chaukune Rural Municipality",
		local_body_name_np: "चौकुने गाउँपालिका"
	},
	{
		district_id: "68",
		local_body_id: "663",
		local_body_name_en: "Barahatal Rural Municipality",
		local_body_name_np: "बराहताल गाउँपालिका"
	},
	{
		district_id: "68",
		local_body_id: "664",
		local_body_name_en: "Chingad Rural Municipality",
		local_body_name_np: "चिङ्गाड गाउँपालिका"
	},
	{
		district_id: "68",
		local_body_id: "665",
		local_body_name_en: "Simta Rural Municipality",
		local_body_name_np: "सिम्ता गाउँपालिका"
	},
	{
		district_id: "69",
		local_body_id: "666",
		local_body_name_en: "Badimalika Municipality",
		local_body_name_np: "बडीमालिका नगरपालिका"
	},
	{
		district_id: "69",
		local_body_id: "667",
		local_body_name_en: "Triveni Municipality",
		local_body_name_np: "त्रिवेणी नगरपालिका"
	},
	{
		district_id: "69",
		local_body_id: "668",
		local_body_name_en: "Budhiganga Municipality",
		local_body_name_np: "बुढीगंगा नगरपालिका"
	},
	{
		district_id: "69",
		local_body_id: "669",
		local_body_name_en: "Budhinanda Municipality",
		local_body_name_np: "बुढीनन्दा नगरपालिका"
	},
	{
		district_id: "69",
		local_body_id: "670",
		local_body_name_en: "Gaumul Rural Municipality",
		local_body_name_np: "गौमुल गाउँपालिका"
	},
	{
		district_id: "69",
		local_body_id: "671",
		local_body_name_en: "Jagannath Rural Municipality",
		local_body_name_np: "जगन्‍नाथ गाउँपालिका"
	},
	{
		district_id: "69",
		local_body_id: "672",
		local_body_name_en: "Swamikartik Khapar Rural Municipality",
		local_body_name_np: "स्वामिकार्तिक खापर गाउँपालिका"
	},
	{
		district_id: "69",
		local_body_id: "673",
		local_body_name_en: "Khaptad Chhededaha Rural Municipality",
		local_body_name_np: "खप्‍तड छेडेदह गाउँपालिका"
	},
	{
		district_id: "69",
		local_body_id: "674",
		local_body_name_en: "Himali Rural Municipality",
		local_body_name_np: "हिमाली गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "675",
		local_body_name_en: "Jayaprithvi Municipality",
		local_body_name_np: "जयपृथ्वी नगरपालिका"
	},
	{
		district_id: "70",
		local_body_id: "676",
		local_body_name_en: "Bungal Municipality",
		local_body_name_np: "बुंगल नगरपालिका"
	},
	{
		district_id: "70",
		local_body_id: "677",
		local_body_name_en: "Talkot Rural Municipality",
		local_body_name_np: "तलकोट गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "678",
		local_body_name_en: "Masta Rural Municipality",
		local_body_name_np: "मष्‍टा गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "679",
		local_body_name_en: "Khaptadchhanna Rural Municipality",
		local_body_name_np: "खप्‍तडछान्‍ना गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "680",
		local_body_name_en: "Thalara Rural Municipality",
		local_body_name_np: "थलारा गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "681",
		local_body_name_en: "Bitthadchir Rural Municipality",
		local_body_name_np: "वित्थडचिर गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "682",
		local_body_name_en: "Surma Rural Municipality",
		local_body_name_np: "सूर्मा गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "683",
		local_body_name_en: "Chhabispathivera Rural Municipality",
		local_body_name_np: "छबिसपाथीभेरा गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "684",
		local_body_name_en: "Durgathali Rural Municipality",
		local_body_name_np: "दुर्गाथली गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "685",
		local_body_name_en: "Kedarsyu Rural Municipality",
		local_body_name_np: "केदारस्यूँ गाउँपालिका"
	},
	{
		district_id: "70",
		local_body_id: "686",
		local_body_name_en: "Saipal Rural Municipality",
		local_body_name_np: "साइपाल गाउँपालिका"
	},
	{
		district_id: "71",
		local_body_id: "687",
		local_body_name_en: "Dipayal Silgadhi Municipality",
		local_body_name_np: "दिपायल सिलगढी नगरपालिका"
	},
	{
		district_id: "71",
		local_body_id: "688",
		local_body_name_en: "Shikhar Municipality",
		local_body_name_np: "शिखर नगरपालिका"
	},
	{
		district_id: "71",
		local_body_id: "689",
		local_body_name_en: "Purbichauki Rural Municipality",
		local_body_name_np: "पूर्वीचौकी गाउँपालिका"
	},
	{
		district_id: "71",
		local_body_id: "690",
		local_body_name_en: "Badikedar Rural Municipality",
		local_body_name_np: "बडिकेदार गाउँपालिका"
	},
	{
		district_id: "71",
		local_body_id: "691",
		local_body_name_en: "Jorayal Rural Municipality ",
		local_body_name_np: "जोरायल गाउँपालिका"
	},
	{
		district_id: "71",
		local_body_id: "692",
		local_body_name_en: "Sayal Rural Municipality",
		local_body_name_np: "सायल गाउँपालिका"
	},
	{
		district_id: "71",
		local_body_id: "693",
		local_body_name_en: "Aadarsha Rural Municipality",
		local_body_name_np: "आदर्श गाउँपालिका"
	},
	{
		district_id: "71",
		local_body_id: "694",
		local_body_name_en: "K.I. Singh Rural Municipality",
		local_body_name_np: "के.आई.सिंह गाउँपालिका"
	},
	{
		district_id: "71",
		local_body_id: "695",
		local_body_name_en: "Bogatan Phudsil Rural Municipality",
		local_body_name_np: "बोगटान फुड्‌सिल गाउँपालिका"
	},
	{
		district_id: "72",
		local_body_id: "696",
		local_body_name_en: "Mangalsen Municipality",
		local_body_name_np: "मंगलसेन नगरपालिका"
	},
	{
		district_id: "72",
		local_body_id: "697",
		local_body_name_en: "Kamalbazar Municipality",
		local_body_name_np: "कमलबजार नगरपालिका"
	},
	{
		district_id: "72",
		local_body_id: "698",
		local_body_name_en: "Sanfebagar Municipality",
		local_body_name_np: "साँफेबगर नगरपालिका"
	},
	{
		district_id: "72",
		local_body_id: "699",
		local_body_name_en: "Panchadewal Binayak Municipality",
		local_body_name_np: "पंचदेवल विनायक नगरपालिका"
	},
	{
		district_id: "72",
		local_body_id: "700",
		local_body_name_en: "Chaurpati Rural Municipality",
		local_body_name_np: "चौरपाटी गाउँपालिका"
	},
	{
		district_id: "72",
		local_body_id: "701",
		local_body_name_en: "Mellekh Rural Municipality",
		local_body_name_np: "मेल्लेख गाउँपालिका"
	},
	{
		district_id: "72",
		local_body_id: "702",
		local_body_name_en: "Bannigadhi Jaygadh Rural Municipality",
		local_body_name_np: "बान्‍नीगढी जयगढ गाउँपालिका"
	},
	{
		district_id: "72",
		local_body_id: "703",
		local_body_name_en: "Ramaroshan Rural Municipality",
		local_body_name_np: "रामारोशन गाउँपालिका"
	},
	{
		district_id: "72",
		local_body_id: "704",
		local_body_name_en: "Dhakari Rural Municipality",
		local_body_name_np: "ढकारी गाउँपालिका"
	},
	{
		district_id: "72",
		local_body_id: "705",
		local_body_name_en: "Turmakhand Rural Municipality",
		local_body_name_np: "तुर्माखाँद गाउँपालिका"
	},
	{
		district_id: "73",
		local_body_id: "706",
		local_body_name_en: "Mahakali Municipality",
		local_body_name_np: "महाकाली नगरपालिका"
	},
	{
		district_id: "73",
		local_body_id: "707",
		local_body_name_en: "Shailyashikhar Municipality",
		local_body_name_np: "शैल्यशिखर नगरपालिका"
	},
	{
		district_id: "73",
		local_body_id: "708",
		local_body_name_en: "Malikarjun Rural Municipality",
		local_body_name_np: "मालिकार्जुन गाउँपालिका"
	},
	{
		district_id: "73",
		local_body_id: "709",
		local_body_name_en: "Apihimal Rural Municipality",
		local_body_name_np: "अपिहिमाल गाउँपालिका"
	},
	{
		district_id: "73",
		local_body_id: "710",
		local_body_name_en: "Duhun Rural Municipality",
		local_body_name_np: "दुहुँ गाउँपालिका"
	},
	{
		district_id: "73",
		local_body_id: "711",
		local_body_name_en: "Naugad Rural Municipality",
		local_body_name_np: "नौगाड गाउँपालिका"
	},
	{
		district_id: "73",
		local_body_id: "712",
		local_body_name_en: "Marma Rural Municipality",
		local_body_name_np: "मार्मा गाउँपालिका"
	},
	{
		district_id: "73",
		local_body_id: "713",
		local_body_name_en: "Lekam Rural Municipality",
		local_body_name_np: "लेकम गाउँपालिका"
	},
	{
		district_id: "73",
		local_body_id: "714",
		local_body_name_en: "Vyans Rural Municipality",
		local_body_name_np: "व्याँस गाउँपालिका"
	},
	{
		district_id: "74",
		local_body_id: "715",
		local_body_name_en: "Dasharathchand Municipality",
		local_body_name_np: "दशरथचन्द नगरपालिका"
	},
	{
		district_id: "74",
		local_body_id: "716",
		local_body_name_en: "Patan Municipality",
		local_body_name_np: "पाटन नगरपालिका"
	},
	{
		district_id: "74",
		local_body_id: "717",
		local_body_name_en: "Melauli Municipality",
		local_body_name_np: "मेलौली नगरपालिका"
	},
	{
		district_id: "74",
		local_body_id: "718",
		local_body_name_en: "Purchaudi Municipality",
		local_body_name_np: "पुर्चौडी नगरपालिका"
	},
	{
		district_id: "74",
		local_body_id: "719",
		local_body_name_en: "Sunarya Rural Municipality",
		local_body_name_np: "सुर्नया गाउँपालिका"
	},
	{
		district_id: "74",
		local_body_id: "720",
		local_body_name_en: "Sigas Rural Municipality",
		local_body_name_np: "सिगास गाउँपालिका"
	},
	{
		district_id: "74",
		local_body_id: "721",
		local_body_name_en: "Shivanath Rural Municipality",
		local_body_name_np: "शिवनाथ गाउँपालिका"
	},
	{
		district_id: "74",
		local_body_id: "722",
		local_body_name_en: "Pancheshwor Rural Municipality",
		local_body_name_np: "पन्चेश्‍वर गाउँपालिका"
	},
	{
		district_id: "74",
		local_body_id: "723",
		local_body_name_en: "Dogdakedar Rural Municipality",
		local_body_name_np: "दोगडाकेदार गाउँपालिका"
	},
	{
		district_id: "74",
		local_body_id: "724",
		local_body_name_en: "Deelasaini Rural Municipality",
		local_body_name_np: "डीलासैनी गाउँपालिका"
	},
	{
		district_id: "75",
		local_body_id: "725",
		local_body_name_en: "Amargadhi Municipality",
		local_body_name_np: "अमरगढी नगरपालिका"
	},
	{
		district_id: "75",
		local_body_id: "726",
		local_body_name_en: "Parshuram Municipality",
		local_body_name_np: "परशुराम नगरपालिका"
	},
	{
		district_id: "75",
		local_body_id: "727",
		local_body_name_en: "Aalital Rural Municipality",
		local_body_name_np: "आलिताल गाउँपालिका"
	},
	{
		district_id: "75",
		local_body_id: "728",
		local_body_name_en: "Bhageshwor Rural Municipality",
		local_body_name_np: "भागेश्‍वर गाउँपालिका"
	},
	{
		district_id: "75",
		local_body_id: "729",
		local_body_name_en: "Navadurga Rural Municipality",
		local_body_name_np: "नवदुर्गा गाउँपालिका"
	},
	{
		district_id: "75",
		local_body_id: "730",
		local_body_name_en: "Ajayameru Rural Municipality",
		local_body_name_np: "अजयमेरु गाउँपालिका"
	},
	{
		district_id: "75",
		local_body_id: "731",
		local_body_name_en: "Ganyapadhura Rural Municipality",
		local_body_name_np: "गन्यापधुरा गाउँपालिका"
	},
	{
		district_id: "76",
		local_body_id: "732",
		local_body_name_en: "Bheemdatta Municipality",
		local_body_name_np: "भीमदत्त नगरपालिका"
	},
	{
		district_id: "76",
		local_body_id: "733",
		local_body_name_en: "Punarbas Municipality",
		local_body_name_np: "पुनर्वास नगरपालिका"
	},
	{
		district_id: "76",
		local_body_id: "734",
		local_body_name_en: "Bedkot Municipality",
		local_body_name_np: "बेदकोट नगरपालिका"
	},
	{
		district_id: "76",
		local_body_id: "735",
		local_body_name_en: "Mahakali Municipality",
		local_body_name_np: "माहाकाली नगरपालिका"
	},
	{
		district_id: "76",
		local_body_id: "736",
		local_body_name_en: "Shuklaphanta Municipality",
		local_body_name_np: "शुक्लाफाँटा नगरपालिका"
	},
	{
		district_id: "76",
		local_body_id: "737",
		local_body_name_en: "Belauri Municipality",
		local_body_name_np: "बेलौरी नगरपालिका"
	},
	{
		district_id: "76",
		local_body_id: "738",
		local_body_name_en: "Krishnapur Municipality",
		local_body_name_np: "कृष्णपुर नगरपालिका"
	},
	{
		district_id: "76",
		local_body_id: "739",
		local_body_name_en: "Beldandi Rural Municipality",
		local_body_name_np: "बेलडाँडी गाउँपालिका"
	},
	{
		district_id: "76",
		local_body_id: "740",
		local_body_name_en: "Laljhadi Rural Municipality",
		local_body_name_np: "लालझाडी गाउँपालिका"
	},
	{
		district_id: "77",
		local_body_id: "741",
		local_body_name_en: "Dhangadhi Sub Metropolitan City",
		local_body_name_np: "धनगढी उपमहानगरपालिका"
	},
	{
		district_id: "77",
		local_body_id: "742",
		local_body_name_en: "Tikapur Municipality",
		local_body_name_np: "टिकापुर नगरपालिका"
	},
	{
		district_id: "77",
		local_body_id: "743",
		local_body_name_en: "Ghodaghodi Municipality",
		local_body_name_np: "घोडाघोडी नगरपालिका"
	},
	{
		district_id: "77",
		local_body_id: "744",
		local_body_name_en: "Lamkichuha Municipality",
		local_body_name_np: "लम्कीचुहा नगरपालिका"
	},
	{
		district_id: "77",
		local_body_id: "745",
		local_body_name_en: "Bhajani Municipality",
		local_body_name_np: "भजनी नगरपालिका"
	},
	{
		district_id: "77",
		local_body_id: "746",
		local_body_name_en: "Godawari Municipality",
		local_body_name_np: "गोदावरी नगरपालिका"
	},
	{
		district_id: "77",
		local_body_id: "747",
		local_body_name_en: "Gauriganga Municipality",
		local_body_name_np: "गौरीगंगा नगरपालिका"
	},
	{
		district_id: "77",
		local_body_id: "748",
		local_body_name_en: "Janaki Rural Municipality",
		local_body_name_np: "जानकी गाउँपालिका"
	},
	{
		district_id: "77",
		local_body_id: "749",
		local_body_name_en: "Bardagoriya Rural Municipality",
		local_body_name_np: "बर्दगोरिया गाउँपालिका"
	},
	{
		district_id: "77",
		local_body_id: "750",
		local_body_name_en: "Mohanyal Rural Municipality",
		local_body_name_np: "मोहन्याल गाउँपालिका"
	},
	{
		district_id: "77",
		local_body_id: "751",
		local_body_name_en: "Kailari Rural Municipality",
		local_body_name_np: "कैलारी गाउँपालिका"
	},
	{
		district_id: "77",
		local_body_id: "752",
		local_body_name_en: "Joshipur Rural Municipality ",
		local_body_name_np: "जोशीपुर गाउँपालिका"
	},
	{
		district_id: "77",
		local_body_id: "753",
		local_body_name_en: "Chure Rural Municipality",
		local_body_name_np: "चुरे गाउँपालिका"
	}
];

const MunVdcList = ({ selectedDistrictId, selectedProvinceId }) => {
    const [selectedMunVdc, setSelectedMunVdc] = useState("");
    const [filteredMunVdc, setFilteredMunVdc] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (selectedDistrictId) {
            const filtered = munvdcs.filter(munvdc => munvdc.district_id === String(selectedDistrictId));
            setFilteredMunVdc(filtered);
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
            setSelectedMunVdc("");
        }
    }, [selectedDistrictId]);
    useEffect(() => {
        if (selectedProvinceId != 0) {
            setIsDisabled(true);
            setSelectedMunVdc("");
        }
    }, [selectedProvinceId]);
    const handleMunVdcChange = (event) => {
        const selectedMunVdcName = event.target.value;
        setSelectedMunVdc(selectedMunVdcName);
    };
    return (React.createElement("div", null,
        React.createElement("select", { disabled: isDisabled, value: selectedMunVdc, onChange: handleMunVdcChange },
            React.createElement("option", { value: "" }, "Mun/Vdc"),
            filteredMunVdc.map((munvdc) => (React.createElement("option", { key: munvdc.local_body_id, value: munvdc.local_body_name_en }, munvdc.local_body_name_en))))));
};

export { CountryList, DistrictList, MunVdcList, ProvinceList };
//# sourceMappingURL=index.js.map
