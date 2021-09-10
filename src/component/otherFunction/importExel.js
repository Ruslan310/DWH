import {newTime} from "../../store/helpFunction";
const XLSX = require('xlsx');

//Функция выгрузки масива обьектов в EXEL

export const exportExelCardList = (cardList, type) => {
    let result
    if(type === 'list') {
        result = cardList.map(el => {
            let artCode = el.ArtCode ? el.ArtCode :' '
            let description = el.GoodsName ? el.GoodsName : ' '
            let descriptionUa = el.NameUA ? el.NameUA : ' '
            let obj ={}
                obj[`Арт код`] =  artCode
                obj['Наименование'] = description
                obj['Наименование укр.'] = descriptionUa
            return obj
        })
    }
    if(type === 'position') {
        result = cardList.map( el => {
            let obj =  {}
                obj['№'] = el.orderNumber
                obj['Название'] = el.cardAttribute
                obj['Значение'] = el.value
            return obj
        })
    }
    const wb = XLSX.utils.book_new();   // создаём книгу
    const ws = XLSX.utils.json_to_sheet(result)   // создаём таблицу с массива
    ws['!cols'] = calcColumnWidth(result);    // высчитываем ширину столбцов
    XLSX.utils.book_append_sheet(wb, ws, "Report");   // подкидываем инфу в книгу
    XLSX.writeFile(wb, `Report ${newTime()}.xlsx`);    // запись (триггерит скачивание)
}

// Функция подсчёта ширины столбцов
const calcColumnWidth = (array) => {
    let lengths = []
    for (let key in array[0]) {
        let length = key.toString().length
        for (let i = 0; i < array.length; i++) {
            let current = array[i][key].toString().length
            if (current > length) length = current
        }
        lengths.push({wch: length + 1})
    }
    return lengths
}