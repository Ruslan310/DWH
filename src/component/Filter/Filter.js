import React from 'react';
import {connect} from "react-redux";
import {searchFilterCardList, setFilterOn} from "../store/action";
import FilterCardList from "./FilterPage/FilterCardList";

const mapStateToProps = (state) => ({
    isFilter: state.main.isFilter,
})
const mapDispatchToProps = ({
    setFilterOn, searchFilterCardList
})


const Filter$ = (props) => {

    const closedFilterMenu = () => {
        props.setFilterOn('')
    }

    return (
        <div className={props.isFilter ? 'contentFilterMenu activeFilter' : 'contentFilterMenu'}>
            <div className='titleFilterMenu' onClick={closedFilterMenu}>
                <div>
                    <div className="leftRight"> </div>
                    <div className="rightLeft"> </div>
                </div>
                <p className='nameTitleFilter'>Filter</p>
            </div>

            <FilterCardList
                searchFilterCardList={props.searchFilterCardList}
            />
        </div>
    )
}

const Filter = connect(mapStateToProps, mapDispatchToProps)(Filter$)

export default Filter;