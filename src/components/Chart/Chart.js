import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';


class Chart extends Component {

    state = {
        chartData: {
            labels: ['Game One', 'Game Two', 'Game Three', 'Game Four', 'Game Five', 'Game Six'],
            datasets: [
                {
                    label: 'Disc Golf Scores',
                    data: [
                        54,
                        67,
                        54,
                        66,
                        59,
                        61
                    ],
                    backgroundColor: 
                    '#AD35BA',
                    borderColor: [
                        '#AD35BA'
                    ],
                    borderWidth: 2,
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
                }
            ]
        }
    }

    componentDidMount(){
        console.log(this.refs.myLineChart);
        this.initializeChart();
    }
    
    initializeChart=() => {
        console.log(this.state.chartData.datasets[0].backgroundColor);
        let el = ReactDOM.findDOMNode(this.refs.myLineChart);
        console.log(el);
        let ctxL = el.getContext("2d");
        let gradientFill = ctxL.createLinearGradient(0, 0, 0, 290);
        gradientFill.addColorStop(0, "rgba(173, 53, 186, 1)");
        gradientFill.addColorStop(1, "rgba(173, 53, 186, 0.1)");
        let newChartData = this.state.chartData;
        newChartData.datasets[0].backgroundColor = gradientFill;
        this.setState({
            newChartData,
        });
    }
    

    render() {
        return (
            <>
                <div className="chart" ref="lineChart">
                    <Line
                        data={this.state.chartData}
                        width={100}
                        height={500}
                        ref="myLineChart"
                        options={{
                            title: {
                                display: true,
                                text: 'Recent Games Played',
                                fontsize: 25,
                            },
                            legend: {
                                diplay: true,
                                position: 'bottom',
                            },
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            </>
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(Chart);
