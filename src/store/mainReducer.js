import {
    GET_CARD_LIST,
    SELECT_POSITION_CARD_LIST,
    SET_CARD_LIST_PAGE,
    WHAT_LIST_PAGE,
    GET_COUNT_CARD_LIST,
    SET_SELECT_PAGE_CARD_LIST,
    SET_FILTER_ON,
    INFO_MESSAGE,
} from "./action";

const initialState = {
    whatPageOpen: 'cardList',
    whatCardListPage: 'list',
    isFilter: '',
    positionCardList: null,
    cardList: [],
    countListProduct: [],
    selectedPageOnCardList: 1,
    textInfoMessage: ''
}
let message = ''

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case WHAT_LIST_PAGE:
            return {...state, whatPageOpen: action.page}
        case INFO_MESSAGE:
            return {...state, textInfoMessage: action.message}
        case SET_FILTER_ON:
            return {...state, isFilter: action.page}
        case GET_COUNT_CARD_LIST:
            let arr = state.countListProduct.slice()
            let num = Math.ceil(action.count?.quantity / 13)
            for (let i = 0; i < num; i++) {
                arr.push(i+1)
            }
            return {...state, countListProduct: arr}
        case SET_CARD_LIST_PAGE:
            return {...state, whatCardListPage: action.list}
        case GET_CARD_LIST:
            console.log('list', action)
            if(action.list.length<1) {
                message = 'Неудалось получить данные'
                return {...state, textInfoMessage: message}
            }
            message = ''
            return {...state, cardList: action.list, textInfoMessage: message}
        case SELECT_POSITION_CARD_LIST:
            return {...state, positionCardList: action.position}
        case SET_SELECT_PAGE_CARD_LIST:
            return {...state, selectedPageOnCardList: action.page}
        default:
            return state
    }
}