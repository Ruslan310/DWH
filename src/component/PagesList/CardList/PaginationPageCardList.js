import React from 'react';
import {getProductList} from "../../../store/helpFunction";


const PaginationPageCardList = ({selectedPageOnCardList, countListProduct, setSelectPageOnCardList,getCardList}) => {
    const leftPortionPageNumber = selectedPageOnCardList > countListProduct.length - 5
        ? countListProduct.length - 10
        : selectedPageOnCardList - 5
    const rightPortionPageNumber = selectedPageOnCardList < 6 ? 10 : selectedPageOnCardList + 4

    const changePage = async (page) => {
        setSelectPageOnCardList(page)
        getCardList( await getProductList(page-1,15) )
    }
    return (
        <div className='countArrList'>
            <p className='listButton leftButton'
               onClick={selectedPageOnCardList < 2
                        ? null
                        : () => setSelectPageOnCardList(selectedPageOnCardList - 1)}
            > </p>
            {countListProduct && countListProduct
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <div key={page}
                             className='pageCardListWrapper'>
                            <p onClick={() => changePage(page)}
                               className={page === selectedPageOnCardList ?
                                   'pageCardList activePage' : 'pageCardList'}
                            >{page}</p>
                        </div>
                    )
                })}
            <p  className='listButton rightButton'
                        onClick={selectedPageOnCardList === countListProduct.length
                            ? null
                            : () => setSelectPageOnCardList(selectedPageOnCardList + 1)}
                > </p>
        </div>
    )
}

export default PaginationPageCardList