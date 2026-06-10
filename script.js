async function getWeather() {
   
    let city = document.getElementById("city").value;

    if (city === ""){
        alert("please enter a valid city name");
         return;
    }

    let apikey = "4a72f81b7b620d1b4705f4d4e48221d5";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    try{
         let response = await fetch(url);

         let data = await response.json();
         console.log(data);

         if(data.cod == "404"){
            document.getElementById("result").innerHTML = "<p> City not Found </p>";
            return;
         }

         document.getElementById("city-name").innerText = data.name;

         document.getElementById("temp").innerText =
         data.main.temp + " °C";

         document.getElementById("Humidity").innerText =
         data.main.humidity + " %";

         document.getElementById("Wind").innerText =
         data.wind.speed + " m/s";

          document.getElementById("Weather").innerText =
        data.weather[0].main;

    }

    catch(error){
        document.getElementById("result").innerHTML = 
        "Something went wrong";
        console.log(error);
    }
    
}