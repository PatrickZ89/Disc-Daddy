import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class PlayerInput extends Component {

    // state = {
    //     currentHole: 1,
    // }

    // componentDidMount() {
    //     console.log('Page mounted');
    //     this.props.dispatch({ type: 'FETCH_PLAYER' });
    //     for (let i = 0; i < this.props.playerReducer.length; i++) {
    //         this.setState({
    //             [i]: 3,
    //         })
    //     };
    // };


    // handleAddClick = (playerNumber) => () => {
    //         let newScore = this.state[playerNumber] + 1;
    //         this.setState({
    //             [playerNumber]: newScore,
    //         })
    // }

    // handleMinusClick = (playerNumber) => () => {
    //     // If statement checks if playerNumber is truthy, keeping playerNumber positive
    //     if (this.state[playerNumber]) {
    //         let newScore = this.state[playerNumber] - 1;
    //         this.setState({
    //             [playerNumber]: newScore,
    //         })
    //     }
    // }

    // previousPage = () => {
    //     if(this.state.currentHole===1){
    //         let path = `new-game`;
    //         this.props.history.push(path);
    //     }
    //     this.setState({
    //         currentHole: this.state.currentHole-1,
    //     })
    // }


    // nextHole = () => {
       
    //     // assembling game data for POST
    //     let gameData;
    //     for (let i = 0; i < this.props.playerReducer.length; i++) {
    //         let playerID=this.props.playerReducer[i].id;
    //         let score;
    //         if (!this.props.currentGameReducer[i]) {
    //              score = this.state[i];
    //         }
    //         else if (this.props.currentGameReducer[i].score){
    //             score = this.state[i]+this.props.currentGameReducer[i].score;
    //         }
            
    //         gameData={strokes:this.state[i], score:score, playerID:playerID, gameID: this.props.gameIDReducer, hole:'hole_'+this.state.currentHole}
    //         // adding score to the database
    //         this.props.dispatch({ type: 'POST_SCORE', payload: gameData })
    //     };
    //     if(this.state.currentHole===18){
    //         let path = `game-summary`;
    //         this.props.history.push(path);
    //     }
    //     this.setState({
    //         currentHole: this.state.currentHole+1,
    //     })
    //     // resetting default strokes to PAR (3)
    //     for (let i = 0; i < this.props.playerReducer.length; i++) {
    //         this.setState({
    //             [i]: 3,
    //         })
    //     };
    // }
    

    render() {

        return (
            <div>
                <h1>Input Scores</h1>
                <h2>Hole {this.props.currentHole}</h2>
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
                                <td><button onClick={this.props.handleMinusClick(i)}>Minus</button></td>
                                <td>{this.props.state[i]}</td>
                                <td><button onClick={this.props.handleAddClick(i)}>Add</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Button onClick={this.props.previousPage} variant="contained" color="primary">Game Setup</Button>
                <Button onClick={this.nextHole} variant="contained" color="primary">Next Hole</Button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(PlayerInput);