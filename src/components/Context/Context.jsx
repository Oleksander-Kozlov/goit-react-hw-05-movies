import React, { useState, useContext } from "react";

const ContextAlert = React.createContext()
 
export const useCustomContext = () => {
    return  useContext (ContextAlert) 
}

const Context = ({ children }) => {
    const [toggleAlert, setToggleAlert] = useState(false)
    const [movieList, setMovieList] = useState(null)
     return   (< ContextAlert.Provider
    value = {{
        toggleValue: toggleAlert,
            toggle: setToggleAlert,
            movieList: movieList,
                setMovieList:setMovieList,
    }}>{children}</ContextAlert.Provider>
)
}
export default Context