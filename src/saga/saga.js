import {all} from 'redux-saga/effects';
import {fetchCardListWatcher} from "./sagaCardList";

export default function* rootSaga() {
    yield all([
        fetchCardListWatcher()
    ])
}
