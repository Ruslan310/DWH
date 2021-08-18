import React from 'react';
import Country from "./PagesList/Country";
import {connect} from "react-redux";
import CardProduct from "./PagesList/CardList/CardProduct";
import {infoMessage, setCardListPage, setFilterOn} from "../store/action";
import iconFilter from '../style/filter.png'
import iconExel from '../style/Exel.png'
import {exportExelCardList} from "./otherFunction/importExel";
import {getCountListProduct, getProductList} from "../store/helpFunction";
import Filter from "./Filter";
import Modal from "./otherFunction/Modal";

const mapStateToProps = (state) => ({
    whatPageOpen: state.main.whatPageOpen,
    whatCardListPage: state.main.whatCardListPage,
    isFilter: state.main.isFilter,
    cardList: state.main.cardList,
    textInfoMessage: state.main.textInfoMessage,
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
            let count = await getCountListProduct()
            let arr = await getProductList(0, count)
            exportExelCardList(arr)
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
                {props.whatPageOpen === 'countryList' && <Country />}
            </div>
        </div>
    );
};

const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage$)

export default MainPage;