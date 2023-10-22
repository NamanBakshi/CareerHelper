import { createContext, useState } from "react";

export const UserContext=createContext({}) //returns Provider and Consumer
                                           // {} is given becoz it is initial value amd gets value from
                                           //value prop (here its user and setuser)

export const UserContextProvider=({children})=>{
    const [user,setUser]=useState({})
    return(
        //value prop takes state which needs to be passed to children components
        <UserContext.Provider value={{user, setUser}}> 
            {children}
        </UserContext.Provider>
    )
}