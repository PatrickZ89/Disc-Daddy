import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class HolePage8 extends Component {

    state = []


    componentDidMount() {
        console.log('Page mounted');
        this.props.dispatch({ type: 'FETCH_PLAYER' })
    };

    handleAddClick = (playerNumber) => () => {
        if (!this.state[playerNumber]) {
            this.setState({
                [playerNumber]: 3,
            })
        }
        if (this.state[playerNumber]) {

            let newScore = this.state[playerNumber] + 1;
            this.setState({
                [playerNumber]: newScore,
            })
        }
    }

    handleMinusClick = (playerNumber) => () => {
        if (!this.state[playerNumber]) {
            this.setState({
                [playerNumber]: 2,
            })
        }
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
        this.props.dispatch({ type: 'SET_SCORE', payload: this.state })
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

export default connect(mapStateToProps)(HolePage8);