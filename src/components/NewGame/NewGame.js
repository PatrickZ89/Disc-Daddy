import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import moment from 'moment';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

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
        this.props.dispatch({ type: 'SET_GAMEID', payload: gameID });

        let time = moment().format();

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

    const { classes } = this.props;

    return (
      <div>
          <h1>Game Setup</h1>
          <h2>Course Selected: Kaposia</h2>
          <h3>Players:</h3>
          <ul>
              {this.props.playerReducer.map((player, i) => 
                <li key={i}>{player.name} <button value={player.id} onClick={this.removePlayer}>remove</button></li> )}
          </ul>
          <div >
          <h3>Add a New Player</h3>
          <TextField
          className="dark"
          id="standard-name"
          label="Name"
        //   className={classes.textField}
          value={this.state.newPlayer}
          onChange={this.handleNameChange}
          margin="normal"
          color="primary"
          autoComplete="off"
            />
          </div>
          {/* <input type='text' placeholder="New Player" value={this.state.newPlayer} onChange={this.handleNameChange} /> */}
          <div>
          <Button onClick={this.addPlayer} variant="contained" color="primary">Add Player</Button>
          </div>
          <p>
          <Button onClick={this.newGame} variant="contained" color="primary">Start Game</Button>
          </p>
      </div>
    );
  }
}

NewGame.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => (
  reduxState
);

export default withStyles(styles)(connect(mapStateToProps)(NewGame));