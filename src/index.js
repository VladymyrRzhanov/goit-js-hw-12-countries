import debounce from 'lodash.debounce';
import callError from "./js/error";
import countryListTpl from "./templates/country-list.hbs";
import countryCardTpl from "./templates/country-card.hbs";
import API from "./js/fetchCountries";
import getRefs from "./js/refs";
import './sass/main.scss';

const refs = getRefs();

const renderCountry = async (country) => {
    if (country.length >= 2 && country.length <= 10) {
        refs.outputCountry.innerHTML = await countryListTpl(country);
        
    } else if (country.length === 1) {

        refs.outputCountry.innerHTML = await countryCardTpl(...country);
        refs.inputCountry.value = '';
    } else {
        callError();
    };
};


function searchCountry(e) {
    refs.outputCountry.innerHTML = '';
    this.value = this.value.replace(/[^\[A-Za-zА]/g, '');
    const searchQuery = e.target.value;
    if(searchQuery.length) {
        API.fetchCountries(searchQuery).then(renderCountry);

    };
};

refs.inputCountry.addEventListener('input', debounce(searchCountry, 500));