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

function* discSaga() {
  yield takeLatest('FETCH_GAME', fetchGame);
  yield takeLatest('FETCH_PLAYER', fetchPlayer);
  yield takeLatest('ADD_PLAYER', postPlayer);
  yield takeLatest('REMOVE_PLAYER', removePlayer);
}

export default discSaga;

