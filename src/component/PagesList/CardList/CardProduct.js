import React, {useEffect} from 'react';
import {getListInfo, getProductList} from "../../../store/helpFunction";
import {connect} from "react-redux";
import CardList from "./CardList";
import {
    getCardList,
    listCardPositionInfo,
    selectPositionCardList,
    setCardListPage
} from "../../../store/action";
import CardListPosition from "./CardListPosition";


const mapStateToProps = (state) => ({
    positionCardList: state.main.positionCardList,
    whatCardListPage: state.main.whatCardListPage,
    cardList: state.main.cardList,
    countListProduct: state.main.countListProduct,
    selectedPageOnCardList: state.main.selectedPageOnCardList,
})

const mapDispatchToProps = ({
    getCardList, setCardListPage, selectPositionCardList, listCardPositionInfo
})


const CardProduct$ = (props) => {

    const loadCard = async () => {
        props.listCardPositionInfo(await getListInfo())
        props.getCardList(await getProductList(props.selectedPageOnCardList - 1, 15, [173, 2, 3, 24], [
            {
                columnId: 5,
                columnValue: [45],
                compareType: "In"
            },
            {
                columnId: 3,
                columnValue: "",
                compareType: "NotEqual"
            },
            {
                columnId: 2,
                columnValue: "",
                compareType: "NotEqual"
            },
            {
                columnId: 24,
                columnValue: 10,
                compareType: "More"
            }
        ]))
    }
    useEffect(() => {
        if (props.cardList?.length < 1) {
            loadCard().then(null)
        }
    }, [])// eslint-disable-line

    return (
        <div className='wrapperTableCardList'>
            {props.whatCardListPage === 'list' && <CardList/>}
            {props.whatCardListPage === 'position' && <CardListPosition
                positionCardList={props.positionCardList}
            />}
        </div>
    );
};

const CardProduct = connect(mapStateToProps, mapDispatchToProps)(CardProduct$)

export default CardProduct;