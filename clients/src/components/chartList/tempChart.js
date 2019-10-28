import React, { PureComponent } from "react";
import Reactotron from 'reactotron-react-js';
import Chart from "chart.js";
import * as moment from 'moment';
import './tempChart.css';

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;


class TempChart extends PureComponent {
    
    
    chartRef = React.createRef();
    
    componentDidMount() {
        this.buildChart()
    }

    componentDidUpdate() {
        this.buildChart()
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        Reactotron.log("values", this.props.chartValues)
        
        const {height: graphHeight} = myChartRef.canvas;
        let gradientLine = myChartRef
            .createLinearGradient(0, 0, 0, graphHeight);
        gradientLine.addColorStop(1, "rgb(255, 300, 610, 0.3)");
  
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels:this.props.toggle !== true ? this.props.filteredValues : this.props.labelValues,
                datasets: [
                    {
                        label: "Weather",
                        data: this.props.chartValues,
                        fill: true,
                        borderColor: gradientLine
                    }
                ]
            },
            options: {
                // Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 5,
                        left: 15,
                        right: 15,
                        bottom: 15
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: { display: true },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }],
                    yAxes: [{
                        ticks: { display: true },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }]
                }
            }
        });
    }

    
    render() {

        Reactotron.log('this.props Troops.js', this.props)
        return (
            <div className="graphContainer">
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

export default TempChart;


