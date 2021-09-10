import React from 'react';
import MarketPoint from "./PagesList/marketPoint/MarketPoint";
import {connect} from "react-redux";
import CardProduct from "./PagesList/CardList/CardProduct";
import {infoMessage, setCardListPage, setFilterOn} from "../store/action";
import iconFilter from '../style/filter.png'
import iconExel from '../style/Exel.png'
import {exportExelCardList} from "./otherFunction/importExel";
import {getProductList} from "../store/helpFunction";
import Filter from "./Filter/Filter";
import Modal from "./otherFunction/Modal";

const mapStateToProps = (state) => ({
    whatPageOpen: state.main.whatPageOpen,
    whatCardListPage: state.main.whatCardListPage,
    isFilter: state.main.isFilter,
    cardList: state.main.cardList,
    textInfoMessage: state.main.textInfoMessage,
    positionCardList: state.main.positionCardList,
})
const mapDispatchToProps = ({
    setCardListPage,setFilterOn, infoMessage
})

const MainPage$ = (props) => {

    const filteredOn = () => {
        props.setFilterOn('on')
    }
    const exportToEXCEL = async () => {
        if(props.whatCardListPage ==='list' && props.whatPageOpen === 'cardList') {
            let arr = await getProductList(0, 400000, [173,2,3,24], [
                {
                    columnId: 2,
                    columnValue: '',
                    compareType: "NotEqual"
                },
                {
                    columnId: 3,
                    columnValue: '',
                    compareType: "NotEqual"
                },
                {
                    columnId: 24,
                    columnValue: 10,
                    compareType: "More"
                }
                ])
            exportExelCardList(arr.payload, 'list')
        }
        if(props.whatCardListPage ==='position' && props.whatPageOpen === 'cardList') {
            exportExelCardList(props.positionCardList, 'position')
        }
    }

    return (
        <div className='wrapperMainMenuList'>
            {props.whatCardListPage === 'list' && <Filter />}
            <Modal infoMessage={props.infoMessage} textInfoMessage={props.textInfoMessage}/>
            <div className='mainTitleBlock'>
                {props.whatPageOpen ==="cardList" && props.whatCardListPage === 'list' ?
                    <h1 className='mainTitle'>Список</h1> :
                   <div className='detailsTitle'>
                       <p onClick={()=> props.setCardListPage('list')} className='listButton leftButton'> </p>
                       <h1 className='mainTitle mainDetailsTitle'>Детали</h1>
                   </div>
                }
                <div className='wrapperButtonMenu'>
                    <div className='mainTitleFilter' onClick={exportToEXCEL}>
                        <img className='imgExelIcon' src={iconExel} alt=""/>
                        <p className='mainTextTitleFilter'>Выгрузить</p>
                    </div>
                    <div className='mainTitleFilter' onClick={filteredOn}>
                        <img className='imgFilterIcon' src={iconFilter} alt=""/>
                        <p className='mainTextTitleFilter'>Фильтр</p>
                    </div>
                </div>


            </div>

            <div className='wrapperListMenu'>
                {props.whatPageOpen === 'cardList' && <CardProduct />}
                {props.whatPageOpen === 'countryList' && <MarketPoint />}
            </div>
        </div>
    );
};

const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage$)

export default MainPage;