import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerInput from './PlayerInput';
import GameTable from '../GameTable/GameTable';

class ScoreInput extends Component {

    // state = []

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
    //     let path = `new-game`;
    // this.props.history.push(path)
    // }


    // nextHole = () => {
    //       // if gameID does not exist in reducer, set to last game created's ID
    //     // if(!this.props.gameIDReducer){
    //     //     this.props.dispatch({ type: 'FETCH_GAME' });
    //     //         let gameID = (this.props.disc[this.props.disc.length-1].game_id); 
    //     //         this.props.dispatch({ type: 'SET_GAMEID', payload: gameID });
            
    //     // }
    //     // assembling game data for POST
    //     let gameData;
    //     for (let i = 0; i < this.props.playerReducer.length; i++) {
    //         let playerID=this.props.playerReducer[i].id;
    //         gameData={strokes:this.state[i], score:this.state[i], playerID:playerID, gameID: this.props.gameIDReducer, hole:'hole_1'}
    //         // adding score to the database
    //         this.props.dispatch({ type: 'POST_SCORE', payload: gameData })
    //     };
        
    //     // this.props.dispatch({ type: 'SET_SCORE', payload: this.state })
    //     let path = `hole-page2`;
    //     this.props.history.push(path)
    // }

    render() {

        return (
            <div>
                <PlayerInput />
                <GameTable />
            </div>
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(ScoreInput);