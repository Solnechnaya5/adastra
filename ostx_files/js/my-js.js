const popup = document.querySelector('.popup-wind');
const comments = document.querySelectorAll('.comment');

comments.forEach((comment) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        popup.classList.add('is-show');
      } else {
        popup.classList.remove('is-show');
      }
    });
  });

  observer.observe(comment);
});
//дата та час
function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const currentDate = new Date();
  
    const options1 = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const options2 ={ hour: 'numeric', minute: 'numeric', second: 'numeric' };
    
    const formattedDate = currentDate.toLocaleString('uk-UA', options1);
    const formattedTime = currentDate.toLocaleTimeString('uk-UA', options2);

    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

setInterval(updateDateTime, 1000);

updateDateTime();

// погода
// apiKey = '30272e484c296f2e9d0527ee8bf4996f'


if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      const apiKey = '30272e484c296f2e9d0527ee8bf4996f';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const temperatureKelvin = data.main.temp;
          const temperatureCelsius = temperatureKelvin - 273.15;
          const city = data.name;
          const description = data.weather[0].description;
          const iconCode = data.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
  
          const currentWeather = document.getElementById('city');
          currentWeather.textContent =`${city}`;
     
          const weatherIcon = document.getElementById('weather-icon');
          weatherIcon.src = iconUrl;

          const weatherTemperature = document.getElementById('weather-temperature');
          weatherTemperature.textContent = `${temperatureCelsius.toFixed(1)}°C, `;
  
          const weatherDescription = document.getElementById('weather-description');
          weatherDescription.textContent = `${description}`;
        })
        .catch(error => console.error('Помилка при отриманні погодних даних:', error));
    });
  } else {
    console.error('Геолокація не підтримується в вашому браузері.');
  }
  