import React from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fatchedData = await fetchData();
    this.setState({ data: fatchedData });
  }
  handleCountryChange = async (country) => {
    const fatchedData = await fetchData(country);
    console.log(fatchedData);
    
    //fetch data 
    //set state
    this.setState({ data: fatchedData, country:country});

  }
  render() {
    const { data,country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} country={country}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart className={styles.container} data={data} country={country} />
      </div>
    );
  }
}
export default App;
