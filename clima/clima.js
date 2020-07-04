const axios = require('axios');


const getClima = async(lat, lng) => {

    const apiKey = "38a43fb7661865faf8eeff92117b4956"

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ apiKey }&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}