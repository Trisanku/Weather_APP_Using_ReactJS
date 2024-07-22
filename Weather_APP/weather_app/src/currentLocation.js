import React from "react";
// import apiKeys from "./apiKeys";
// import Clock from "react-live-clock";
// import Forcast from "./forcast";
// import loader from "./images/WeatherIcons.gif";
// import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
// const dateBuilder = (d) => {
//   let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day}, ${date} ${month} ${year}`;
// };
// const defaults = {
//   color: "white",
//   size: 112,
//   animate: true,
// };
// class Weather extends React.Component {
//   state = {
//     lat: undefined,
//     lon: undefined,
//     errorMessage: undefined,
//     temperatureC: undefined,
//     temperatureF: undefined,
//     city: undefined,
//     country: undefined,
//     humidity: undefined,
//     description: undefined,
//     icon: "CLEAR_DAY",
//     sunrise: undefined,
//     sunset: undefined,
//     errorMsg: undefined,
//   };

  // componentDidMount() {
  ///////////////////////
//       if (navigator.geolocation) {
//       this.getPosition()
//         //If user allow location service then will fetch data & send it to get-weather function.
//         .then((position) => {
//           this.getWeather(position.coords.latitude, position.coords.longitude);
//         })
//         .catch((err) => {
//           //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
//           this.getWeather(28.67, 77.22);
//           alert(
//             "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
//           );
//         });
//     } else {
//       alert("Geolocation not available");
//     }

//     this.timerID = setInterval(
//       () => this.getWeather(this.state.lat, this.state.lon),
//       600000
//     );
//   }
// //////////////////
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
// //////////////////
//   // tick = () => {
//   //   this.getPosition()
//   //   .then((position) => {
//   //     this.getWeather(position.coords.latitude, position.coords.longitude)
//   //   })
//   //   .catch((err) => {
//   //     this.setState({ errorMessage: err.message });
//   //   });
//   // }

//   ///////////////////
//   getPosition = (options) => {
//     return new Promise(function (resolve, reject) {
//       navigator.geolocation.getCurrentPosition(resolve, reject, options);
//     });
//   };
  
//   // getWeather = async (lat, lon) => {
//   //   const api_call = await fetch(
//   //     `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
//   //   );
//   //   const data = await api_call.json();
//   //   this.setState({
//   //     lat: lat,
//   //     lon: lon,
//   //     city: data.name,
//   //     temperatureC: Math.round(data.main.temp),
//   //     temperatureF: Math.round(data.main.temp * 1.8 + 32),
//   //     humidity: data.main.humidity,
//   //     main: data.weather[0].main,
//   //     country: data.sys.country,
//   //     // sunrise: this.getTimeFromUnixTimeStamp(data.sys.sunrise),

//   //     // sunset: this.getTimeFromUnixTimeStamp(data.sys.sunset),
//   //   });


//   getWeather() {
//     axios.get('https://api.openweathermap.org/data/3.0/9c6106d697cc413c69bfc4702e6f1aa5')
//       .then(response => {
//         const temperature = response.data?.main?.temp;
//         if (temperature !== undefined) {
//           this.setState({ temp: temperature });
//         } else {
//           console.error('Temperature data is not available');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the weather data:', error);
//       });
//   }
  

//   //   switch (this.state.main) {
//   //     case "Haze":
//   //       this.setState({ icon: "CLEAR_DAY" });
//   //       break;
//   //     case "Clouds":
//   //       this.setState({ icon: "CLOUDY" });
//   //       break;
//   //     case "Rain":
//   //       this.setState({ icon: "RAIN" });
//   //       break;
//   //     case "Snow":
//   //       this.setState({ icon: "SNOW" });
//   //       break;
//   //     case "Dust":
//   //       this.setState({ icon: "WIND" });
//   //       break;
//   //     case "Drizzle":
//   //       this.setState({ icon: "SLEET" });
//   //       break;
//   //     case "Fog":
//   //       this.setState({ icon: "FOG" });
//   //       break;
//   //     case "Smoke":
//   //       this.setState({ icon: "FOG" });
//   //       break;
//   //     case "Tornado":
//   //       this.setState({ icon: "WIND" });
//   //       break;
//   //     default:
//   //       this.setState({ icon: "CLEAR_DAY" });
//   //   }
//   // };



