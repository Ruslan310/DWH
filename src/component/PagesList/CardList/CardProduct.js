import React, {useEffect} from 'react';
import {getCountListProduct, getProductList} from "../../../store/helpFunction";
import {connect} from "react-redux";
import CardList from "./CardList";
import {getCardList, getCountCardList, selectPositionCardList, setCardListPage} from "../../../store/action";
import CardListPosition from "./CardListPosition";


const mapStateToProps = (state) => ({
    positionCardList: state.main.positionCardList,
    whatCardListPage: state.main.whatCardListPage,
    cardList: state.main.cardList,
    countListProduct: state.main.countListProduct,
    selectedPageOnCardList: state.main.selectedPageOnCardList,
})

const mapDispatchToProps = ({
    getCardList, setCardListPage, selectPositionCardList, getCountCardList
})


const CardProduct$ = (props) => {
    const loadCard = async () => {
        props.getCountCardList( await getCountListProduct())
        props.getCardList( await getProductList(props.selectedPageOnCardList-1,15) )
    }
    useEffect(() => {
        if (props.cardList.length < 1) {
            loadCard().then(null)
        }
    }, [])// eslint-disable-line

    return (
        <div className='wrapperTableCardList'>
            {props.whatCardListPage === 'list' && <CardList />}
            {props.whatCardListPage === 'position' && <CardListPosition
                positionCardList={props.positionCardList}
            />}
        </div>
    );
};

const CardProduct = connect(mapStateToProps, mapDispatchToProps)(CardProduct$)

export default CardProduct;