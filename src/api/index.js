import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    const modifiData = {
      deaths: data.deaths,
      confirmed: data.confirmed,
      recovered: data.recovered,
      lastUpdate: data.lastUpdate,
    };
    return modifiData;
  } catch (error) {}
};
