import { put, call, select } from 'redux-saga/effects';
import httpRequest from '@root/Utilities/httpRequest'

export function* getTvList(action){
  const response = yield  httpRequest({
        method: 'GET',
        url: `https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=${action.payload.pageNo}&perPage=20`,
        data: { },
        headers: { }
      });
}