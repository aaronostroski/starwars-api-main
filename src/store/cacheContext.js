import { createContext } from "react";

export const CacheContext = createContext({ });

export const CacheContextProvider = ({children}) => {
    const context = {};
    return (
        <CacheContextProvider.Provider value={context}>
            {children}
        </CacheContextProvider.Provider>
    )
}
