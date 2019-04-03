import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import GameTable from '../GameTable/GameTable';
import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class ScoreInput extends Component {

    state = {
        currentHole: 1,
        isOpen: false,
    }

    componentDidMount() {
        console.log('Page mounted');
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
        // If statement checks if playerNumber is truthy, keeping playerNumber positive
        if (this.state[playerNumber]) {
            let newScore = this.state[playerNumber] - 1;
            this.setState({
                [playerNumber]: newScore,
            })
        }
    }

    previousPage = () => {
        if (this.state.currentHole === 1) {
            let path = `new-game`;
            this.props.history.push(path);
        }
        this.setState({
            currentHole: this.state.currentHole - 1,
        })
    }


    nextHole = () => {

        // assembling game data for POST
        let gameData;
        for (let i = 0; i < this.props.playerReducer.length; i++) {
            let playerID = this.props.playerReducer[i].id;
            let score;
            if (!this.props.currentGameReducer[i]) {
                score = this.state[i];
            }
            else if (this.props.currentGameReducer[i].score) {
                score = this.state[i] + this.props.currentGameReducer[i].score;
            }

            gameData = { strokes: this.state[i], score: score, playerID: playerID, gameID: this.props.gameIDReducer, hole: 'hole_' + this.state.currentHole }
            // adding score to the database
            this.props.dispatch({ type: 'POST_SCORE', payload: gameData })
        };
        if (this.state.currentHole === 18) {
            let path = `game-summary`;
            this.props.history.push(path);
        }
        this.setState({
            currentHole: this.state.currentHole + 1,
        })
        // resetting default strokes to PAR (3)
        for (let i = 0; i < this.props.playerReducer.length; i++) {
            this.setState({
                [i]: 3,
            })
        };
    }

    open = () => {
        console.log("hover time")
        this.setState({
            isOpen: true,
        })
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <h1>Score Input</h1>
                <h2>Hole {this.state.currentHole}</h2>

                <Paper className={classes.root}>
                    <Table className={classes.table} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Player</TableCell>
                                <TableCell align="right">Subtract</TableCell>
                                <TableCell align="right">Strokes</TableCell>
                                <TableCell align="right">Add</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.playerReducer.map((player, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {player.name}
                                    </TableCell>
                                    <TableCell align="right"><Button onClick={this.handleMinusClick(i)}>-</Button></TableCell>
                                    <TableCell align="right">{this.state[i]}</TableCell>
                                    <TableCell align="right"><Button onClick={this.handleAddClick(i)}>+</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

                <Button onClick={this.previousPage} onHover={this.open} variant="contained" color="primary">
                    <Burger direction="left" isOpen={true} /></Button>
                <Button onClick={this.nextHole} variant="contained" color="primary">
                    <Burger onClick={this.open} direction="right" isOpen={true} /></Button>
                <GameTable />
            </div>
        );
    }
}

ScoreInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => (
    reduxState
);

export default withStyles(styles)(connect(mapStateToProps)(ScoreInput));