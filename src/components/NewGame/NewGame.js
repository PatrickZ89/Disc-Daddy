import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import moment from 'moment';


class NewGame extends Component {

    state = [{
        newPlayer: '',
    }]

    handleNameChange = event => {
        this.setState({
            newPlayer: event.target.value,
        });
    };

    addPlayer = () => {
        console.log('Adding player to Database!')
        this.props.dispatch({ type: 'ADD_PLAYER' , payload: this.state})
        this.setState({
            newPlayer: '',
        });
    };

    newGame = () => {    
        let gameID = (this.props.disc[this.props.disc.length-1].game_id)+1; 
        let time = moment().format();
        // 'MMMM Do YYYY, h:mm:ss a'
        for (let i = 0; i < this.props.playerReducer.length; i++) {

        let playerID=this.props.playerReducer[i].id;
        let gameData={gameID:gameID, time:time, courseID: 1, playerID:playerID}
        this.props.dispatch({ type: 'POST_GAMEDATA', payload: gameData })
        console.log('gameData:', gameData);
        };

        let path = `score-input`;
        this.props.history.push(path)
    };

    componentDidMount() {
        console.log('Page mounted');
        this.props.dispatch({ type: 'FETCH_GAME' })
        this.props.dispatch({ type: 'FETCH_PLAYER' })
    };

    removePlayer = (event) => {
        this.props.dispatch({ type: 'REMOVE_PLAYER', payload: event.target.value })
    }

  render() {
    return (
      <div>
          <h1>Game Setup</h1>
          <h2>Course Selected: Kaposia</h2>
          <h3>Players:</h3>
          <ul>
              {this.props.playerReducer.map((player, i) => 
                <li key={i}>{player.name} <button value={player.id} onClick={this.removePlayer}>remove</button></li> )}
          </ul>
          <h3>Add a New Player</h3>
          <input type='text' placeholder="New Player" value={this.state.newPlayer} onChange={this.handleNameChange} />
          <Button onClick={this.addPlayer} variant="contained" color="primary">Add Player</Button>
          <p>
          <Button onClick={this.newGame} variant="contained" color="primary">Start Game</Button>
          </p>
      </div>
    );
  }
}

const mapStateToProps = reduxState => (
  reduxState
);

export default connect(mapStateToProps)(NewGame);