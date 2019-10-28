import React, { Component } from 'react';
import Reactotron from 'reactotron-react-js';
import Button from '@material-ui/core/Button';
import DatePicker from 'react-date-picker';
import axios from 'axios';
import { CSVLink } from "react-csv";


import './ShiftDetails.css'
import TempList from '../../components/tempList/tempList.js';
import TempForm from '../../components/tempForm/tempForm.js';


class ShiftDetails extends Component {
    state = {
        name: '',
        startDate: new Date(),
        endDate: new Date(),
        temperature: '',
        temperatureUnit: File,
        windSpeed: '',
        windDirection: ''
      }


    startDateChange = date => this.setState({ date })

    nameChange = event => this.setState({ 
        name: event.target.value, 
    });

    tempChange = event => this.setState({ 
        temperature: event.target.value, 
    });
    
    speedChange = event => this.setState({ 
        windSpeed: event.target.value, 
    });

    directionChange = event => this.setState({ 
        windDirection: event.target.value, 
    });

    render(){
   Reactotron.log('weatherData', this.props.weatherData)
        return (
                    <div>
                        {/* <div className="formContainer"> 
                            <form onSubmit={this.handleSubmit}>
                            <div className="firstRow">
                                <label>
                                    Date:
                                    <input name="name" type="text" value={this.state.name} onChange={this.nameChange} />
                                </label>
                            <div>
                                <DatePicker
                                dateChange={this.startDateChange}
                                value={this.state.startDate}
                            />
                            </div>
                            <div>
                                <DatePicker
                                dateChange={this.endDateChange}
                                value={this.state.endDate}
                            />
                            </div>
                        </div>
                        
                            <label>
                                temperature:
                                <input name="temperature" type="number"  value={this.state.temperature} onChange={this.tempChange} />
                            </label>
                            <label>
                                Wind Speed :
                                <input name="WindSpeed" type="number" value={this.state.windSpeed} onChange={this.speedChange} />
                            </label>
                            <label>
                                Wind Direction :
                                <input  name="WindDirection" type="text" value={this.state.windDirection} onChange={this.directionChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div> */}
                <Button
                    variant="contained" 
                    color="primary"
                    value="Download"
                >
                   <CSVLink data={this.props.weatherData}>Download </CSVLink>
                </Button>
                <TempList weatherData={this.props.weatherData} />
            </div>
        )
    }
}

export default ShiftDetails;