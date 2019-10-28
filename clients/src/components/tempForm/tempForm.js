import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import Reactotron from 'reactotron-react-js';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { CSVLink } from "react-csv";

export default class TempForm extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
        temperature: '',
        speed: ''
      }
    startDateChange = date => this.setState({ date })

    handleChange = event => this.setState({ temperature: event.target.value, speed: event.target.value});



    render() {
        Reactotron.log('tempForm', this.state)
    return (
        <div>
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
            <form onSubmit={this.handleSubmit}>
                <label>
                temperature:
                <input type="text" value={this.state.temperature} onChange={this.handleChange} />
                </label>
                <label>
                speed:
                <input type="text" value={this.state.temperature} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
    }
}