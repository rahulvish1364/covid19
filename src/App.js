import style from "./App.module.css";
import coronaImage from "./images/image.png";

import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
class App extends React.Component {
  state = { data: {}, country: "" };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    // console.log(country);
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <img className={style.image} src={coronaImage} alt="Covid19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
