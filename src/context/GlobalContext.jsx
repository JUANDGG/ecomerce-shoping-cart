import { createContext, useState } from 'react';


const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [nameCategory, setnameCategory] = useState('');

    return (
        <GlobalContext.Provider value={{ nameCategory, setnameCategory }}>
            {children}
        </GlobalContext.Provider>
    );
};

export {
    GlobalContext,
    GlobalContextProvider
}