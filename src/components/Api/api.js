import axios from "axios";

export const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'


export const id='c8ee70bc6fc57a87c612de18330a3658'



export const getWeatherInfo = async (city) => {
    try {
      const res = await axios.get(`${baseUrl}?q=${city}&appid=${id}&units=metric`);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };