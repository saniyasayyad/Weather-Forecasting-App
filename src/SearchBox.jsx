import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    const [city, setCity] = useState("");
    const [err, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "617c5f545edbaee0fb59734540cfed65";

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );

            let jsonRes = await response.json();

            if (jsonRes.cod !== 200) {
                throw new Error("City not found");
            }

            let result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description,
            };

            return result;

        } catch (err) {
            throw err;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false);

        try {
            let Newinfo = await getWeatherInfo();
            updateInfo(Newinfo);
            setCity(""); // Reset input if success
        } catch {
            setError(true);
            setCity(""); // Reset if error too
        }
    }

    return (
        <div className='search-box'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City"
                    variant="outlined"
                    onChange={handleChange}
                    value={city}
                    required
                />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Submit
                </Button>

                {err && <p style={{ color: "red" }}>No such place in our API</p>}
            </form>
        </div>
    );
}
