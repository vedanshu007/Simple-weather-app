const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#message-1')
const msgTwo = document.querySelector('#message-2')
const msgThree = document.querySelector('#message-3')
const msgFour = document.querySelector('#message-4')
const msgFive = document.querySelector('#message-5')
const msgSix = document.querySelector('#message-6')


//button click event

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const location = search.value
    console.log(location)

    fetch('/weather?address=' + location).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            msgOne.textContent = data.error
        }
        msgOne.textContent = data.Temp
        msgTwo.textContent = data.Forecast
        msgThree.textContent = data.Humidity
        msgFour.textContent = data.Pressure
        msgFive.textContent = data.WindSpeed
        msgSix.textContent = data.TimeZone
        search.value = null
    })
})

})


var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        
    } else {
        msgOne.textContent = "Geolocation not supported by browser"
    }
}


function showPosition(position) {
    const x = {lat: position.coords.latitude ,
                lon: position.coords.longitude} 
                console.log(x)

    fetch('/weather2?lat=' + x.lat + '&lon=' + x.lon).then((response) =>{
                    response.json().then((data) =>{
                        if(data.error){
                            msgOne.textContent = data.error
                        }
                        msgOne.textContent = data.Temp
                        msgTwo.textContent = data.Forecast
                        msgThree.textContent = data.Humidity
                        msgFour.textContent = data.Pressure
                        msgFive.textContent = data.WindSpeed
                        msgSix.textContent = data.TimeZone
                    })
                })
                
        

}