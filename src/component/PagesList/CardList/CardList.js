import React from 'react';
import {getPositionCardListInfo} from "../../../store/helpFunction";
import {
    getCardList,
    selectPositionCardList,
    setCardListPage, setFilterOn,
    setSelectPageOnCardList
} from "../../../store/action";
import {connect} from "react-redux";
import PaginationPageCardList from "./PaginationPageCardList";

const mapStateToProps = (state) => ({
    cardList: state.main.cardList,
    countListProduct: state.main.countListProduct,
    selectedPageOnCardList: state.main.selectedPageOnCardList,
})

const mapDispatchToProps = ({
    setCardListPage, selectPositionCardList, setSelectPageOnCardList, getCardList, setFilterOn
})

const CardList$ = (props) => {

    const selectPosition = async (sk_Goods) => {
        props.selectPositionCardList(await getPositionCardListInfo(sk_Goods))
        props.setCardListPage('position')
        props.setFilterOn('')
    }

    return (
        <div className='wrapperTableCardList'>
            <div className='wrapperTableCard'>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Арт Код</th>
                        <th className='collName'>Наименование</th>
                        <th className='collName'>Наименование (укр)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.cardList && props.cardList.map(item => {
                        if(!item.isFilter) {
                            return (
                                <tr key={item.sk_Goods} className='tableCardListProduct'
                                    onClick={() => selectPosition(item.sk_Goods)}>
                                    <td className='collArtCode'>{item.ArtCode}</td>
                                    <td className='collName'>{item.GoodsName}</td>
                                    <td className='collName'>{item.NameUA}</td>
                                </tr>
                            )}
                        return null
                        }
                    )}
                    </tbody>
                </table>
            </div>
            <PaginationPageCardList
                selectedPageOnCardList={props.selectedPageOnCardList}
                countListProduct={props.countListProduct}
                getCardList={props.getCardList}
                setSelectPageOnCardList={props.setSelectPageOnCardList}/>
        </div>
    );
};

const CardList = connect(mapStateToProps, mapDispatchToProps)(CardList$)

export default CardList;