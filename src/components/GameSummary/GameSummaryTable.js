import React, { Component } from 'react';
import { connect } from 'react-redux';


class GameSummaryTable extends Component {

    // removeFromList = (event) => {
    //     console.log(event.target.value )
    //     this.props.dispatch({ type: 'REMOVE', payload: event.target.value })
    // }

    componentDidMount(){
        console.log('Working?', this.props.item);
    }

    scoreTotal=()=>{
        let total = 0;
        for (let i = 0; i < 18; i++) {
            total = total + this.props.item[i];
        }
        console.log('Total Score:', total);
        return total
    }

    render() {
      
        return (
            <tr className="score-item">
                <td>{this.props.item[0]}</td>
                <td>{this.props.item[1]}</td> 
                <td>{this.props.item[2]}</td>
                <td>{this.props.item[3]}</td>
                <td>{this.props.item[4]}</td>
                <td>{this.props.item[5]}</td>
                <td>{this.props.item[6]}</td>
                <td>{this.props.item[7]}</td>
                <td>{this.props.item[8]}</td>
                <td>{this.props.item[9]}</td>
                <td>{this.props.item[10]}</td>
                <td>{this.props.item[11]}</td>
                <td>{this.props.item[12]}</td>
                <td>{this.props.item[13]}</td>
                <td>{this.props.item[14]}</td>
                <td>{this.props.item[15]}</td>
                <td>{this.props.item[16]}</td>
                <td>{this.props.item[17]}</td>
                <td>{this.props.item[18]}</td>
                {/* <td>{this.props.playerReducer[this.props.key].username}</td> */}
                <td>{this.scoreTotal()}</td>
            </tr>  
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(GameSummaryTable);
