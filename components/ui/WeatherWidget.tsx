"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  temp: number;
  condition: string;
};

const MINNEAPOLIS_COORDS = {
  lat: 44.9778,
  lon: -93.2650,
};

async function fetchWeather(lat: number, lon: number): Promise<WeatherData> {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&temperature_unit=fahrenheit`
    );

    const data = await res.json();

    const weatherCodeMap: Record<number, string> = {
      0: "Clear",
      1: "Mostly clear",
      2: "Partly cloudy",
      3: "Cloudy",
      45: "Fog",
      48: "Fog",
      51: "Drizzle",
      53: "Drizzle",
      55: "Drizzle",
      61: "Rain",
      63: "Rain",
      65: "Heavy rain",
      71: "Snow",
      73: "Snow",
      75: "Heavy snow",
      80: "Rain showers",
      95: "Thunderstorm",
    };

    return {
      temp: Math.round(data.current.temperature_2m),
      condition: weatherCodeMap[data.current.weathercode] || "Unknown",
    };
  } catch (error) {
    throw new Error("Weather fetch failed");
  }
}

export default function WeatherWidget() {
  const [userWeather, setUserWeather] = useState<WeatherData | null>(null);
  const [mplsWeather, setMplsWeather] = useState<WeatherData | null>(null);
  const [locationAvailable, setLocationAvailable] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllWeather = async () => {
      try {
        // Fetch Minneapolis immediately
        const mplsPromise = fetchWeather(
          MINNEAPOLIS_COORDS.lat,
          MINNEAPOLIS_COORDS.lon
        );

        // Fetch user location
        const userPromise = new Promise<WeatherData | null>((resolve) => {
          if (!navigator.geolocation) {
            setLocationAvailable(false);
            resolve(null);
            return;
          }

          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                const data = await fetchWeather(
                  position.coords.latitude,
                  position.coords.longitude
                );
                resolve(data);
              } catch {
                resolve(null);
              }
            },
            () => {
              setLocationAvailable(false);
              resolve(null);
            },
            { timeout: 5000 }
          );
        });

        const [mpls, user] = await Promise.all([mplsPromise, userPromise]);

        setMplsWeather(mpls);
        setUserWeather(user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllWeather();
  }, []);

  return (
    <div className="text-sm text-gray-30">
      <p className="mb-2 text-gray-50">Weather</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-1">
          <p>
            Your location:{" "}
            {userWeather && locationAvailable
              ? `${userWeather.temp}°F, ${userWeather.condition}`
              : "Location unavailable"}
          </p>

          <p>
            Minneapolis:{" "}
            {mplsWeather
              ? `${mplsWeather.temp}°F, ${mplsWeather.condition}`
              : "Unavailable"}
          </p>
        </div>
      )}
    </div>
  );
}