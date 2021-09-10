import React, {useEffect, useState} from 'react';
import Navigation from "./component/Navigation";
import MainPage from "./component/MainPage";

const App = () => {
    const [isAuth, setAuth] = useState(false)
    const authCheck = async () => {
        let userToken = localStorage.getItem('currentUserToken');
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userToken,
            }
        }
        if (userToken) {
            let result = await fetch(`${process.env.REACT_APP_USER_API}/checkRight/${process.env.REACT_APP_ID}`, options)
                .then( res => {
                    if (res.status !== 200) return false
                    return res.json()
                } )
            if (!result) {
                localStorage.clear()
                window.location.href = 'https://tmc.lll.org.ua/'
                return null
            }
            setAuth(true)
        } else {
            localStorage.clear()
            window.location.href = 'https://tmc.lll.org.ua/'
        }
    }

    useEffect(() => {
        authCheck()
            .then(null)
    }, [])// eslint-disable-line

    if (isAuth) {
        return (
            <div className='mainWrapperPage'>
                <Navigation/>
                <MainPage/>
            </div>
        )
    } else {
        return ( <div> </div>)
    }
}

export default App;