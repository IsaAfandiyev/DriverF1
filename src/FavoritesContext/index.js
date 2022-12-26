import {createContext, useState} from "react";


export const favoritesContext = createContext(null)
export const FavoritesContextProvider = ({children}) => {
    const [favorites,setFavorites] = useState([])

    const values = {
        favorites,setFavorites
    };

    return (
        <favoritesContext.Provider value={values}>
            {children}
        </favoritesContext.Provider>
    )
}
