import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RecentGame.css';


class RecentGame extends Component {
    // removeFromList = (event) => {
    //     console.log(event.target.value )
    //     this.props.dispatch({ type: 'REMOVE', payload: event.target.value })
    // }
    render() {
       
        return (
            <tr className="shelf-item">
                <td>{this.props.item.score}</td>
                <td>{this.props.item.hole_1}</td>
                <td>{this.props.item.hole_2}</td>
                <td>{this.props.item.hole_3}</td>
                <td>{this.props.item.hole_4}</td>
                <td>{this.props.item.hole_5}</td>
                <td>{this.props.item.hole_6}</td>
                <td>{this.props.item.hole_7}</td>
                <td>{this.props.item.hole_8}</td>
                <td>{this.props.item.hole_9}</td>
                <td>{this.props.item.hole_10}</td>
                <td>{this.props.item.hole_11}</td>
                <td>{this.props.item.hole_12}</td>
                <td>{this.props.item.hole_13}</td>
                <td>{this.props.item.hole_14}</td>
                <td>{this.props.item.hole_15}</td>
                <td>{this.props.item.hole_16}</td>
                <td>{this.props.item.hole_17}</td>
                <td>{this.props.item.hole_18}</td>
                <td>{this.props.item.username}</td>
                <td><button value={this.props.item.id} onClick={this.removeFromList}>Delete</button></td>
            </tr>  
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(RecentGame);
