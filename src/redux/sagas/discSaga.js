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

function* discSaga() {
  yield takeLatest('FETCH_GAME', fetchGame);
}

export default discSaga;

