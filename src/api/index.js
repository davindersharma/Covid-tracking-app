import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

  let changeableUrl = url;
  if (country) {
    changeableUrl=`${url}/countries/${country}`
  }
  try {
    const { data } = await axios.get(changeableUrl);

    const modifiData = {
      deaths: data.deaths,
      confirmed: data.confirmed,
      recovered: data.recovered,
      lastUpdate: data.lastUpdate,
    };
    return modifiData;
  } catch (error) {}
};
export const fatchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
export const countries = async () => {
  try {
    const { data: countries } = await axios.get(`${url}/countries`);

    // console.log(countries.countries.map((country) => country.name));

    return countries.countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
