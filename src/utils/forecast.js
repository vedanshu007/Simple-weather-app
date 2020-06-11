const request = require('request')


const forecast = (lat, lon, callback) =>{
    
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&exclude=hourly,daily&appid=83214f3c16dea982eca35fe040ec7b2c'
    request({url: url, json: true}, (error,response) =>{
        if(error){
                    callback('unable to connect to server', undefined)
                }
    else if(response.body.message){
                    callback('location not found', undefined)
            
        }else{
                    callback(undefined, {
                        temp: response.body.current.temp - 273,
                        forecast: response.body.current.weather[0].description,
                        humidity: response.body.current.humidity,
                        windSpeed: response.body.current.wind_speed,
                        timeZone: response.body.timezone,
                        pressure: response.body.current.pressure
                        


                    })
                }

    })
}

module.exports = forecast
 







