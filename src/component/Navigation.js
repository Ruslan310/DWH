import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getCardList, setCardListPage, setFilterList, setSelectPageOnCardList, whatListPage} from "../store/action";
import {getProductList} from "../store/helpFunction";

const mapStateToProps = (state) => ({
    cardList: state.main.cardList,
    whatPageOpen: state.main.whatPageOpen,
})

const mapDispatchToProps = ({
    whatListPage, getCardList,setCardListPage, setFilterList,setSelectPageOnCardList
})


const Navigation$ = (props) => {

    const onCardListPage = async () => {
        props.whatListPage('cardList')
        props.setCardListPage('list')
        props.setSelectPageOnCardList(1)
        props.getCardList(await getProductList(0, 15, [173, 2, 3, 24], [
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
    const onMarketPointPage = async () => {
        props.whatListPage('countryList')
    }

    useEffect( () => {
        if(props.whatPageOpen !== "cardList") {
            props.setFilterList([])
            props.setSelectPageOnCardList(1)
        }
    },[]) // eslint-disable-line
    return (
        <div className='wrapperBlockNavigation'>
            <div className='wrapperNavigationLogo'>
                <img className='navigationLogoImg' src="https://i.ibb.co/Rc2PLpD/logo-1-3x.png" alt=""/>
                <p className='navigationTitleLogo'>Аптека 9-1-1</p>
            </div>
            <p className='navigationTitleBeforeList'>Navigation</p>
            <div className='navigationList'>
                <hr/>
                <p className={props.whatPageOpen === 'cardList' ? 'navigationChangePage activeNavigation'
                    : 'navigationChangePage'}
                   onClick={onCardListPage}>Карточка товара - DimGoods</p>
                <p className={props.whatPageOpen === 'marketPoint' ? 'navigationChangePage activeNavigation'
                    : 'navigationChangePage'}
                   onClick={onMarketPointPage}>39 / 1С/  - DimGeoCountry</p>
            </div>
        </div>
    );
};

const Navigation = connect(mapStateToProps, mapDispatchToProps)(Navigation$)

export default Navigation;