const XLSX = require('xlsx');

//Функция выгрузки масива обьектов в EXEL

export const exportExelCardList = (cardList) => {
    console.log(cardList)
    let result = cardList.map(el => {
        let artCode = el.ArtCode ? el.ArtCode :' '
        let code = el.sk_Goods ? el.sk_Goods : ' '
        let description = el.GoodsName ? el.GoodsName : ' '
        let descriptionUa = el.NameUA ? el.NameUA : ' '
        return {
            [`Арт код`]: artCode,
            ['Код']: code,
            ['Наименование']: description,
            ['Наименование укр.']: descriptionUa,
        }
    })

    const wb = XLSX.utils.book_new();   // создаём книгу
    const ws = XLSX.utils.json_to_sheet(result)   // создаём таблицу с массива
    ws['!cols'] = calcColumnWidth(result);    // высчитываем ширину столбцов
    XLSX.utils.book_append_sheet(wb, ws, "Report");   // подкидываем инфу в книгу
    XLSX.writeFile(wb, 'Report.xlsx');    // запись (триггерит скачивание)
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