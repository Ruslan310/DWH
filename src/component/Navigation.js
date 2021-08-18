import React from 'react';
import {connect} from "react-redux";
import {getCardList, setCardListPage, whatListPage} from "../store/action";

const mapStateToProps = (state) => ({
    cardList: state.main.cardList,
    whatPageOpen: state.main.whatPageOpen,
})

const mapDispatchToProps = ({
    whatListPage, getCardList,setCardListPage
})


const Navigation$ = (props) => {

    const onCardListPage = async () => {
        props.whatListPage('cardList')
        props.setCardListPage('list')
    }
    const onCountryPage = async () => {
        props.whatListPage('countryList')
    }
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
                <p className={props.whatPageOpen === 'countryList' ? 'navigationChangePage activeNavigation'
                    : 'navigationChangePage'}
                   onClick={onCountryPage}>39 / 1С/ Страна - DimGeoCountry</p>
            </div>
        </div>
    );
};

const Navigation = connect(mapStateToProps, mapDispatchToProps)(Navigation$)

export default Navigation;