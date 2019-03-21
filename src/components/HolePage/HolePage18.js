import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class HolePage2 extends Component {

    state = []


    componentDidMount() {

        console.log('Props:', this.props.scoreReducer);
        this.props.dispatch({ type: 'FETCH_PLAYER' });
        for (let i = 0; i < this.props.playerReducer.length; i++) {
            this.setState({
                [i]: 3,
            })
        };
    };

    handleAddClick = (playerNumber) => () => {
        let newScore = this.state[playerNumber] + 1;
        this.setState({
            [playerNumber]: newScore,
        })
    }

    handleMinusClick = (playerNumber) => () => {
        // If statement checks if playerNumber is truthy, in doing so, keeping playerNumber positive
        if (this.state[playerNumber]) {
            let newScore = this.state[playerNumber] - 1;
            this.setState({
                [playerNumber]: newScore,
            })
        }
    }

    previousHole = () => {
        let path = `hole-page17`;
        this.props.history.push(path)
    }

    nextHole = () => {
        this.props.dispatch({ type: 'SET_SCORE', payload: this.state })
        let path = `game-summary`;
        this.props.history.push(path);
        this.scoreSpreader();
    }
      //spreading the score from an array of 18 objects with player scores to a separate array of scores for each player
  scoreSpreader = () => {
    for (let i = 0; i < this.props.playerReducer.length; i++) {
        const scoreArray = this.props.scoreReducer;
        const playerScoreArray=[];
        scoreArray.map((scoreItem) => {
            playerScoreArray.push(scoreItem[i])
          });
          playerScoreArray.push(this.props.playerReducer[i].id)
          console.log('player scoreArray:', playerScoreArray);
        this.props.dispatch({ type: 'SET_SUMMARY', payload:  playerScoreArray});
    }
  }

    render() {

        return (
            <div>
                <h1>Input Scores</h1>
                <h2>Hole 18</h2>

                <table >
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Minus</th>
                            <th>Strokes</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.playerReducer.map((player, i) =>
                            <tr key={i}>
                                <td>{player.username}</td>
                                <td><button onClick={this.handleMinusClick(i)}>Minus</button></td>
                                <td>{this.state[i]}</td>
                                <td><button onClick={this.handleAddClick(i)}>Add</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Button onClick={this.previousHole} variant="contained" color="primary">Previous Hole</Button>
                <Button onClick={this.nextHole} variant="contained" color="primary">Next Hole</Button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(HolePage2);