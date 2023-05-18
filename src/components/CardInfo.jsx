// Aqií es donde se pasa la información de la API y se guarda para que la usemos en el futuro

import React from "react";
import MinImg from "../img/temp-min.png";
import MaxImg from "../img/temp-max.png";
import Hot from "../img/icons/hot.png";
import Cold from "../img/icons/cold.png";
import Mid from "../img/icons/mid.png";

const CardInfo = ({ data }) => {
    // console.log(data);

    // Función ternaria para hacer el logo de las temperaturas
    let image =
        data.temp <= 15
            ? Cold
            : data.temp >= 16 && data.temp <= 29
            ? Mid
            : data.temp > 29
            ? Hot
            : "";

    const day = new Date().getDay();
    let dayName = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday",
    };
    let actualDay = dayName[day];

    return (
        <>
            <h2 className="bold">{actualDay}</h2>
            <img src={image} alt="Temperatura actual" className="temp-logo" />
            <h2 className="bold">{data.temp}º C</h2>
            <h3>
                {data.city}, {data.country}
            </h3>
            <div className="container-temp">
                <div className="div-min">
                    <img src={MinImg} alt="Mínima" className="img-temp" />
                    <h4>{data.temp_min}º</h4>
                </div>
                <div className="div-max">
                    <img src={MaxImg} alt="Máxima" className="img-temp" />
                    <h4>{data.temp_max}º</h4>
                </div>
            </div>
        </>
    );
};

export default CardInfo;
