//location to geolocation
const request = require('request')

const geoloc = (address, callback) =>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmVkYW5zaHUwNyIsImEiOiJja2I1Nnp3cmMwbGYzMnFteno4NGt1N2FjIn0.JNovCk1kC3moa0TgHjb_rQ&limit=1'
    request({url: url, json: true}, (error, response) =>{
        if(error){
            callback('unable to connect to server', undefined)
        }
        else if(response.body.features.length === 0){
            callback('no location found! search another location', undefined)

        }
        else{
            callback(undefined, {
                    lat: response.body.features[0].center[1],
                    lon: response.body.features[0].center[0],
                    loc: response.body.features[0].place_name
            })

        }

    })

}
module.exports = geoloc