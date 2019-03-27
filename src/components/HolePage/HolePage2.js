import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import GameTable from '../GameTable/GameTable';

class HolePage2 extends Component {

    state = [
    ]

     componentDidMount() {
        // if (!this.props.gameIDReducer) {
        //     let promise = this.props.dispatch({ type: 'FETCH_GAME' });
        //     let gameID = (this.props.disc[this.props.disc.length - 1].game_id);
        //     this.props.dispatch({ type: 'SET_GAMEID', payload: gameID });
        // }
        // let gameID = (this.props.disc[this.props.disc.length - 1].game_id);
        // let gameID = this.props.gameIDReducer;
        // this.props.dispatch({ type: 'FETCH_CURRENT', payload: gameID });
        // console.log('Score Reducer:', this.props);
        // console.log(this.props.playerReducer.length)
        this.props.dispatch({ type: 'FETCH_PLAYER' });
        console.log('# of players:', this.props.playerReducer.length)
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
        axios.post('/api/disc/game', this.state[playerNumber]);
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
        let path = `score-input`;
        this.props.history.push(path)
    }

    nextHole = () => {
        let gameData;
        
        for (let i = 0; i < this.props.playerReducer.length; i++) {
            let score = this.state[i]+this.props.currentGameReducer[i].score;
            let playerID = this.props.playerReducer[i].id;
            gameData = { strokes: this.state[i], score: score, playerID: playerID, gameID: this.props.gameIDReducer, hole: 'hole_2' }
            console.log('Game Data:', gameData)
            this.props.dispatch({ type: 'POST_SCORE', payload: gameData })
        };
        this.props.dispatch({ type: 'SET_SCORE', payload: this.state })
        let path = `hole-page3`;
        this.props.history.push(path)
    }
   

    // scoreSpreader = () => {
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


    render() {

        return (
            <div>
                <h1>Input Scores</h1>
                <h2>Hole 2</h2>

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
                                <td>{player.name}</td>
                                <td><button onClick={this.handleMinusClick(i)}>Minus</button></td>
                                <td>{this.state[i]}</td>
                                <td><button onClick={this.handleAddClick(i)}>Add</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Button onClick={this.previousHole} variant="contained" color="primary">Previous Hole</Button>
                <Button onClick={this.nextHole} variant="contained" color="primary">Next Hole</Button>
                <GameTable />
            </div>
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(HolePage2);