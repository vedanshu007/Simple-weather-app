const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#message-1')
const msgTwo = document.querySelector('#message-2')
const msgThree = document.querySelector('#message-3')
const msgFour = document.querySelector('#message-4')
const msgFive = document.querySelector('#message-5')
const msgSix = document.querySelector('#message-6')

const msgOne1 = document.querySelector('#message-11')
const msgTwo2 = document.querySelector('#message-12')
const msgThree3 = document.querySelector('#message-13')
const msgFour4 = document.querySelector('#message-14')
const msgFive5 = document.querySelector('#message-15')
const msgSix6 = document.querySelector('#message-16')


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

                address1 = x.lon+','+x.lat

    fetch('/weather?address=' + address1).then((response) =>{
                    response.json().then((data) =>{
                        if(data.error){
                            msgOne.textContent = data.error
                        }
                        msgOne1.textContent = data.Temp
                        msgTwo2.textContent = data.Forecast
                        msgThree3.textContent = data.Humidity
                        msgFour4.textContent = data.Pressure
                        msgFive5.textContent = data.WindSpeed
                        msgSix6.textContent = data.TimeZone
                    })
                })
                
        

}