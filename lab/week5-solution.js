{/* api_key: 4498add9fff045f6bb873226212701 */}
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#chicago-forecast').addEventListener('click', async function(event) {
    event.preventDefault()

    let location = 'Chicago'
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=7`)
    let json = await response.json()
    let forecast = json.forecast.forecastday

    document.querySelector('.forecast').innerHTML = ''
    for (let i = 0; i < forecast.length; i++) {
      let dailyForecast = forecast[i]
      document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
    }
  })
}

window.addEventListener('DOMContentLoaded', function() {
  let forecastLocationButtons = document.querySelectorAll('.forecast-button')
  for (let i = 0; i < forecastLocationButtons.length; i++) {
    let locationButton = forecastLocationButtons[i]
    locationButton.addEventListener('click', async function(e) {
      e.preventDefault()
​
      let location = e.target.innerHTML
      document.querySelector('.forecast-header').innerHTML = `${location} Forecast`
      let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=7`)
      let json = await response.json()
      let forecast = json.forecast.forecastday
​
      document.querySelector('.forecast').innerHTML = ''
      for (let i = 0; i < forecast.length; i++) {
        let dailyForecast = forecast[i]
        document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
      }
    })
}

document.querySelector('.weather-form').addEventListener('submit', async function(event) {
  event.preventDefault()

  let location = document.querySelector('#location').value

  let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=${location}&days=7`)
  let json = await response.json()
  let forecast = json.forecast.forecastday

  document.querySelector('.forecast').innerHTML = ''
  for (let i = 0; i < forecast.length; i++) {
    let dailyForecast = forecast[i]
    document.querySelector('.forecast').insertAdjacentHTML('beforeend', forecastHTML(dailyForecast))
  }
})
