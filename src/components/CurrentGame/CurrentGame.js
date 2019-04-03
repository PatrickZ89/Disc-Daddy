import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CurrentGame.css';

// this component is no longer is use


class CurrentGame extends Component {

    
   

    render() {
       
        return (
            <tr className="score-item">
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
                <td>{this.props.item.score}</td>
                <td>{this.props.item.name}</td>
                {/* <td>
                {new Date(this.props.item.date).getMonth() + 1}/ 
                {new Date(this.props.item.date).getDate()}/
                {new Date(this.props.item.date).getFullYear()} 
                </td> */}
            </tr>
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(CurrentGame);
