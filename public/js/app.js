

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#message-1')
const msgTwo = document.querySelector('#message-2')
const msgThree = document.querySelector('#message-3')
const msgFour = document.querySelector('#message-4')
const msgFive = document.querySelector('#message-5')
const msgSix = document.querySelector('#message-6')



weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const location = search.value
    console.log(location)

    fetch('http://localhost:3000/weather?address=' + location).then((response) =>{
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

})