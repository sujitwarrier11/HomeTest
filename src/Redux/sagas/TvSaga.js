import { put, select } from 'redux-saga/effects';
import httpRequest from '@root/Utilities/httpRequest';
import { setTvlist, setPagination, setDetails, setPage } from '@root/src/Redux/ActionCreators';


export function* getTvList(action) {
    const { pageNo, pagination } = action.payload;
    const {page} = yield select(state => state);
    if (!pagination || pagination.totalPages >= pageNo && (!page || pageNo>page)) {
        const response = yield httpRequest({
            method: 'GET',
            url: `https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=${pageNo}&perPage=20`,
            data: {},
            headers: {}
        });
        yield put(setPage(pageNo));
        yield put(setTvlist(response.data.data.filter(item => item.type === 'Multi-Title-Manual-Curation')));
        if (!pagination) {
            yield put(setPagination(response.data.pagination));
        }
    }

}

export function* getTvDetails(action) {
    const { id } = action.payload;
    const { details } = yield select(state => state);
    if (!details || !details[id]) {
        const response = yield httpRequest({
            method: 'GET',
            url: ` https://cdn-discover.hooq.tv/v1.2/discover/titles/${id}`,
            data: {},
            headers: {}
        });
        console.log("details", response.data.data);
        yield put(setDetails(response.data.data));
    }



}