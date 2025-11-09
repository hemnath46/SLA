// using props method and passing the value
// function WeatherInfo(weather){
//     return(
//         <>  
//         <h2>Current temperature of {weather.city} is {weather.temp}</h2>
//         </>
//     );
// }
// export default WeatherInfo;



function WeatherInfo(props) {
  const { city, temp } = props.weather;
  return (
    <h2>{`Current temperature in ${city} is ${temp}°C`}</h2>
  );
}
export default WeatherInfo;
