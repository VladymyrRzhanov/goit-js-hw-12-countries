const debounce = require('lodash.debounce');
import countryList from "./templates/country-list.hbs";
import countryCard from "./templates/country-card.hbs";


const inputCountry = document.querySelector('[data-country]');
const outputCountry = document.querySelector('[data-output]');

const fetchCountries = searchQuery => fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(responsive => responsive.json()).then(country => renderCountry(country));


const renderCountry = (country) => {
    if (country.length > 2 && country.length < 10) {
        outputCountry.innerHTML = countryList(country);
        
    } else if (country.length === 1) {
        outputCountry.innerHTML = countryCard(...country);

    } else {
        outputCountry.innerHTML = 'wrong';
    };
};


const searchCountry = e => {
    outputCountry.innerHTML = '';
    const searchQuery = e.target.value;
    if(searchQuery.length) {
        fetchCountries(searchQuery);
    };
};

inputCountry.addEventListener('input', debounce(searchCountry,500));