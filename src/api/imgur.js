const { CLIENT_ID } = require('../secrets.json');
const axios = require('axios');
const FormData = require('form-data');
let data = new FormData();

const IMGUR_URL = 'https://api.imgur.com/3/';

let config = {
    method: 'get',
    url: `${IMGUR_URL}`,
    headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
    },
    data: data,
};

export const getImages = async (apiCall) => {
    config.url = `${IMGUR_URL}${apiCall}`;
    console.log('config.url: ', config.url);

    try {
        return ({ data } = await axios.get(config.url, config));
    } catch (err) {
        console.log('Error in imgur getImages response: :', err);
    }
};

export const getUser = async (apiCall) => {
    config.url = `${IMGUR_URL}${apiCall}`;
    console.log('config.url: ', config.url);

    try {
        return ({ data } = await axios.get(config.url, config));
    } catch (err) {
        console.log('Error in imgur getImages response: :', err);
    }
};
