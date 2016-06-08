const API_BASE_URL = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=c122dbe8b77f4e91b3d220939160206&format=json'

export function getForCity(city) {
  const date = formatDate(new Date())
  const url = `${API_BASE_URL}&q=${city}&date=${date}&enddate=${date}`

  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const weather = result.data.weather[0]
      const min = parseInt(weather.mintempC)
      const max = parseInt(weather.maxtempC)

      return {
        min,
        max,
        avg: parseInt((max + min) / 2)
      }
    })
    .catch(() => {
      return { min: 6, max: 20, avg: 13 }
    })
}

function formatDate(date) {
  const d = date.getDate()
  const m = date.getMonth() + 1
  const y = date.getFullYear()
  return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d)
}