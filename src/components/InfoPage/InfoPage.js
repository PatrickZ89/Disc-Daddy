import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentGame from '../RecentGame/RecentGame'
import Chart from '../Chart/Chart'

class InfoPage extends Component {

  componentDidMount() {
    console.log('Page mounted');
    this.props.dispatch({ type: 'FETCH_GAME' })

  }

  componentDidCatch(){
    this.props.dispatch({ type: 'FETCH_GAME' })
  }


  render() {

    return (
      <div>
        <p>
          Recent Games
        </p>
        <table>
          <thead>
            <tr><th>Hole 1</th><th>Hole 2</th><th>Hole 3</th><th>Hole 4</th><th>Hole 5</th><th>Hole 6</th><th>Hole 7</th><th>Hole 8</th><th>Hole 9</th><th>Hole 10</th><th>Hole 11</th><th>Hole 12</th><th>Hole 13</th><th>Hole 14</th><th>Hole 15</th><th>Hole 16</th><th>Hole 17</th><th>Hole 18</th><th>Score</th><th>Player</th><th>Date</th></tr>
          </thead>
          <tbody>
            {this.props.disc.map((item, i) => {
              return (<RecentGame key={i} item={item} />);
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

export default connect(mapStateToProps)(InfoPage);