import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import GameTable from '../GameTable/GameTable';

class HolePage8 extends Component {

    state = []


    componentDidMount() {
        console.log('Page mounted');
        // this.props.dispatch({ type: 'FETCH_GAME' });
        // fetching players, and setting default state for each player
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
        let path = `hole-page7`;
    this.props.history.push(path)
    }
    nextHole = () => {
        // if gameID does not exist in reducer, set to last game created's ID
        if(!this.props.gameIDReducer){
            let gameID = (this.props.disc[this.props.disc.length-1].game_id); 
        this.props.dispatch({ type: 'SET_GAMEID', payload: gameID });
        }
        //assembling game data for sending
        let gameData;
        for (let i = 0; i < this.props.playerReducer.length; i++) {
            let score = this.state[i]+this.props.currentGameReducer[i].score;
            let playerID=this.props.playerReducer[i].id;
            gameData={strokes:this.state[i], score: score, playerID:playerID, gameID: this.props.gameIDReducer, hole:'hole_8'}
            
            this.props.dispatch({ type: 'POST_SCORE', payload: gameData })
        };
        // this.props.dispatch({ type: 'SET_SCORE', payload: this.state })
        let path = `hole-page9`;
        this.props.history.push(path)
    }

    render() {

        return (
            <div>
                <h1>Input Scores</h1>
                <h2>Hole 8</h2>

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

export default connect(mapStateToProps)(HolePage8);