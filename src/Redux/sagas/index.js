import { takeLatest, all } from 'redux-saga/effects';
import { GET_TV_SHOWS } from '@root/src/Redux/constants';
import { getTvList } from '@root/src/Redux/sagas/TvSaga'

export default function* root() {
    yield all([
        takeLatest(GET_TV_SHOWS,getTvList)
    ]);
}