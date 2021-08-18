import React from 'react';
import Navigation from "./component/Navigation";
import MainPage from "./component/MainPage";

const App = () => {
    return (
        <div className='mainWrapperPage'>
            <Navigation />
            <MainPage />
        </div>
    )
};

export default App;