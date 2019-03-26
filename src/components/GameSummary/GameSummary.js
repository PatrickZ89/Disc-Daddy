import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../Chart/Chart'
import Button from '@material-ui/core/Button';
import CurrentGame from '../CurrentGame/CurrentGame';


class GameSummary extends Component {

  componentDidMount() {
    console.log('Game Summary Page Mounted! Number of Players:', this.props.playerReducer.length);
    // this.scoreSpreader();
  }
  

//   spreading the score from an array of 18 objects with player scores to a separate array 
//   of scores for each player, and pushing the player ID to the end of each array

//   scoreSpreader = () => {
//     for (let i = 0; i < this.props.playerReducer.length; i++) {
//         const scoreArray = this.props.scoreReducer;
//         const playerScoreArray=[];
//         scoreArray.map((scoreItem) => {
//             playerScoreArray.push(scoreItem[i])
//           });
//           playerScoreArray.push(this.props.playerReducer[i].id)
//           console.log('player scoreArray:', playerScoreArray);
//         this.props.dispatch({ type: 'SET_SUMMARY', payload:  playerScoreArray});
//     }
//   }

  exportData = () => {
    console.log('Exporting Data to the Database!')
    this.props.dispatch({ type: 'POST_GAME', payload: this.props.summaryReducer});
  }


  render() {
    return (
      <div>
        <p>
          Game Summary
        </p>
        <table>
          <thead>
            <tr><th>Hole 1</th><th>Hole 2</th><th>Hole 3</th><th>Hole 4</th><th>Hole 5</th><th>Hole 6</th><th>Hole 7</th><th>Hole 8</th><th>Hole 9</th><th>Hole 10</th><th>Hole 11</th><th>Hole 12</th><th>Hole 13</th><th>Hole 14</th><th>Hole 15</th><th>Hole 16</th><th>Hole 17</th><th>Hole 18</th><th>Score</th><th>Player</th></tr>
          </thead>
          <tbody>
            {this.props.currentGameReducer.map((item, i) => {
              return (<CurrentGame key={i} item={item} />);
            })}
          </tbody>
        </table>
        <Button onClick={this.exportData} variant="contained" color="primary">Export Data</Button>
        <Chart />
      </div>
    );
  }
}

const mapStateToProps = reduxState => (
  reduxState
);

export default connect(mapStateToProps)(GameSummary);