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
        console.log(`Leo's log:`, this.refs.myLineChart);
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
                {/* <tr className="shelf-item">
                 <td>{this.props.item.score}</td>
                 <td>{this.props.item.hole_1}</td>
                 <td>{this.props.item.hole_2}</td>
                 <td>{this.props.item.hole_3}</td>
                 <td>{this.props.item.hole_4}</td>
                 <td>{this.props.item.hole_5}</td>
                 <td>{this.props.item.hole_6}</td>
                 <td>{this.props.item.hole_7}</td>
                 <td>{this.props.item.hole_8}</td>
                 <td>{this.props.item.hole_9}</td>
                 <td>{this.props.item.hole_10}</td>
                 <td>{this.props.item.hole_11}</td>
                 <td>{this.props.item.hole_12}</td>
                 <td>{this.props.item.hole_13}</td>
                 <td>{this.props.item.hole_14}</td>
                 <td>{this.props.item.hole_15}</td>
                 <td>{this.props.item.hole_16}</td>
                 <td>{this.props.item.hole_17}</td>
                 <td>{this.props.item.hole_18}</td>
                 <td>{this.props.item.username}</td>
                 <td><button value={this.props.item.id} onClick={this.removeFromList}>Delete</button></td>
             </tr> */}
            </>
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(Chart);
