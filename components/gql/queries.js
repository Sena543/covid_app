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
  query {
    countries {
      country
      countryInfo {
        flag
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