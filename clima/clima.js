/**
 * trabajando con el clima
 */

const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1967c14d3d80b80b2a5777b19ac82da6&units=metric`);

    return resp.data.main
}

module.exports = {
    getClima
}