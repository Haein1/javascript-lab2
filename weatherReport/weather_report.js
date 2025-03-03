
function showweatherDetails(event){
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '908d7e714d720c4836ce15c2e933d9d0'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    //`https://api.openweathermap.org/data/2.5/weather?q={Chicago}&appid={908d7e714d720c4836ce15c2e933d9d0}`

    debugger;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data=>{
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}


document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );