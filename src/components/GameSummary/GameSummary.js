import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameSummaryTable from './GameSummaryTable'
import Chart from '../Chart/Chart'

class GameSummary extends Component {

  componentDidMount() {
    console.log('Game Summary Page Mounted!');
  }

  render() {
    return (
      <div>
        <p>
          Game Summary
        </p>
        <table>
          <thead>
            <tr><th>Player</th><th>Hole 1</th><th>Hole 2</th><th>Hole 3</th><th>Hole 4</th><th>Hole 5</th><th>Hole 6</th><th>Hole 7</th><th>Hole 8</th><th>Hole 9</th><th>Hole 10</th><th>Hole 11</th><th>Hole 12</th><th>Hole 13</th><th>Hole 14</th><th>Hole 15</th><th>Hole 16</th><th>Hole 17</th><th>Hole 18</th><th>Score</th></tr>
          </thead>
          <tbody>
            {this.props.scoreReducer.map((item, i) => {
              return (<GameSummaryTable key={i} item={item} />);
            })}
          </tbody>
        </table>
        <Chart />
      </div>
    );
  }
}

const mapStateToProps = reduxState => (
  reduxState
);

export default connect(mapStateToProps)(GameSummary);