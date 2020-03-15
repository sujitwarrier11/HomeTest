import { takeLatest, all,takeEvery } from 'redux-saga/effects';
import { GET_TV_SHOWS, GET_DETAILS } from '@root/src/Redux/constants';
import { getTvList, getTvDetails } from '@root/src/Redux/sagas/TvSaga';
import "regenerator-runtime/runtime";

export default function* root() {
    yield all([
        takeEvery(GET_TV_SHOWS, getTvList),
        takeLatest(GET_DETAILS, getTvDetails)
    ]);
}