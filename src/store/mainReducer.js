import {
    GET_CARD_LIST,
    SELECT_POSITION_CARD_LIST,
    SET_CARD_LIST_PAGE,
    WHAT_LIST_PAGE,
    SET_SELECT_PAGE_CARD_LIST,
    SET_FILTER_ON,
    INFO_MESSAGE,
    LIST_CARD_POSITION_INFO,
    SET_FILTER_LIST,
} from "./action";
import {bufferConvert, cardListCurrent} from "./helpFunction";

const initialState = {
    whatPageOpen: 'cardList',
    whatCardListPage: 'list',
    isFilter: '',
    isFilterList: [],
    positionCardList: null,
    cardPositionInfo: null,
    cardList: [],
    cardListError: '',
    countListProduct: [],
    selectedPageOnCardList: 1,
    textInfoMessage: ''
}
let message = ''

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case WHAT_LIST_PAGE:
            return {...state, whatPageOpen: action.page}
        case SET_FILTER_LIST:
            return {...state, isFilterList: action.value}
        case INFO_MESSAGE:
            return {...state, textInfoMessage: action.message}
        case SET_FILTER_ON:
            return {...state, isFilter: action.page}
        case SET_CARD_LIST_PAGE:
            return {...state, whatCardListPage: action.page}
        case GET_CARD_LIST:
            console.log(action.list)
            if (!action.list) {
                message = 'Неудалось получить данные'
                return {...state, textInfoMessage: message, cardListError: message}
            }
            let array = []
            let number = Math.ceil(action.list?.quantity / 13)
            for (let i = 0; i < number; i++) array.push(i + 1)
            message = ''
            return {...state, cardList: action.list?.payload, countListProduct: array, textInfoMessage: message}
        case SELECT_POSITION_CARD_LIST:
            console.log(action?.position.payload)
            let nameColumnsPosition = state.cardPositionInfo.main.filter(el => el.id !== 173).concat(state.cardPositionInfo.bonus, state.cardPositionInfo.scratch)
            for (let i = 0; i < nameColumnsPosition.length; i++) {

                let value = action.position?.payload[0][nameColumnsPosition[i].columnNameForSite]
                if (nameColumnsPosition[i].orderNumber === 41) value = action.position?.payload[0].sk_Brand + '\n' + ('' && action.position?.payload[0].sk_BrandRU)
                else if (nameColumnsPosition[i].orderNumber === 39) {
                    value = action.position?.payload[0].SkratchGeoCountryNameRu + '\n'
                        + ('' && action.position?.payload[0].SkratchGeoCountryNameUa)
                        + ('' && action.position?.payload[0].SkratchGeoCountryNameUa)
                }
                else if (value?.type) value = bufferConvert(value.data)
                else if (nameColumnsPosition[i].orderNumber === 37) value = action.position?.payload[0].TemperatureFrom + ' - ' + action.position?.payload[0].TemperatureTo
                else if (Array.isArray(value)) value = value.map(el => cardListCurrent(el) + '\n')
                else value = cardListCurrent(value);
                nameColumnsPosition[i].value = value;
            }
            let orderDuplicate = [1039, 999, 410, 1037]
            nameColumnsPosition = nameColumnsPosition.sort((a, b) => a.orderNumber - b.orderNumber).filter(el => !orderDuplicate.includes(el.orderNumber))
            return {...state, positionCardList: nameColumnsPosition}
        case SET_SELECT_PAGE_CARD_LIST:
            return {...state, selectedPageOnCardList: action.page}
        case LIST_CARD_POSITION_INFO:
            if (!action.info) {
                message = 'Неудалось получить список позиций'
                return {...state, textInfoMessage: message}
            }
            message = ''
            return {...state, cardPositionInfo: action.info}
        default:
            return state
    }
}