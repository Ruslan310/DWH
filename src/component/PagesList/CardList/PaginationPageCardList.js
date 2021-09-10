import React from 'react';
import {getProductList} from "../../../store/helpFunction";


const PaginationPageCardList = ({
                                    selectedPageOnCardList,
                                    countListProduct,
                                    setSelectPageOnCardList,
                                    getCardList,
                                    isFilterList
                                }) => {
    const leftPortionPageNumber = selectedPageOnCardList > countListProduct.length - 5
        ? countListProduct.length - 10
        : selectedPageOnCardList - 5
    const rightPortionPageNumber = selectedPageOnCardList < 6 ? 10 : selectedPageOnCardList + 4

    const changePage = async (page) => {
        setSelectPageOnCardList(page)
        if (isFilterList?.length < 1) {
            getCardList(await getProductList(page - 1, 15, [173, 24, 2, 3], [
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
        } else {
            getCardList(await getProductList(page - 1, 15, [173, 24, 2, 3], isFilterList))
        }

    }
    return (
        <div className='countArrList'>
            <p className='listButton leftButton'
               onClick={selectedPageOnCardList < 2
                   ? null
                   : () => changePage(selectedPageOnCardList - 1)}> </p>
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
            <p className='listButton rightButton'
               onClick={selectedPageOnCardList === countListProduct.length
                   ? null
                   : () => changePage(selectedPageOnCardList + 1)}> </p>
        </div>
    )
}

export default PaginationPageCardList