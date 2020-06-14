const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geoloc = require('./utils/geoloc')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000


const publicDir = path.join(__dirname, '../public')
const ViewsDir = path.join(__dirname, '../templates/views')
const PartialDir = path.join(__dirname, '../templates/partials')


app.use(express.static(publicDir))

app.set('view engine', 'hbs')
app.set('views', ViewsDir)
hbs.registerPartials(PartialDir)

app.get('', (req, res) =>{
    res.render('index', {
        name: "Vedanshu Sharma"
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        name: "Vedanshu Sharma"
    })
})
app.get('/aboutus', (req, res) =>{
    res.render('aboutus', {
        name: "Vedanshu Sharma"
    })
})

app.get('/weather', (req,res) =>{
    if(!req.query.address){
        return res.send({ 
            error: "Please provide address"
        })
    }
     
    geoloc(req.query.address, (error, {lat , lon, loc} = {}) =>{
       
        if(error){
            return res.send({error})
        }
        forecast(lat, lon, (error,data ) =>{ 
            if(error){
                return res.send({error})
            }


            res.send(
                {
                    Temp: 'Right now in '+ loc +" it's "+ data.temp.toFixed(2) + " degree celcius.",
                    Humidity: 'Humidity: '+   data.humidity + ' %' ,
                    Forecast: 'Forecast: '+ data.forecast  ,
                    WindSpeed: 'Wind Speed: '+ data.windSpeed + ' Km/h' ,
                    Pressure: 'Pressure: '+ data.pressure + ' mBar',
                    TimeZone: 'Time-zone: '+ data.timeZone
                    
                }
            )
        })

    })

    // res.send({
    //     forcast: 'forcast',
    //     address: req.query.address})
})


app.get('*', (req, res) =>{
    res.send('error 404 page not found')
})




app.listen(port, () =>{
    console.log('listening to port' + port)
})