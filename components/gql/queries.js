import  {gql } from 'apollo-boost';


export const globalCovidData =( gql`
 {
    globalTotal {
        affectedCountries
        tests
        cases
        todayCases
        deaths
        todayDeaths
        recovered
        active
        critical
        casesPerOneMillion
        deathsPerOneMillion
        testsPerOneMillion
        updated
    }
  }
`)

export const countriesdata = gql`
query byCountry($country: String!) {
  country(name: $country) {
    country
    countryInfo {
      _id
      lat
      long
      flag
      iso2
      iso3
    }
    continent
    result {
      tests
      cases
      todayCases
      deaths
      todayDeaths
      recovered
      active
      critical
      casesPerOneMillion
      deathsPerOneMillion
      testsPerOneMillion
      updated
    }
  }
}
`;