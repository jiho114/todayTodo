import { createContext, useState, useEffect } from "react";
import { recommend } from "../Data/recommend";
// Context 생성
export const RecommendContext = createContext();

export const RecommendProvider = ({ children }) => {
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const [weather, setWeather] = useState("");
    const [energyLevel, setEnergyLevel] = useState("보통");
    
    const weatherEnergy = `${weather}_${energyLevel}`;
    const recommendation = recommend[weatherEnergy] || ["자유롭게 시간 보내기"];
    const randomRecommendation = recommendation[Math.floor(Math.random() * recommendation.length)];

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                navigator.geolocation.getCurrentPosition(async (position) => {

                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
                    );

                    const data = await response.json();
                    if (!response.ok) throw new Error(data.message || "날씨 정보를 가져오는 데 실패했어요.");

                    const weatherCondition = data.weather[0].main; // OpenWeather 날씨 상태
                    let translatedWeather = "";

                    // OpenWeather 상태를 한글로 변환
                    if (weatherCondition === "Clear") translatedWeather = "맑음";
                    else if (weatherCondition === "Rain") translatedWeather = "비";
                    else if (weatherCondition === "Snow") translatedWeather = "눈";
                    else if (weatherCondition === "Clouds") translatedWeather = "흐림";
                    else translatedWeather = "기타";

                    setWeather(translatedWeather);
                });
            } catch (err) {
                console.error("위치 정보를 가져오는 데 실패했어요.", err);
            }
        };

        fetchWeather();
    }, []);


    return (
        <RecommendContext.Provider value={{ weather, setWeather, energyLevel, setEnergyLevel, randomRecommendation }}>
            {children}
        </RecommendContext.Provider>
    );
};
