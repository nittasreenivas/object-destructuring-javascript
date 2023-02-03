const item = [
  {
    name: "Pakistan",
    topLevelDomain: [".pk"],
    alpha2Code: "PK",
    alpha3Code: "PAK",
    callingCodes: ["92"],
    capital: "Islamabad",
    altSpellings: [
      "PK",
      "Pākistān",
      "Islamic Republic of Pakistan",
      "Islāmī Jumhūriya'eh Pākistān"
    ],
    subregion: "Southern Asia",
    region: "Asia",
    population: 220892331,
    latlng: [30.0, 70.0],
    demonym: "Pakistani",
    area: 881912.0,
    gini: 31.6,
    timezones: ["UTC+05:00"],
    borders: ["AFG", "CHN", "IND", "IRN"],
    nativeName: "Pakistan",
    numericCode: "586",
    flags: {
      svg: "https://flagcdn.com/pk.svg",
      png: "https://flagcdn.com/w320/pk.png"
    },
    currencies: [
      {
        code: "PKR",
        name: "Pakistani rupee",
        symbol: "₨"
      }
    ],
    languages: [
      {
        iso639_1: "ur",
        iso639_2: "urd",
        name: "Urdu",
        nativeName: "اردو"
      },
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English"
      }
    ],
    translations: {
      br: "Pakistan",
      pt: "Paquistão",
      nl: "Pakistan",
      hr: "Pakistan",
      fa: "پاکستان",
      de: "Pakistan",
      es: "Pakistán",
      fr: "Pakistan",
      ja: "パキスタン",
      it: "Pakistan",
      hu: "Pakisztán"
    },
    flag: "https://flagcdn.com/pk.svg",
    regionalBlocs: [
      {
        acronym: "SAARC",
        name: "South Asian Association for Regional Cooperation"
      }
    ],
    cioc: "PAK",
    independent: true
  }
];

console.log("item:", item);
const {
  name,
  alpha2Code,
  callingCodes,
  altSpellings,
  borders,
  currencies,
  languages,
  translations
} = item[0];
console.log(name);
console.log(alpha2Code);
console.log(callingCodes[0]);
console.log(altSpellings[0]);
console.log(altSpellings[1]);
console.log(altSpellings[2]);
console.log(altSpellings[3]);
console.log(borders);
console.log(borders[0]);
console.log(borders[1]);
console.log(borders[2]);
console.log(borders[3]);
console.log(currencies);
console.log(currencies[0].code);
console.log(currencies[0].name);
console.log(currencies[0].symbol);
console.log(languages);
console.log(languages[0].iso639_1);
console.log(languages[1].nativeName);
console.log(translations);
console.log(translations.br);
console.log(translations.fa);
