const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6ebb80490973f75a7905780b766b98c8&query=' + latitude + ',' + longitude
    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.location.region + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.humidity + '% chance of rain.')
        }
    })
}

module.exports = forecast