//   render() {
//     if (this.state.temperatureC) {
//       return (
//         <React.Fragment>
//           <div className="city">
//             <div className="title">
//               <h2>{this.state.city}</h2>
//               <h3>{this.state.country}</h3>
//             </div>
//             <div className="mb-icon">
//               {" "}
//               <ReactAnimatedWeather
//                 icon={this.state.icon}
//                 color={defaults.color}
//                 size={defaults.size}
//                 animate={defaults.animate}
//               />
//               <p>{this.state.main}</p>
//             </div>
//             <div className="date-time">
//               <div className="dmy">
//                 <div id="txt"></div>
//                 <div className="current-time">
//                   <Clock format="HH:mm:ss" interval={1000} ticking={true} />
//                 </div>
//                 <div className="current-date">{dateBuilder(new Date())}</div>
//               </div>
//               <div className="temperature">
//                 <p>
//                   {this.state.temperatureC}°<span>C</span>
//                 </p>
//                 {/* <span className="slash">/</span>
//                 {this.state.temperatureF} &deg;F */}
//               </div>
//             </div>
//           </div>
//           <Forcast icon={this.state.icon} weather={this.state.main} />
//         </React.Fragment>
//       );
//     } else {
//       return (
//         <React.Fragment>
//           <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} />
//           <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
//             Detecting your location
//           </h3>
//           <h3 style={{ color: "white", marginTop: "10px" }}>
//             Your current location wil be displayed on the App <br></br> & used
//             for calculating Real time weather.
//           </h3>
//         </React.Fragment>
//       );
//     }
//   }
// }

// export default Weather;


import './App.css'; // Import the CSS file


// const [input, setInput] = useState('')
// const { weather, thisLocation, values, place, setPlace } = useStateContext()
// // console.log(weather)

// const submitCity = () => {
//   setPlace(input)
//   setInput('')
// }

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: null,
      city: 'Pune', // You can change the city as needed
      error: null,
      inputCity: '',
      humidity: null,
      visibility: null,
      windSpeed: null,
    };
  }

    

  // componentDidMount() {
    // this.getWeather();
  // }

  getWeather() {
    const { city } = this.state;
    const apiKey = '9c6106d697cc413c69bfc4702e6f1aa5'; // Replace with your actual API key
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(response => {
        // const data = response.data;
        const temperature = response.data?.main?.temp;
        const humidity = response.data.main?.humidity;
        const visibility = response.data.visibility;
        const windSpeed = response.data.wind?.speed;


        if (temperature !== undefined) {
          this.setState({ temp: temperature,
            humidity: humidity,
            visibility: visibility,
            windSpeed: windSpeed,
           });
        } else {
          this.setState({ error: 'Temperature data is not available' });
        }
      })
      .catch(error => {
        this.setState({ error: 'Error fetching the weather data' });
      });
  }

  //     switch (this.state.main) {
  //     case "Haze":
  //       this.setState({ icon: "CLEAR_DAY" });
  //       break;
  //     case "Clouds":
  //       this.setState({ icon: "CLOUDY" });
  //       break;
  //     case "Rain":
  //       this.setState({ icon: "RAIN" });
  //       break;
  //     case "Snow":
  //       this.setState({ icon: "SNOW" });
  //       break;
  //     case "Dust":
  //       this.setState({ icon: "WIND" });
  //       break;
  //     case "Drizzle":
  //       this.setState({ icon: "SLEET" });
  //       break;
  //     case "Fog":
  //       this.setState({ icon: "FOG" });
  //       break;
  //     case "Smoke":
  //       this.setState({ icon: "FOG" });
  //       break;
  //     case "Tornado":
  //       this.setState({ icon: "WIND" });
  //       break;
  //     default:
  //       this.setState({ icon: "CLEAR_DAY" });
  //   }
  // };

  handleInputChange = (event) => {
    this.setState({ inputCity: event.target.value });
  }

  handleSearch = () => {
    const { inputCity } = this.state;
    if (inputCity) {
      this.setState({ city: inputCity }, () => {
        this.getWeather(this.state.city);
      });
    }
  }

  render()  {
    const { temp, humidity, visibility, windSpeed, error, inputCity } = this.state; //city 
    return (
      <div className="weather-container">
        <h1>Weather App</h1>
        <div className="search-bar">
          <input
            type="text"
            value={inputCity}
            onChange={this.handleInputChange}
            placeholder="Enter city name"
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>

        {/* <p>City: {city}</p> */}


        {error ? (
          <p className="error">{error}</p>
        ) : temp !== null ? (
          <div>
            <p>City: {inputCity}</p> 
            <p>Temperature: {temp}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Visibility: {visibility} meters</p>
            <p>Wind Speed: {windSpeed} m/s</p>
          </div>
        ) : (
          <div className="load">
          <p className="loading"></p>
          </div>
        )}
      </div>
    );
  }
}

export default Weather;

