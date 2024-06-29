import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, getWeatherInfo, id } from "../Api/api";
import { useDispatch, useSelector } from "react-redux";
import hot_img from "../../images/hot.jpg";
import cold_img from "../../images/cold.jpg";
import rain_img from "../../images/rain.jpg";
import hazy_img from "../../images/Hazy.jpg";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
const Home = () => {
  const city = useSelector((state) => state.api.city);
  const data = useSelector((state) => state.api.data);

  // console.log(data);


  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', 
      },
      secondary: {
        main: '#ffeb3b', 
      },
      cold: {
        main: '#29b6f6', 
      }
     
    },
  });
  const dispatch = useDispatch();

  return data ? (
    <>
      <div className="d-flex justify-content-center   bg-body-tertiary" style={{'height': '40rem'}}>
      
        <div className="card text-bg-dark text-center  p-1 rounded-4 m-5" style={{'width': '75rem'}}>
        <div class="row g-0">
          <img
            src={
              data?.main?.humidity > 80
                ? rain_img
                : data?.main?.temp > 15
                ? hot_img
                : cold_img
            }
            className="img-fluid rounded-4"
            style={{'height': '33rem','width': '40rem'}}
            alt="..."
          />
          <div className="col d-flex flex wrap row justify-center mt-2" >
          <ThemeProvider theme={theme}>
            <h3 className="card-title text-center ">{data?.name}</h3>
            <h1 className="p-2">{data?.main?.temp}<sup>&deg;C </sup> 
           { data?.main?.humidity > 80
                ? <ThunderstormIcon color="primary" /> 

                : data?.main?.temp > 15
                ? <WbSunnyIcon color="secondary"/> 
                : <AcUnitIcon color="cold"/>}
            </h1>
            <p className="card-text p-2 ">Humidity: {data?.main?.humidity}</p>
            <p className="card-text p-2">
              <small>
                Max Temp: {data?.main?.temp_max} <sup>&deg;C</sup> <br />
                Min Temp: {data?.main?.temp_min}<sup>&deg;C</sup>{" "}
              </small>
            </p>
            <p className="card-text p-2">
              The Weather can be described as {data?.weather[0]?.main} and{" "}
              <br />
              Feels like {data?.main?.temp_max}
            </p>
            </ThemeProvider>
          </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>

      <div className=" card d-flex justify-content-center " >
  <img src={hazy_img} className="card-img img-fluid rounded opacity-30 " style={{'height': '33rem','width': '100%'}}  alt="..."/>
 
      
<div className="card-img-overlay text-center mt-5 pt-5 ">
 <p className="text-white fw-bold fs-1 mt-5 p-5  opacity-50">Check Weather of your city</p>
</div>
</div>
    </>
  );
};

export default Home;
