import {
    SEARCH_FILTER_CARD_LIST,
    GET_CARD_LIST,
} from "../store/action";

import {put, takeLatest} from 'redux-saga/effects';

/**saga getPromo */
function* searchFilterCardList(action) {
    console.log('getCardList', action)
    // let userToken = localStorage.getItem('currentUserToken');
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': userToken,
        },
        body: JSON.stringify(action.value)
    }
    let response = yield fetch('http://192.168.116.112:10000/dim/goods', options)
    let list = []
    if(response.status === 200){
        list = yield response.json()
    } else {
        console.log('error')
    }
    yield put({type: GET_CARD_LIST, list: list});
}

export function* fetchCardListWatcher() {
    yield takeLatest(SEARCH_FILTER_CARD_LIST, searchFilterCardList)
}