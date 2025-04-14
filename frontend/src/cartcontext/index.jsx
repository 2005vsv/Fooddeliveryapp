import { createContext,useContext,useReducer } from "react";
import Cartreducer from "../Reducers/index"
const Cartcontext=createContext();
const Cartprovider=({children})=>{
    const initialstate={
        cart:[]
    }
    const [{cart},cartdispatch]=useReducer(Cartreducer,initialstate);
    return(
        <Cartcontext.Provider value={{cart,cartdispatch}}>
            {children}
        </Cartcontext.Provider>
    )
}
const usecart=()=>useContext(Cartcontext);
export {usecart,Cartprovider}
