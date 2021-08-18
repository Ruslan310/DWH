let userToken = localStorage.getItem('currentUserToken');

/** получение списка карточек товаров*/
export const getProductList = async (count,chunk) => {
    console.log(count,chunk)
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': userToken,
        }
    }
    try {
        let response = await fetch( process.env.REACT_APP_API+`?chunk=${chunk}&offset=${count}`, options)
        let result = response.json()
        if(response.status === 200){
            return result
        }
    } catch (error) {
        console.log('error', error)
    }
}

/** получение информации по конктретному арткоду с карточки товаров*/
export const getPositionCardListInfo = async (productId) => {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': userToken,
        }
    }
    try {
        let response = await fetch(process.env.REACT_APP_API+`/${productId}`, options)
        let result = response.json()
        if(response.status === 200){
            return result
        } else {
            return ' error'
        }
    } catch (error) {
        console.log('error', error)
    }
}

/** получение количества позиций в списке карточек товаров*/
export const getCountListProduct = async () => {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': userToken,
        }
    }
    try {
        let response = await fetch( process.env.REACT_APP_API+`/quantity`, options)
        let result = response.json()
        if(response.status === 200){
            return result
        }
    } catch (error) {
        console.log('error', error)
    }
}







/** получение информации по конктретному арткоду с карточки товаров*/
export const getArtcode = async (action) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': userToken,
        },
        body: JSON.stringify(action)
    }
    try {
        let response = await fetch(process.env.REACT_APP_SAGA_API + 'getProduct', options)
        let result = response.json()
        console.log(result)
        if(response.status === 200){
            return result
        } else {
            return 'error'
        }
    } catch (error) {
        console.log('error', error)
    }
}
