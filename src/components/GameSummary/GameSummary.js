import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../Chart/Chart'

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

class GameSummary extends Component {

    componentDidMount() {
        console.log('Game Summary Page Mounted! Number of Players:', this.props.playerReducer.length);
        this.props.dispatch({ type: 'FETCH_CURRENT' })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <h1>
                    Game Summary
                </h1>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Player</TableCell>
                                <TableCell align="right">Hole 1</TableCell>
                                <TableCell align="right">Hole 2</TableCell>
                                <TableCell align="right">Hole 3</TableCell>
                                <TableCell align="right">Hole 4</TableCell>
                                <TableCell align="right">Hole 5</TableCell>
                                <TableCell align="right">Hole 6</TableCell>
                                <TableCell align="right">Hole 7</TableCell>
                                <TableCell align="right">Hole 8</TableCell>
                                <TableCell align="right">Hole 9</TableCell>
                                <TableCell align="right">Hole 10</TableCell>
                                <TableCell align="right">Hole 11</TableCell>
                                <TableCell align="right">Hole 12</TableCell>
                                <TableCell align="right">Hole 13</TableCell>
                                <TableCell align="right">Hole 14</TableCell>
                                <TableCell align="right">Hole 15</TableCell>
                                <TableCell align="right">Hole 16</TableCell>
                                <TableCell align="right">Hole 17</TableCell>
                                <TableCell align="right">Hole 18</TableCell>
                                <TableCell align="right">Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.currentGameReducer.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.hole_1}</TableCell>
                                    <TableCell align="right">{row.hole_2}</TableCell>
                                    <TableCell align="right">{row.hole_3}</TableCell>
                                    <TableCell align="right">{row.hole_4}</TableCell>
                                    <TableCell align="right">{row.hole_5}</TableCell>
                                    <TableCell align="right">{row.hole_6}</TableCell>
                                    <TableCell align="right">{row.hole_7}</TableCell>
                                    <TableCell align="right">{row.hole_8}</TableCell>
                                    <TableCell align="right">{row.hole_9}</TableCell>
                                    <TableCell align="right">{row.hole_10}</TableCell>
                                    <TableCell align="right">{row.hole_11}</TableCell>
                                    <TableCell align="right">{row.hole_12}</TableCell>
                                    <TableCell align="right">{row.hole_13}</TableCell>
                                    <TableCell align="right">{row.hole_14}</TableCell>
                                    <TableCell align="right">{row.hole_15}</TableCell>
                                    <TableCell align="right">{row.hole_16}</TableCell>
                                    <TableCell align="right">{row.hole_17}</TableCell>
                                    <TableCell align="right">{row.hole_18}</TableCell>
                                    <TableCell align="right">{row.score}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Chart />
            </div>
        );
    }
}

GameSummary.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => (
    reduxState
);

export default withStyles(styles)(connect(mapStateToProps)(GameSummary));




