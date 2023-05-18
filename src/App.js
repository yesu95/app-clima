import { useEffect, useState } from "react";
import "./App.css";
import ClimaLogo from "./img/clima-logo.png";
import getApiInfo from "./helpers/getApiInfo";
import CardInfo from "./components/CardInfo";
import SearchCountry from "./components/SearchCountry";

/* Creamos un estado vacío solo para los datos de la API que vamos a requerir y lo hacemos como objeto para pasarle los datos después
 */

function App() {
    const [data, setData] = useState({
        city: "",
        country: "",
        temp: "",
        temp_max: "",
        temp_min: "",
    });

    const [city, setCity] = useState("");

    // Usamos el useEffect para enviar los datos sacados de la API

    useEffect(() => {
        getApiInfo(city).then((data) => {
            setData((prevState) => ({
                ...prevState,
                city: data.name,
                country: data.sys.country,
                temp: Math.floor(data.main.temp - 273),
                temp_max: Math.floor(data.main.temp_max - 273),
                temp_min: Math.floor(data.main.temp_min - 273),
            }));
            // console.log(data.weather.icon);
        });
    }, [city]);

    // Cambia el valor por el que le introduzcamos con setCity
    const handleSumit = (e) => {
        e.preventDefault();
        // console.log(city);
        setCity(e.target[0].value);
        e.target.reset();
    };

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 className="tittle-site">Weather Today</h1>
                    <img
                        src={ClimaLogo}
                        alt="Clima Logo"
                        className="App-logo"
                    />
                </header>
                <main>
                    <SearchCountry handleSumit={handleSumit} />
                    <section className="principal">
                        {/* Pasamos por props(propiedad,forma de pasar datos desde un componente "padre" a un componente "hijo".), son como atributos al componente CardInfo */}
                        <>
                            <CardInfo data={data} />
                        </>
                    </section>
                </main>
            </div>
        </>
    );
}

export default App;
