import React from 'react';
import useInput from "../../../store/hooks/useInput";
import {getProductList} from "../../../store/helpFunction";

const FilterCardList = (props) => {

    const inputArtCode = useInput('')
    const inputDescription = useInput('')
    const inputDescriptionUa = useInput('')

    let artCode = {
        columnId: 24,
        columnValue: inputArtCode.value,
        compareType: "Equal"
    }
    let description = {
        columnId: 2,
        columnValue: inputDescription.value,
        compareType: "Contain"
    }
    let descriptionUa = {
        columnId: 3,
        columnValue: inputDescriptionUa.value,
        compareType: "Contain"
    }

    const applyChanges = async () => {
        let someObj = []
        if (inputArtCode.value) someObj.push(artCode)
        if (inputDescription.value) someObj.push(description)
        if (inputDescriptionUa.value) someObj.push(descriptionUa)
        props.setFilterList(someObj)
        props.setSelectPageOnCardList(1)
        let resp = await getProductList(0, 15, [173, 2, 3, 24], someObj)
        if(resp) props.getCardList(resp)
        else {
            inputArtCode.onChange({target: {value: ''}})
            inputDescription.onChange({target: {value: ''}})
            inputDescriptionUa.onChange({target: {value: ''}})
            props.infoMessage('нет данных')
        }
    }

    const cancelChanges = async () => {
        props.setSelectPageOnCardList(1)
        inputArtCode.onChange({target: {value: ''}})
        inputDescription.onChange({target: {value: ''}})
        inputDescriptionUa.onChange({target: {value: ''}})
        props.getCardList(await getProductList(0, 15, [ 173, 2, 3, 24], [
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
        props.setFilterList([])
    }

    return (
        <div className='wrapperFilterCardList'>
            <div className='inputFilterMenu'>
                <p className='inputTextFilterMenu'>Арт код</p>
                <input className='inputFilter' type="text" {...inputArtCode}/>

                <p className='inputTextFilterMenu'>Наименование</p>
                <input className='inputFilter' type="text" {...inputDescription}/>

                <p className='inputTextFilterMenu'>Наименование Укр.</p>
                <input className='inputFilter' type="text" {...inputDescriptionUa}/>
            </div>
            <div className='wrapperButtonCancelInFilterMenu'>
                <div className="box-1" onClick={applyChanges}>
                    <div className="btn btnChange">
                        <span>Применить изменения</span>
                    </div>
                </div>
                <p className='buttonCanInFilter' onClick={cancelChanges}>Сброс</p>
            </div>
        </div>
    );
};

export default FilterCardList;