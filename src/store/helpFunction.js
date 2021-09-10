export const newTime = ()=>{
    let nowDate = new Date().toISOString().split('T')
    return nowDate[0]+' '+nowDate[1].substr(0,8)
}
export const formatTime = (date) => {
    if (!date) return '-'
    let newDate = date.split('T')[0].split('-')
    return `${newDate[2]}.${newDate[1]}.${newDate[0]}`
}
export const bufferConvert = (data) => {
    let convertResult = ''
    for (let i = 0; i < data.length; i++) {
        let temp = data[i].toString(10);
        if (temp.length < 2) temp = '0' + temp
        convertResult += temp;
    }
    return convertResult
}

export const cardListCurrent = (value) => {
    if (typeof value === "boolean") value = value ? 'Да' : 'Нет'
    if (typeof value === "string" && value[value.length - 1] === 'Z') value = formatTime(value)
    if (typeof value === "string" && value === '') value = '-'
    if (value === "Empty row") value = 'нет данных'
    if (!value || value === 'undefined' || value === 'null') value = 'нет данных'
    return value
}



/** получение списка карточек товаров (значения позицыи)*/
export const getProductList = async (count, chunk, columnsSelect, columnsFilter, tableName = "DimGoods", target = "dimGoodsOut", flagBonus = false) => {
    console.log(count, chunk, columnsSelect, columnsFilter)
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': userToken,
        }, body: JSON.stringify({
            tableName: tableName,
            columnsSelect: columnsSelect,
            offset: count,
            chunk: chunk,
            columnsFilter: columnsFilter,
            target: target,
            flagBonus
        })
    }
    try {
        let response = await fetch(process.env.REACT_APP_API+'/table/rows', options)
        console.log(response.status)
        if (response.status === 200) return response.json()
    } catch (error) {
        console.log('error', error)
    }
}

/** получение списка описания информации о позиции (карта нейминга)*/
export const getListInfo = async () => {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': userToken,
        }
    }
    try {
        let response = await fetch(process.env.REACT_APP_API+'/table/columns/dimGoods', options)
        let result = response.json()
        if (response.status === 200) return result
    } catch (error) {
        console.log('error', error)
    }
}




