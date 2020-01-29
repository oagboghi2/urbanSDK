import React, { Component } from 'react';
import Reactotron from 'reactotron-react-js';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CardRow from './Pages/CardRow/CardRow.js';
import ShiftDetails from './Pages/Shift_Details/ShiftDetails.js';
import TroopDashboard from './Pages/Dashboard/TroopDashboard.js';
import * as moment from 'moment'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    week: true,
    month: false,
    forecastPeriods: [], 
    chartValues : [],
    labelValues: [],
    dayLabelValues: [],
    cardData: [],
    location: [],
    avgTemperature : '',
    hourly:{
      hourlyCardData: []
    }
  };

  componentDidMount(){
    this.fetchTableData();
  }

  componentDidUpdate(prevState, snapshot){
    Reactotron.log('State', this.state)
    Reactotron.log('prevState', prevState)
    // if(prevState !== this.state){
    //   Reactotron.log("no changes")
    // } else {
    //   this.fetchTableData()
    // }
  }


  async fetchTableData() {
    const response = await axios.get('https://api.weather.gov/points/30.3322,-81.6557', {
      headers: {}
    })
    Reactotron.log('response', response)
    const forecast = await axios.get(response.data.properties.forecast)
    Reactotron.log('forecast', forecast)
    const forecastHourly = await axios.get(response.data.properties.forecastHourly)
    Reactotron.log('forecastHourly', forecastHourly)
    let cardData = response.data.properties
    let labelValues = forecast.data.properties.periods.map((date) => moment(date.startTime).format('DD'));
    let dayLabelValues = forecast.data.properties.periods.map((date) => date.isDaytime ? moment(date.startTime).format('DD') : null);
    let filteredValues = dayLabelValues.filter((item) => item !== null);
    let chartValues = forecast.data.properties.periods.map((cv) => cv.temperature);
    let location = cardData.relativeLocation.properties
    let avgTemperature = this.arrAvg(chartValues);
    const dayPeriods = forecast.data.properties.periods.filter(item => item.isDaytime === true);
    let hourlyChartValues = forecastHourly 
    this. makePostRequest(this.state);
    this.setState({ forecastPeriods : dayPeriods, 
        chartValues, 
        labelValues,
        filteredValues, 
        cardData, 
        avgTemperature, 
        location,
        })
        
  }
  
  arrAvg = (arr) => {
    let length = arr.length
    let sum =  arr.reduce((a,b) => a + b)
    return Math.round(sum / length);
  }

  clickWeekly = (e) => {
    this.setState({ week: true, month: false})
  }

  clickMonthly = (e) => {
    this.setState({ week: false, month: true})
  }
  
  async makePostRequest(data) {
    const params = {
      temperature: 88,
       speed: 0,
    }

    Reactotron.log('post fired')
    Reactotron.log('post data', data)
    let res = await axios.post('http://localhost:3001/api/weather', params);

    Reactotron.log(`Status code: `, res);
}

  render(){
    Reactotron.log('this.state App.js', this.state)
    return (
      <div className="App">
        <header className="App-header">
            {/* <div>
              <ul>
                <li>
                  <Link to="ShiftDetails">Shift Details</Link>
                </li>
                <li>
                  <Link to="Dashboard">Dashboard</Link>
                </li>
              </ul>
            </div> */}
            <hr />
              <div className="container">
                <CardRow cardData={this.state.cardData} location={this.state.location}  avgTemperature={this.state.avgTemperature} />
                <TroopDashboard chartValues={this.state.chartValues} filteredValues={this.state.filteredValues} labelValues={this.state.labelValues} week={this.clickWeekly} month={this.clickMonthly} />
                <ShiftDetails weatherData={this.state.forecastPeriods} />
              </div>
        </header>
      </div>
    );
  }
  
}

export default App;
