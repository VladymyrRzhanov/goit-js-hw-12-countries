const BASE_URL = 'https://restcountries.eu/rest/v2';

const fetchCountries = async searchQuery => {
    const responsive = await fetch(`${BASE_URL}/name/${searchQuery}`);
    return responsive.json();
}

export default {fetchCountries}