const apiKey = "5c318e8cf3863758d5474d5dfca98b73";
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

            const searchBox = document.querySelector(".search input");
            const searchBtn = document.querySelector(".search button");
            const weatherIcon = document.querySelector(".weatherIcon");
        
        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            
            if(response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else {
                var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "mph";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "cloudy.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "sunnyIcon.png";
        }
        else if(data.weather[0].main == "Rain || Drizzle || Mist") {
            weatherIcon.src = "rainIcon.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }
    }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

checkWeather();