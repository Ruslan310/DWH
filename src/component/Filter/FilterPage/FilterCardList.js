import React, {useState} from 'react';

const FilterCardList = (props) => {

    const [ inputArtCode, setInputArtCode] = useState('')
    const [ inputCode, setInputCode] = useState('')
    const [ inputDescription, setInputDescription] = useState('')
    const [ inputDescriptionUa, setInputDescriptionUa] = useState('')

    const artCodeHandler = (e) => {
        setInputArtCode(e.target.value)
    }
    const codeHandler = (e) => {
        setInputCode(e.target.value)
    }
    const descriptionHandler = (e) => {
        setInputDescription(e.target.value)
    }
    const descriptionUaHandler = (e) => {
        setInputDescriptionUa(e.target.value)
    }


    const applyChanges = () => {
        props.searchFilterCardList({
            ArtCode: inputArtCode,
            sk_Goods: inputCode,
            GoodsName: inputDescription,
            NameUA: inputDescriptionUa
        })
        console.log('changes')
    }
    const cancelChanges = () => {
        setInputArtCode('')
        setInputCode('')
        setInputDescription('')
        setInputDescriptionUa('')
        console.log('cancel')
    }

    return (
        <div className='wrapperFilterCardList'>
            <div className='inputFilterMenu'>
                <p className='inputTextFilterMenu'>Арт код</p>
                <input className='inputFilter' type="text" value={inputArtCode} onChange={artCodeHandler}/>

                <p className='inputTextFilterMenu'>Код</p>
                <input className='inputFilter' type="text" value={inputCode} onChange={codeHandler}/>

                <p className='inputTextFilterMenu'>Наименование</p>
                <input className='inputFilter' type="text" value={inputDescription} onChange={descriptionHandler}/>

                <p className='inputTextFilterMenu'>Наименование Укр.</p>
                <input className='inputFilter' type="text" value={inputDescriptionUa} onChange={descriptionUaHandler}/>
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