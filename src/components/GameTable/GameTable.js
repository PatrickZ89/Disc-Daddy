import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CurrentGame from '../CurrentGame/CurrentGame';

// class GameTable extends Component {

//     render() {

//         return (
//             <div>
//                 <table>
//                     <thead>
//                         <tr><th>Hole 1</th><th>Hole 2</th><th>Hole 3</th><th>Hole 4</th><th>Hole 5</th><th>Hole 6</th><th>Hole 7</th><th>Hole 8</th><th>Hole 9</th><th>Hole 10</th><th>Hole 11</th><th>Hole 12</th><th>Hole 13</th><th>Hole 14</th><th>Hole 15</th><th>Hole 16</th><th>Hole 17</th><th>Hole 18</th><th>Score</th><th>Player</th></tr>
//                     </thead>
//                     <tbody>
//                         {this.props.currentGameReducer.map((item, i) => {
//                             return (<CurrentGame key={i} item={item} />);
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }


// export default connect(mapStateToProps)(GameTable);



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
  
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
  
class GameTable extends Component {
    render() {

    const { classes } = this.props;

    return (
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
    );
  }
}
  GameTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
const mapStateToProps = reduxState => (
    reduxState
);

export default withStyles(styles)(connect(mapStateToProps)(GameTable));