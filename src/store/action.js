export const WHAT_LIST_PAGE = 'WHAT_LIST_PAGE'
export const SET_CARD_LIST_PAGE = 'SET_CARD_LIST_PAGE'
export const SELECT_POSITION_CARD_LIST = 'SELECT_POSITION_CARD_LIST'
export const SET_SELECT_PAGE_CARD_LIST = 'SET_SELECT_PAGE_CARD_LIST'
export const GET_CARD_LIST = 'GET_CARD_LIST'
export const SET_FILTER_ON = 'SET_FILTER_ON'
export const SET_FILTER_LIST = 'SET_FILTER_LIST'
export const INFO_MESSAGE = 'INFO_MESSAGE'
export const LIST_CARD_POSITION_INFO = 'LIST_CARD_POSITION_INFO'


export const whatListPage = (page) => ({
    type: WHAT_LIST_PAGE, page
})
export const infoMessage = (message) => ({
    type: INFO_MESSAGE, message
})
export const setCardListPage = (page) => ({
    type: SET_CARD_LIST_PAGE, page
})
export const selectPositionCardList = (position) => ({
    type: SELECT_POSITION_CARD_LIST, position
})
export const setFilterOn = (page) => ({
    type: SET_FILTER_ON, page
})
export const setFilterList = (value) => ({
    type: SET_FILTER_LIST, value
})
export const setSelectPageOnCardList = (page) => ({
    type: SET_SELECT_PAGE_CARD_LIST, page
})
export const getCardList = (list) => ({
    type: GET_CARD_LIST, list
})
export const listCardPositionInfo = (info) => ({
    type: LIST_CARD_POSITION_INFO, info
})

