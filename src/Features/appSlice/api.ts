import axios from "axios";

function getCountryApi() {
  const url = "https://restcountries.com/v3.1/all";

  return fetch(url);
}

export const getCountryList = async () => {
  const response = await getCountryApi();
  const data = await response.json();
  const formattedCountries = data.map((country: any) => ({
    alpha2Code: country.cca2,
    name: country.name.common,
  }));

  return formattedCountries;
};
