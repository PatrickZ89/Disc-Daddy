import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Disc Daddy</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link circleBehind" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the New Game page if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link circleBehind" to="/new-game">
            New Game
          </Link>
        </>
      )}
      {/* Score Input Page */}
      {props.user.id && (
        <>
          <Link className="nav-link circleBehind" to="/score-input">
            Score Input
          </Link>
        </>
      )}
      {/* Game Summary Page */}
      {props.user.id && (
        <>
          <Link className="nav-link circleBehind" to="/game-summary">
            Game Summary
          </Link>
        </>
      )}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link circleBehind" to="/info">
            Game History
          </Link>
          <Link className="nav-link circleBehind" to="/about">
            Map
      </Link>
          <button
            className="nav-link"
            onClick={() => props.dispatch({ type: 'LOGOUT' })}
          >
            Log Out
          </button>
        </>
      )}
      {/* Always show this link since the about page is not protected */}

    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
