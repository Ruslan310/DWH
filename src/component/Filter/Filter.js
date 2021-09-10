import React from 'react';
import {connect} from "react-redux";
import {
    getCardList,
    infoMessage,
    setFilterList,
    setFilterOn,
    setSelectPageOnCardList
} from "../../store/action";
import FilterCardList from "./FilterPage/FilterCardList";

const mapStateToProps = (state) => ({
    isFilter: state.main.isFilter,
    whatPageOpen: state.main.whatPageOpen,
    whatCardListPage: state.main.whatCardListPage
})
const mapDispatchToProps = ({
    setFilterOn, getCardList, setFilterList, setSelectPageOnCardList, infoMessage
})

const Filter$ = (props) => {

    return (
        <div className={props.isFilter ? 'contentFilterMenu activeFilter' : 'contentFilterMenu'}>
            <div className='titleFilterMenu' onClick={()=>props.setFilterOn('')}>
                <div>
                    <div className="leftRight"> </div>
                    <div className="rightLeft"> </div>
                </div>
                <p className='nameTitleFilter'>Filter</p>
            </div>
            {props.whatPageOpen === 'cardList' &&
                <FilterCardList
                    getCardList={props.getCardList}
                    setSelectPageOnCardList={props.setSelectPageOnCardList}
                    setFilterList={props.setFilterList}
                    infoMessage={props.infoMessage}
                />}

        </div>
    )
}

const Filter = connect(mapStateToProps, mapDispatchToProps)(Filter$)

export default Filter;