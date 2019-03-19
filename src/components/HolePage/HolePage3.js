import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class HolePage3 extends Component {

    state = {
        players: '',
    }


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
        let path = `hole-page2`;
    this.props.history.push(path)
    }
    nextHole = () => {
        let path = `hole-page4`;
    this.props.history.push(path)
    }

    render() {

        return (
            <div>
                <h1>Input Scores</h1>
                <h2>Hole 3</h2>

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

export default connect(mapStateToProps)(HolePage3);