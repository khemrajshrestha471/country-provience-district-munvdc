'use strict';

var React = require('react');

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

const DistrictList = ({ selectedProvinceId }) => {
    const [selectedDistrict, setSelectedDistrict] = React.useState("");
    const [filteredDistricts, setFilteredDistricts] = React.useState([]);
    const [isDisabled, setIsDisabled] = React.useState(true);
    React.useEffect(() => {
        if (selectedProvinceId) {
            const filtered = districts.filter(district => district.province_id === String(selectedProvinceId));
            setFilteredDistricts(filtered);
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
            setSelectedDistrict("");
        }
    }, [selectedProvinceId]);
    const handleDistrictChange = (event) => {
        const selectedDistrictName = event.target.value;
        setSelectedDistrict(selectedDistrictName);
    };
    return (React.createElement("div", null,
        React.createElement("select", { disabled: isDisabled, value: selectedDistrict, onChange: handleDistrictChange },
            React.createElement("option", { value: "" }, "District"),
            filteredDistricts.map((district) => (React.createElement("option", { key: district.district_id, value: district.district_name_en }, district.district_name_en))))));
};

// import React from "react"
// const ProvinceList = () => {
//     return (
//         <>
//         <h1>This is ProvinceList</h1>
//         </>
//     )
// }
// export default ProvinceList
// "use client";
// import React, { useState, useEffect } from 'react';
// interface Props {
//     countryName: string;
// }
// const ProvinceList: React.FC<Props> = ({ countryName }) => {
//     const [selectedProvince, setSelectedProvince] = useState<string>("");
//     const [disabled, setDisabled] = useState<boolean>(countryName !== "Nepal");
//     useEffect(() => {
//         setSelectedProvince("");
//         setDisabled(countryName !== "Nepal");
//     }, [countryName]);
//     const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedProvince(event.target.value);
//     };
//     return (
//         <>
//             <select value={selectedProvince} disabled={disabled} onChange={handleProvinceChange}>
//                 <option value="">Province</option>
//                 <option value="Koshi">Koshi</option>
//                 <option value="Provience 2">Province 2</option>
//                 <option value="Bagmati">Bagmati</option>
//             </select>
//         </>
//     );
// };
// export default ProvinceList;
// "use client";
// import React, { useState } from 'react';
// import provinces from "../../assets/province.json";
// interface Province {
//     id: number; 
//     province_name_en: string;
// }
// const ProvinceList = () => {
//     const [selectedProvince, setSelectedProvince] = useState<string>("");
//     const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedProvince(event.target.value);
//     };
//     return (
//         <div>
//             <select onChange={handleProvinceChange}>
//                 <option value="">Province</option>
//                 {provinces.map((province: Province) => (
//                     <option key={province.id} value={province.province_name_en}>
//                         {province.province_name_en}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };
// export default ProvinceList;
const ProvinceList = ({ selectedCountry }) => {
    const [selectedProvinceId, setSelectedProvinceId] = React.useState();
    const [selectedProvince, setSelectedProvince] = React.useState("");
    const [isDisabled, setIsDisabled] = React.useState(true);
    React.useEffect(() => {
        if (selectedCountry === "Nepal") {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
            setSelectedProvince("");
            setSelectedProvinceId(0);
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
            provinces.map((province) => (React.createElement("option", { key: province.id, value: province.province_name_en }, province.province_name_en)))),
        React.createElement(DistrictList, { selectedProvinceId: selectedProvinceId })));
};

// import React from 'react';
// import countries from "../../assets/countries.json";
// import ProvinceList from '../ProvienceList/ProvienceList';
// interface Country {
//     country_name: string; 
// }
// const CountryList = () => {
//     const [selectedCountry, setSelectedCountry] = React.useState<string>("");
//     const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedCountry(event.target.value);
//     };
//     return (
//         <div>
//             <select onChange={handleCountryChange}>
//                 <option value="">Country</option>
//                 {countries.map((country: Country) => (
//                     <option key={country.country_name} value={country.country_name}>
//                         {country.country_name}
//                     </option>
//                 ))}
//             </select>
//             <ProvinceList countryName={selectedCountry} />
//         </div>
//     );
// };
// export default CountryList;
// "use client";
// import React, { useState } from 'react';
// import countries from "../../assets/countries.json";
// interface Country {
//     country_name: string; 
// }
// const CountryList = () => {
//     const [selectedCountry, setSelectedCountry] = useState<string>("");
//     const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedCountry(event.target.value);
//     };
//     return (
//         <div>
//             <select onChange={handleCountryChange}>
//                 <option value="">Country</option>
//                 {countries.map((country: Country) => (
//                     <option key={country.country_name} value={country.country_name}>
//                         {country.country_name}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };
// export default CountryList;
const CountryList = () => {
    const [selectedCountry, setSelectedCountry] = React.useState("");
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    return (React.createElement("div", null,
        React.createElement("select", { onChange: handleCountryChange, value: selectedCountry },
            React.createElement("option", { value: "" }, "Country"),
            countries.map((country) => (React.createElement("option", { key: country.country_name, value: country.country_name }, country.country_name)))),
        React.createElement(ProvinceList, { selectedCountry: selectedCountry })));
};

exports.CountryList = CountryList;
exports.DistrictList = DistrictList;
exports.ProvienceList = ProvinceList;
//# sourceMappingURL=index.js.map
