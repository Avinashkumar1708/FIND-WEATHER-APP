import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setData } from "../redux/slice/weatherApiSlice";
import { getWeatherInfo } from "../Api/api";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const Nav = () => {
  const city = useSelector((state) => state.api.city);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setCity(e.target.value));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getWeatherInfo(city);
    dispatch(setData(res?.data));

  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2", // Custom primary color
      },
      secondary: {
        main: "#ffeb3b", // Custom secondary color
      },
    },
  });

  return (
    <div>
      <nav className="navbar bg-body-tertiary bg-gradient" style={{ height: "5rem" }}>
        <div className="container-fluid d-flex justify-content-around">
          <ThemeProvider theme={theme}>
            <p className="fw-semibold fs-3">
             
              <i>Find Weather{" "}</i>
              <ThermostatIcon color="primary"/>
            </p>
          </ThemeProvider>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter Your City"
              aria-label="Search"
              onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
