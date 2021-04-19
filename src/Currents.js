import axios from 'axios';

const currents = axios.create({
    baseUrl: 'https://api.currentsapi.services/v1/search',
});

export default currents;