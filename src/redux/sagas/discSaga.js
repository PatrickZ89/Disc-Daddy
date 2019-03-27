import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchGame() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('api/disc', config);
    yield put({ type: 'SET_GAME', payload: response.data });
  } catch (error) {
    console.log('Game get request failed', error);
  }
}

function* fetchCurrent(action) {
    try {
        console.log('PAts payload action:', action.payload)
      const response = yield axios.get(`api/disc/current/${action.payload.gameID}`);
      console.log('PAts response:', response)
      yield put({ type: 'SET_CURRENT', payload: response.data });
    } catch (error) {
      console.log('Game get request failed', error);
    }
  }

function* fetchPlayer() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      const response = yield axios.get('api/disc/player', config);
      yield put({ type: 'SET_PLAYER', payload: response.data });
    } catch (error) {
      console.log('Game get request failed', error);
    }
  }

  function* postPlayer(action) {
    try {
      yield axios.post('/api/disc', action.payload );
      alert("Player Added to Database!")
      yield put({ type: 'FETCH_PLAYER'});
    } catch (error) {
      console.log('this was an error with the fetch- probably your fault');
      alert('Houston, we have a problem.');
  
    }
  }

  function* postGameData(action) {
    try {
    console.log('posting intial game data');
      yield axios.post('/api/disc/gamedata', action.payload );
    } catch (error) {
      console.log('this was an error with the post- probably your fault');
      alert('Houston, we have a problem.');
    }
  }
 


  function* removePlayer(action){
    console.log(action.payload)
    try {
      yield axios.delete(`api/disc/${action.payload}`)
      alert('Player Deleted from Database!')
      yield put({ type: 'FETCH_PLAYER' })
    } catch (error) {
      console.log('DELETE Error!', error)
      alert('Houston, We have a problem.')
    }
  }

  function* postGame(action) {
    try {
      yield axios.post('/api/disc/game', action.payload );
      alert("Adding Game to the Database!")
    //   yield put({ type: 'SET_GAME', payload: });
    } catch (error) {
      console.log('this was an error with the POST- probably your fault');
      alert('Houston, we have a problem.');
    }
  }

  function* postScore(action) {
    try {
      yield axios.post('/api/disc/score', action.payload );
      console.log("Adding Score to the Database!");
      yield put({ type: 'FETCH_CURRENT', payload: action.payload});
    } catch (error) {
      console.log('this was an error with the POST- probably your fault');
      alert('Houston, we have a problem.');
    }
  }

function* discSaga() {
  yield takeLatest('FETCH_GAME', fetchGame);
  yield takeLatest('FETCH_PLAYER', fetchPlayer);
  yield takeLatest('FETCH_CURRENT', fetchCurrent);
  yield takeLatest('ADD_PLAYER', postPlayer);
  yield takeLatest('REMOVE_PLAYER', removePlayer);
  yield takeLatest('POST_GAME', postGame);
  yield takeLatest('POST_GAMEDATA', postGameData);
  yield takeLatest('POST_SCORE', postScore);
}

export default discSaga;

