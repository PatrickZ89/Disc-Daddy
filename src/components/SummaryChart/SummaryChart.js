import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

class SummaryChart extends Component {

    state = {
        chartData: {
            labels: ['Hole 1','Hole 2','Hole 3','Hole 4','Hole 5','Hole 6','Hole 7','Hole 8','Hole 9','Hole 10','Hole 11', 'Hole 12', 'Hole 13', 'Hole 14', 'Hole 15', 'Hole 16', 'Hole 17', 'Hole 18'],
            datasets: this.props.currentGameReducer.map((player)=>{
                return {
                label: player.name,
                data: [player.hole_1,
                    player.hole_2,
                    player.hole_3,
                    player.hole_4,
                    player.hole_5,
                    player.hole_6,
                    player.hole_7,
                    player.hole_8,
                    player.hole_9,
                    player.hole_10,
                    player.hole_11,
                    player.hole_12,
                    player.hole_13,
                    player.hole_14,
                    player.hole_15,
                    player.hole_16,
                    player.hole_17,
                    player.hole_18,
                ],
                backgroundColor: 
                '#AD35BA',
                borderColor: [
                    '#AD35BA'
                ],
                borderWidth: 2,
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(173, 53, 186, 0.1)"
            }
            }),
           
            
            //         [
            //     {
            //         label: 'Player 1 Scores',
            //         data: [
            //         ],
            //         backgroundColor: 
            //         '#AD35BA',
            //         borderColor: [
            //             '#AD35BA'
            //         ],
            //         borderWidth: 2,
            //         pointBorderColor: "#fff",
            //         pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
            //     },
            //     {
            //         label: 'Player 2 Scores',
            //         data: [
            //         ],
            //         backgroundColor: 
            //         '#AD35BA',
            //         borderColor: [
            //             '#AD35BA'
            //         ],
            //         borderWidth: 2,
            //         pointBorderColor: "#fff",
            //         pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
            //     }
            // ]
        }
    }

    componentDidMount(){
        console.log(this.refs.myLineChart);
        this.initializeChart();
       
    }

    chartData=()=>{
        this.initializeChart();
        // for (let i = 0; i < this.props.playerReducer.length; i++) {
        //     this.setState({
        //         chartData:{
        //             labels:[
        //                 ...this.state.chartData.labels, 'Player'[i]+1
        //             ]
        //         }
        //     })
        // };

        
        // let newChartData = this.state.chartData;

        // for (let i = 0; i < this.props.playerReducer.length; i++) {
        //     this.props.currentGameReducer[i].map(()=>{


        //     })


        //     const element = newChartData.datasets[i];
        //     element.label = 'Player'[i+1];
        //     element.data = this.props.currentGameReducer[i];
        //     this.setState({
        //         newChartData
        //     })
        // };
    }


    
    initializeChart=() => {
        // console.log(this.state.chartData.datasets[0].backgroundColor);
        let el = ReactDOM.findDOMNode(this.refs.myLineChart);
        console.log(el);
        let ctxL = el.getContext("2d");
        let gradientFill = ctxL.createLinearGradient(0, 0, 0, 290);
        gradientFill.addColorStop(0, "rgba(173, 53, 186, 1)");
        gradientFill.addColorStop(1, "rgba(173, 53, 186, 0.1)");
        let newChartData = this.state.chartData;
        for (let i = 0; i < newChartData.datasets.length; i++) {
            const element = newChartData.datasets[i];
            element.backgroundColor = gradientFill;
            this.setState({
                newChartData,
            });
        }
        // newChartData.datasets[0].backgroundColor = gradientFill;
        // this.setState({
        //     newChartData,
        // });
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

export default connect(mapStateToProps)(SummaryChart);
