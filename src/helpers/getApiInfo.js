// Creammos función para sacar la API
const API_KEY = "b33f6d252048648249111b62620a2922";

const getApiInfo = async (city) => {
    const data = await (
        await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${
                city || "Sevilla"
            }&appid=${API_KEY}`
        )
    ).json();
    console.log(data);
    return data;
};

export default getApiInfo;
