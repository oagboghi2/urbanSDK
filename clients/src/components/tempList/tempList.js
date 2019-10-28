import React, { Component } from 'react';
import Reactotron from 'reactotron-react-js';
import * as moment from 'moment'

import './tempList.css';

class TempList extends Component {
    listData = (props) => {
        return props.map((item) => {
            return( 
                <div className="grid"key={item.number}>
                    <span>
                        <strong>Start Time</strong>
                    </span>
                    <span>
                        <strong>End Time</strong>
                    </span>
                     <span>
                        <strong>Temperature</strong>
                    </span>
                    <span>
                        <strong>Wind Speed</strong>
                    </span>
                    <span>
                        <strong>Icon</strong>
                    </span> 
                        {/* <span>{moment(item.startTime).format('LLL')}</span>
                        <span>{moment(item.endTime).format('LLL')}</span> */}
                        <span>{moment(item.startTime).format('LLL')}</span>
                        <span>{moment(item.endTime).format('LLL')}</span>
                        <span>{item.temperature}</span>
                        <span>{item.windSpeed}</span>
                        <span><img src={item.icon}></img></span>
                </div>
            )
        })
    }

    render(){
        Reactotron.log('this.props tempList', this.props)
        const { weatherData } = this.props;
        return (
        <div>
            {this.listData(weatherData)}
        </div>
        )
    }
}

export default TempList