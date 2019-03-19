import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class NewGame extends Component {

    state = {
        newPlayer: '',
      };

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
        let path = `score-input`;
    this.props.history.push(path)
    };

    componentDidMount() {
        console.log('Page mounted');
        this.props.dispatch({ type: 'FETCH_GAME' })
        this.props.dispatch({ type: 'FETCH_PLAYER' })
      };

      removePlayer = (event) => {
        console.log(event.target.value )
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
                <li key={i}>{player.username} <button value={player.id} onClick={this.removePlayer}>remove</button></li> )}
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