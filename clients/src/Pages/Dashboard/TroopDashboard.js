import React, { PureComponent } from "react";
import Reactotron from 'reactotron-react-js';
import TempChart from '../../components/chartList/tempChart.js'
import Button from '@material-ui/core/Button';
import './troopDashboard.css'

class TroopDashboard extends PureComponent {
    state = {day: false}
    
    dayButtonClick = e => {
        this.setState({ day : false})
    }

    nightButtonClick = e => {
        this.setState({ day : true})
    }

    render() {
        Reactotron.log('this.props Troops.js', this.props)
        return (
            <div className="container">
            <h1>Weather Dashboard</h1>
            <div className="buttonContainer">
                <Button
                    variant="contained" 
                    color="primary"
                    value="Day"
                    onClick={this.dayButtonClick}
                >
                    Day
                </Button>
                <Button
                    variant="contained" 
                    color="primary"
                    value="Night"
                    onClick={this.nightButtonClick}
                >
                    Night
                </Button>
                
            </div>
            <TempChart 
                chartValues={this.props.chartValues} 
                filteredValues={this.props.filteredValues} 
                labelValues={this.props.labelValues}
                toggle={this.state.day}
                />
        </div>
        )
    }
}

export default TroopDashboard;


